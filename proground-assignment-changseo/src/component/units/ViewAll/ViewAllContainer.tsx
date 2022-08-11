import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { v4 as uuidv4 } from "uuid";

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

const ModalBox = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 350px;
  margin-left: -50px;
  margin-right: -50px;
  top: 10;
  left: 50px;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 0.2rem;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;
`;
const Profile = styled.span`
  font-size: 20px;
  font-weight: bold;
`;
interface ListType {
  image?: string | undefined;
  price?: string | undefined;
  serialNumber?: string | undefined;
}
export default function ViewAllPage() {
  const [list, setList] = useState([]);
  const [blobUser, setBlobUser] = useState<ListType[]>([]);
  const [modal, setModal] = useState(false);

  const delay = (ms: number) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const openBlockUser = async (e: any) => {
    const result = JSON.parse(e.target.id);
    setBlobUser(result);
    await delay(100);
    return setModal((prev) => !prev);
  };
  console.log(blobUser);

  useEffect(() => {
    setList(JSON.parse(localStorage.getItem("List") || "[]"));
  }, []);

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
      {modal && (
        <ModalBox>
          <Profile>Profile</Profile>
          <ProfileImg src={blobUser?.image} />
        </ModalBox>
      )}
    </Wrapper>
  );
}
