import axios from "axios";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { UserDataAction } from "../../../redux/store/actionCreators";

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid red;
`;
const ScoreBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ScoreFont = styled.div`
  font-size: 30px;
`;

const Score = styled.div``;

const ScoreBar = styled.div``;

const SuperWalkers = styled.div``;

const EstimatedBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const EstimatedFont = styled.div``;

const Estimated = styled.div``;

const LeaderBoardBox = styled.div`
  display: flex;
`;

const LeaderBoardMent = styled.div``;

const ViewAll = styled.div``;

const LeaderBoard = styled.div``;

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
  border: 1px solid green;
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

  useEffect(() => {
    const fetchUserList = async () => {
      const result = await axios.get(
        "https://mxl2ywa4zhlvwjymvb5gnc247a0qfndn.lambda-url.ap-northeast-2.on.aws/?limit=20&offset=0"
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

  console.log("aa", userList);
  return (
    <Wrapper>
      <ScoreBox>
        <ScoreFont>Daily Score</ScoreFont>
        <Score>0 point</Score>
        <ScoreBar></ScoreBar>
        <SuperWalkers>Top 100% of SuperWalkers</SuperWalkers>
      </ScoreBox>
      <EstimatedBox>
        <EstimatedFont>Estimated WALK</EstimatedFont>
        <Estimated>
          <span>You Can Earn</span>
          <span>0 Walk</span>
          <span>estimated as of yesterday</span>
        </Estimated>
      </EstimatedBox>
      <LeaderBoardBox>
        <LeaderBoardMent>Leader Board</LeaderBoardMent>
        <ViewAll>ViewAll</ViewAll>
      </LeaderBoardBox>
      <LeaderBoard>
        {userList.length ? (
          userList.map((el: any, idx: number) => (
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
    </Wrapper>
  );
}
