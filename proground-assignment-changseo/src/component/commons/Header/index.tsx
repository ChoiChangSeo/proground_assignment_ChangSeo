import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { breakPoints } from "../../../styles/media";

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px 20px 10px 20px;
  width: 100vw;
  position: fixed;
  background-color: white;
  @media ${breakPoints.mobile} {
    padding: 10px 20px 10px 20px;
  }
`;
const CoinWrapper = styled.div`
  display: flex;
  background-color: #f0f0f0;
  width: 32%;
  height: 30px;
  justify-content: space-around;
  border-radius: 15px;
  margin-right: 10px;
  @media ${breakPoints.mobile} {
    width: 50%;
  }
`;
const Wallet = styled.img`
  width: 30px;
  height: 30px;
`;
const Coin = styled.div`
  display: flex;
  align-items: center;
`;
const CoinImg = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 5px;
  @media ${breakPoints.mobile} {
    width: 15px;
    height: 15px;
  }
`;
const Profile = styled.img`
  width: 30px;
  height: 30px;
`;
const Box = styled.div`
  width: 80%;
  display: flex;
  justify-content: end;
`;

const Font = styled.span`
  font-size: 12px;
  font-weight: bold;
  @media ${breakPoints.mobile} {
    font-size: 8px;
    font-weight: bold;
  }
`;
const BackButton = styled.img`
  margin-right: 30%;
  cursor: pointer;
  @media ${breakPoints.mobile} {
    width: 30px;
    height: 30px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-left: 6%;
`;

const LeaderBoard = styled.span`
  font-size: 30px;
  font-weight: bold;
  @media ${breakPoints.mobile} {
    font-size: 20px;
    font-weight: bold;
  }
`;
export default function Header() {
  const view = useSelector((state: any) => state.viewAll);
  const dispatch = useDispatch();
  const backMain = () => {
    dispatch({ type: "vewALL/BACK_STATE" });
  };
  return (
    <Headers>
      {view ? (
        <Wrapper>
          <BackButton onClick={backMain} src="back_black.png" />
          <LeaderBoard>Leader Board</LeaderBoard>
        </Wrapper>
      ) : (
        <>
          <Profile src="/profile.png" />
          <Box>
            <CoinWrapper>
              <Coin>
                <CoinImg src="/CNK.png" />
                <Font>1.2</Font>
              </Coin>
              <Coin>
                <CoinImg src="GRND.png" />
                <Font>0</Font>
              </Coin>
              <Coin>
                <CoinImg src="KLAY.png" />
                <Font>1.07</Font>
              </Coin>
            </CoinWrapper>
            <Wallet src="/wallet.png" />
          </Box>
        </>
      )}
    </Headers>
  );
}
