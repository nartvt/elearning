import { USER_LOGIN } from "./Type";
import  userService  from "./../../services/UserService";
import { restConnector } from "../../Connectors/Axios";

export const login = (values,replace) => {
  return dispatch => {
    userService.signIn(values).then(res => {
      localStorage.setItem("loginUser", JSON.stringify(res.data));
      restConnector.defaults.headers['Authorization'] = `Bearer ${res.data.accessToken}`;
     dispatch(actUserLogin(res.data));
     replace('/');
    }).catch(err => {
      console.log(err.message);
    });
  }
}


export const actUserLogin = (user) => ({
  type: USER_LOGIN,
  payload:{user}
})