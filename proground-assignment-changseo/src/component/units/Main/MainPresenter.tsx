import { v4 as uuidv4 } from "uuid";
import { ListType } from "../../commons/types/ListType";
import ViewAllPage from "../ViewAll/ViewAllContainer";
import * as S from "./MainStyles";

interface IPropsMainUI {
  userList: ListType[];
  view: boolean;
  viewLeaderBoard: () => void;
}

export default function MainUI(props: IPropsMainUI) {
  return (
    <S.Wrapper>
      {props.view ? (
        <ViewAllPage />
      ) : (
        <>
          <S.ScoreBox>
            <S.ScoreFont>Daily Score</S.ScoreFont>
            <S.Score>0 point</S.Score>
            <S.ScoreBar></S.ScoreBar>
            <S.SuperWalkers>
              Top <span style={{ color: "#ff5100" }}>100%</span> of SuperWalkers
            </S.SuperWalkers>
          </S.ScoreBox>
          <S.EstimatedBox>
            <S.EstimatedFont>Estimated WALK</S.EstimatedFont>
            <S.Estimated>
              <S.EstimatedMent>You Can Earn</S.EstimatedMent>
              <S.EstimatedMent>
                <span style={{ fontSize: "40px" }}>0</span> Walk
              </S.EstimatedMent>
              <S.EstimatedMent style={{ color: "gray" }}>
                estimated as of yesterday
              </S.EstimatedMent>
            </S.Estimated>
          </S.EstimatedBox>
          <S.LeaderBoardBox>
            <S.LeaderBoardMent>
              <S.LeaderBoardMent>Leader Board</S.LeaderBoardMent>
              <S.ViewAll onClick={props.viewLeaderBoard}>ViewAll</S.ViewAll>
            </S.LeaderBoardMent>
            <S.LeaderBoard>
              {props.userList.length ? (
                props.userList.map((el, idx: number) => (
                  <S.List key={uuidv4()}>
                    <S.Leader>{idx + 1}</S.Leader>
                    <S.ProfileImg src={el.image} />
                    <S.UserName>{el.serialNumber}</S.UserName>
                    <S.EarnCoin>{el.price}</S.EarnCoin>
                  </S.List>
                ))
              ) : (
                <div>Loading</div>
              )}
            </S.LeaderBoard>
          </S.LeaderBoardBox>
        </>
      )}
    </S.Wrapper>
  );
}
