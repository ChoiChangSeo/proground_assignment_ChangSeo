import axios from "axios";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { UserDataAction } from "../../../redux/store/actionCreators";
import { ListType } from "../../commons/types/ListType";
import MainUI from "./MainPresenter";

export default function MainPage() {
  const userList = useSelector((state: any) => state.userData);
  const view = useSelector((state: any) => state.viewAll);
  const dispatch = useDispatch();

  const viewLeaderBoard = () => {
    dispatch({ type: "viewAll/SET_VIEWALL" });
  };

  const fetchUserList = async () => {
    const result = await axios.get(
      "https://mxl2ywa4zhlvwjymvb5gnc247a0qfndn.lambda-url.ap-northeast-2.on.aws/?limit=100&offset=0"
    );
    const listSort = result.data.sort((a: ListType, b: ListType) => {
      return Number(b.price) - Number(a.price);
    });
    UserDataAction.modifyUserData(
      listSort.filter((_: ListType, idx: number) => {
        return idx < 10;
      })
    );
    localStorage.setItem("List", JSON.stringify(listSort));
  };

  useEffect(() => {
    fetchUserList();
  }, []);

  return (
    <MainUI userList={userList} view={view} viewLeaderBoard={viewLeaderBoard} />
  );
}
