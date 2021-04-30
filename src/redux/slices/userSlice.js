import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

/*const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {role : "visiteur"};*/

let initialState = {
  user:localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : {role : "visiteur"} ,
  selectedUserlog: {},
  errors: "",
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        loginUser(state, action) {
            state.user = action.payload;
          },
        logoutUser(state,action){
          state.user = action.payload;
        },
        setErrors(state, action) {
            state.errors = action.payload;
          }
      
    }
})

export const loginUserfind = (connectuser) => async (dispatch) => {
    
          dispatch(loginUser(connectuser));
    
  }
export const logoutUserfind = (userout) => async (dispatch)=>{
  dispatch(logoutUser(userout));
}
  export const selectConnectuser = (state) => {
    return [state.user.user , state.user.errors];
  }

  export const {
    loginUser,
    logoutUser,
    setErrors
  } = userSlice.actions;
  
  export default userSlice.reducer;