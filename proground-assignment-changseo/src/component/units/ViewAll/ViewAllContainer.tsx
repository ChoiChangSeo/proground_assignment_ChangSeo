import { MouseEvent, useEffect, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import { breakPoints } from "../../../styles/media";
import Modal from "../../commons/Modal";
import { ListType } from "../../commons/types/ListType";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  margin-top: 4%;
  overflow-y: scroll;
  @media ${breakPoints.tablet} {
    margin-top: 8%;
  }
  @media ${breakPoints.mobile} {
    margin-top: 13%;
  }
`;
const LeaderBoard = styled.div`
  padding: 10px;
  background-color: white;
`;

const List = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 10px;
  cursor: pointer;
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

export default function ViewAllPage() {
  const [list, setList] = useState([]);
  const [blobUser, setBlobUser] = useState<string>("");
  const [modal, setModal] = useState(false);

  const openBlockUser = (e: MouseEvent<HTMLDivElement>) => {
    setBlobUser(e.currentTarget.id);
    setModal((prev) => !prev);
  };

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem("List") || "[]"));
  }, [modal]);

  return (
    <Wrapper>
      <LeaderBoard>
        {list.length ? (
          list.map((el: ListType, idx: number) => (
            <List
              id={JSON.stringify(el)}
              onClick={openBlockUser}
              key={uuidv4()}
            >
              <Leader>{idx + 1}</Leader>
              <ProfileImg className="image" src={el.image} />
              <UserName>{el.serialNumber}</UserName>
              <EarnCoin>{el.price}</EarnCoin>
            </List>
          ))
        ) : (
          <div>Loading</div>
        )}
      </LeaderBoard>
      {modal && <Modal setModal={setModal} blobUser={blobUser} />}
    </Wrapper>
  );
}
