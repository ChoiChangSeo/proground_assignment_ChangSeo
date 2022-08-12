const VIEWALL_STATE = "viewAll/SET_VIEWALL" as const;
const BACK_STATE = "vewALL/BACK_STATE" as const;

export const modifyUserData = (data: any) => ({
  data: data,
  type: VIEWALL_STATE,
});

const initialState = {
  viewAll: false,
};

export default function viewAll(state = initialState, action: any) {
  switch (action.type) {
    case VIEWALL_STATE:
      return true;
    case BACK_STATE:
      return false;
    default:
      return false;
  }
}
