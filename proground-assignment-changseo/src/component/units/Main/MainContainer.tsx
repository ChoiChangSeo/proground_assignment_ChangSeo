import axios from "axios";
import { useEffect } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useSelector, useDispatch } from "react-redux";
import { UserDataAction } from "../../../redux/store/actionCreators";
import ViewAllPage from "../ViewAll/ViewAllContainer";
import { breakPoints } from "../../../styles/media";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 15px;
`;

const ScoreFont = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Score = styled.div`
  font-size: 15px;
  font-weight: 550;
  margin-bottom: 10px;
  ::first-letter {
    font-size: 40px;
  }
`;

const ScoreBar = styled.div`
  width: 80%;
  border-radius: 10px;
  border-top: 10px solid orange;
  margin-bottom: 10px;
`;

const SuperWalkers = styled.div`
  font-size: 15px;
  font-weight: 550;
  color: #919191;
  margin-bottom: 15px;
`;

const EstimatedBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(to top, white, #ececec, #ebebeb, #dfdfdf);
  padding: 20px;
`;

const EstimatedFont = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

const Estimated = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  box-shadow: 0px 0px 3px 3px lightgray;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: url("../../running.png");
`;

const EstimatedMent = styled.span`
  width: 100%;
  margin-bottom: 15px;
  font-size: 20px;
  font-weight: 550;
`;

const LeaderBoardBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, white, #e9e9e9, #dfdfdf);
  padding: 20px;
  margin-bottom: 80px;
`;

const LeaderBoardMent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 550;
`;

const ViewAll = styled.div``;

const LeaderBoard = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 1px 1px lightgray;
`;

const List = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
const Leader = styled.div`
  width: 3%;
`;

const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border: 1px solid lightgray;
  background-color: lightgray;
  border-radius: 100%;
`;

const UserName = styled.div``;

const EarnCoin = styled.div`
  width: 30%;
  text-align: center;
`;
interface ListType {
  image: string | undefined;
  price: string | undefined;
  serialNumber: string | undefined;
}
export default function MainPage() {
  const userList = useSelector((state: any) => state.userData);
  const view = useSelector((state: any) => state.viewAll);
  const dispatch = useDispatch();

  const viewLeaderBoard = () => {
    dispatch({ type: "viewAll/SET_VIEWALL" });
  };
  console.log(view);
  useEffect(() => {
    const fetchUserList = async () => {
      const result = await axios.get(
        "https://mxl2ywa4zhlvwjymvb5gnc247a0qfndn.lambda-url.ap-northeast-2.on.aws/?limit=100&offset=0"
      );
      const listSort = result.data.sort((a: any, b: any) => {
        return b.price - a.price;
      });
      UserDataAction.modifyUserData(
        listSort.filter((el: any, idx: any) => {
          return idx < 10;
        })
      );
      localStorage.setItem("List", JSON.stringify(listSort));
    };
    fetchUserList();
  }, []);
  return (
    <Wrapper>
      {view ? (
        <ViewAllPage />
      ) : (
        <>
          <ScoreBox>
            <ScoreFont>Daily Score</ScoreFont>
            <Score>0 point</Score>
            <ScoreBar></ScoreBar>
            <SuperWalkers>
              Top <span style={{ color: "#ff5100" }}>100%</span> of SuperWalkers
            </SuperWalkers>
          </ScoreBox>
          <EstimatedBox>
            <EstimatedFont>Estimated WALK</EstimatedFont>
            <Estimated>
              <EstimatedMent>You Can Earn</EstimatedMent>
              <EstimatedMent>0 Walk</EstimatedMent>
              <EstimatedMent style={{ color: "gray" }}>
                estimated as of yesterday
              </EstimatedMent>
            </Estimated>
          </EstimatedBox>
          <LeaderBoardBox>
            <LeaderBoardMent>
              <LeaderBoardMent>Leader Board</LeaderBoardMent>
              <ViewAll onClick={viewLeaderBoard}>ViewAll</ViewAll>
            </LeaderBoardMent>
            <LeaderBoard>
              {userList.length ? (
                userList.map((el: ListType, idx: number) => (
                  <List key={uuidv4()}>
                    <Leader>{idx + 1}</Leader>
                    <ProfileImg src={el.image} />
                    <UserName>{el.serialNumber}</UserName>
                    <EarnCoin>{el.price}</EarnCoin>
                  </List>
                ))
              ) : (
                <div>Loading</div>
              )}
            </LeaderBoard>
          </LeaderBoardBox>
        </>
      )}
    </Wrapper>
  );
}
