import { createSlice } from "@reduxjs/toolkit"
import axios from 'axios'

let initialState = {
  users: [],
  selectedUser: {},
  errors: "",
};

const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers: {
        populateUsers(state, action) {
            state.users = action.payload;
          },
        setErrors(state, action) {
            state.errors = action.payload;
          }
      
    }
})

export const fetchUsers = () => async (dispatch) => {
    axios.get('http://localhost:5000/users',{withCredentials : true}).then((res,err)=>{
       /* if(err){
            dispatch(setErrors(err));
        }else {
            dispatch(populateUsers(res));
          }*/
          dispatch(populateUsers(res.data));
    })
  }

  export const selectUsers = (state) => {
    return [state.users.users,state.users.errors];
  }

  export const {
    populateUsers,
    setErrors
  } = usersSlice.actions;
  
  export default usersSlice.reducer;
  