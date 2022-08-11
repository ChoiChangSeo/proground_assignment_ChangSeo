import { bindActionCreators } from "redux";
import * as userDataAction from "./userData";
import * as viewAllState from "./viewAll";
import { store } from "./store";

const { dispatch } = store;

export const UserDataAction = bindActionCreators(userDataAction, dispatch);
export const ViewAllAction = bindActionCreators(viewAllState,dispatch)