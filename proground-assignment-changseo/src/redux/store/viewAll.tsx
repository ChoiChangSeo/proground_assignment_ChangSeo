// userData.js
// 액션 타입을 정의한다.
const VIEWALL_STATE = "viewAll/SET_VIEWALL";
const BACK_STATE = "vewALL/BACK_STATE";
// 액션 생성함수를 만든다.
export const modifyUserData = (data: any) => ({
  data: data,
  type: VIEWALL_STATE,
});

// 초기값 제작
const initialState = {
  viewAll: false,
};

/* 리듀서 선언 */
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
