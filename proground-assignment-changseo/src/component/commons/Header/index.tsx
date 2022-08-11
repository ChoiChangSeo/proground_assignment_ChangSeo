import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

const Headers = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  width: 100vw;
  position: fixed;
  background-color: white;
`;
const CoinWrapper = styled.div`
  display: flex;
  background-color: #f0f0f0;
  width: 32%;
  height: 30px;
  justify-content: space-around;
  border-radius: 15px;
  margin-right: 10px;
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
`;
const BackButton = styled.img`
  margin-right: 30%;
  cursor: pointer;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  padding-left: 20px;
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
          <Font style={{ fontSize: "30px" }}>Leader Board</Font>
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
