import { Dispatch, MouseEvent, SetStateAction } from "react";
import styled from "styled-components";

const ModalBox = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 350px;
  margin-left: -50px;
  margin-right: -50px;
  top: 10;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0 auto;
  background-color: #fff;
  border: 1px solid lightgray;
  border-radius: 20px 20px 0px 0px;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;
`;
const Profile = styled.span`
  font-size: 40px;
  font-weight: bold;
`;
const ProfileImg = styled.img`
  width: 150px;
  height: 150px;
  border: 1px solid lightgray;
  background-color: lightgray;
  border-radius: 100%;
`;
const UserName = styled.div`
  font-size: 20px;
  font-weight: bold;
`;
const Button = styled.button`
  width: 30%;
  height: 50px;
  font-size: 20px;
  font-weight: bold;
  border: 3px solid black;
  box-shadow: 5px 5px;
  border-radius: 10px;
  background-color: white;
`;

interface IPropsModal {
  blobUser: string;
  setModal: Dispatch<SetStateAction<boolean>>;
}

export default function Modal(props: IPropsModal) {
  const blobUser = JSON.parse(props.blobUser);

  const onClickBlockUser = (e: MouseEvent<HTMLButtonElement>) => {
    const list = JSON.parse(localStorage.getItem("List") || "[]");
    const temp = list.filter(
      (el: any) => el.serialNumber !== (e.target as Element).id
    );
    localStorage.setItem("List", JSON.stringify(temp));
    props.setModal(false);
  };

  return (
    <ModalBox>
      <Profile>Profile</Profile>
      <ProfileImg src={blobUser.image} />
      <UserName>{blobUser.serialNumber}</UserName>
      <Button id={blobUser.serialNumber} onClick={onClickBlockUser}>
        Block
      </Button>
    </ModalBox>
  );
}
