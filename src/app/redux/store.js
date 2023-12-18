const { configureStore } = require("@reduxjs/toolkit");
import userReducer from "./slice";
import todoReducer from "./todoSlice";
export const store = configureStore({
  reducer:{
    userInfo:userReducer,
    todoInfo:todoReducer
  }
});
