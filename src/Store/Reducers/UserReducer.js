import { USER_LOGIN } from "../actions/Type";

let initialState = {
  userLogin: null,

}

const UserReducer =(state=initialState,action)=> {
  switch (action.type) {
    case USER_LOGIN:
      state.userLogin= action.payload.user;
      return { ...state };
    default: return state;
  }
}

export default UserReducer;