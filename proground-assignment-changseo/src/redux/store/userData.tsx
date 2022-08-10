// userData.js
// 액션 타입을 정의한다.
const MODIFY_USERDATA = "userData/MODIFY_USERDATA";

// 액션 생성함수를 만든다.
export const modifyUserData = (data: any) => ({
  data: data,
  type: MODIFY_USERDATA,
});

// 초기값 제작
const initialState = {
  userList: [],
};

/* 리듀서 선언 */
export default function userData(state = initialState, action: any) {
  switch (action.type) {
    case MODIFY_USERDATA:
      return action.data
    default:
      return state;
  }
}
