import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userInfo: {},
  },
  reducers: {
    addUser: (state, action) => {
      state.userInfo = action.payload;
    },
    setUser: (state, action) => {
      state.userInfo = action.payload;
      console.log("ben setUser ", action.payload);
    },
    updateUser: (state, action) => {
      state.userInfo = action.payload;
    },
    logOut: (state, action) => {
      AsyncStorage.removeItem("userKey");
      state.userInfo = action.payload;
      console.log("LogOut yapıldı");
    },
  },
});

export const { addUser, setUser, updateUser, sigIn, logOut } =
  userSlice.actions;

export default userSlice.reducer;
