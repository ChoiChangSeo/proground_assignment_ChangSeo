import styled from "styled-components";
import { breakPoints } from "../../../styles/media";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const ScoreBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 20px;
  margin-top: 3%;
  @media ${breakPoints.mobile} {
    margin-top: 8%;
  }
`;

export const ScoreFont = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Score = styled.div`
  font-size: 15px;
  font-weight: 550;
  margin-bottom: 10px;
  ::first-letter {
    font-size: 40px;
  }
`;

export const ScoreBar = styled.div`
  width: 80%;
  border-radius: 10px;
  border-top: 10px solid orange;
  margin-bottom: 10px;
`;

export const SuperWalkers = styled.div`
  font-size: 15px;
  font-weight: 550;
  color: #919191;
  margin-bottom: 15px;
`;

export const EstimatedBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background: linear-gradient(to top, white, #ececec, #ebebeb, #dfdfdf);
  padding: 20px;
`;

export const EstimatedFont = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const Estimated = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 25px;
  box-shadow: 0px 0px 3px 3px lightgray;
  border-radius: 5px;
  background-repeat: no-repeat;
  background-size: contain;
  background: linear-gradient(to top, #ffac4e, #ffe7c2, white, white);
`;

export const EstimatedMent = styled.span`
  width: 100%;
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 550;
`;

export const LeaderBoardBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  background: linear-gradient(to bottom, white, #e9e9e9, #dfdfdf);
  padding: 20px;
  margin-bottom: 80px;
`;

export const LeaderBoardMent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  font-size: 20px;
  font-weight: 550;
`;

export const ViewAll = styled.div`
  font-weight: normal;
`;

export const LeaderBoard = styled.div`
  padding: 10px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0px 0px 1px 1px lightgray;
`;

export const List = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 5px;
`;
export const Leader = styled.div`
  width: 3%;
`;

export const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border: 1px solid lightgray;
  background-color: lightgray;
  border-radius: 100%;
`;

export const UserName = styled.div``;

export const EarnCoin = styled.div`
  width: 30%;
  text-align: center;
`;
