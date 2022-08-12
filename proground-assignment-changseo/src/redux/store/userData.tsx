const MODIFY_USERDATA = "userData/MODIFY_USERDATA" as const;

export const modifyUserData = (data: any) => ({
  data: data,
  type: MODIFY_USERDATA,
});

const initialState = {
  userList: [],
};

export default function userData(state = initialState, action: any) {
  switch (action.type) {
    case MODIFY_USERDATA:
      return action.data;
    default:
      return state;
  }
}
