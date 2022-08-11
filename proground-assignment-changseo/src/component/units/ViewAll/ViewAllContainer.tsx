import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";
import Modal from "../../commons/Modal";

const Wrapper = styled.div`
  width: 100%;
  height: 750px;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
  overflow-y: scroll;
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
  image?: string | undefined;
  price?: string | undefined;
  serialNumber?: string | undefined;
}
export default function ViewAllPage() {
  const [list, setList] = useState([]);
  const [blobUser, setBlobUser] = useState<any>([]);
  const [modal, setModal] = useState(false);

  const openBlockUser = (e: any) => {
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
