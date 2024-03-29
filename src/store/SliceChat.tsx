import { createSlice } from "@reduxjs/toolkit";

type isOpen = {
  valueChat: boolean;
  valueNavMenu: boolean;
  valueSmile: boolean;
};

const initialState: isOpen = {
  valueChat: false,
  valueNavMenu: false,
  valueSmile: false,
};

export const SliceChat = createSlice({
  name: "slice",
  initialState,
  reducers: {
    toggleIsChatOpen: (state) => {
      state.valueChat = !state.valueChat;
    },
    toggleisOpenNavMenu: (state) => {
      state.valueNavMenu = !state.valueNavMenu;
    },
    toggleSmileCollection: (state) => {
      state.valueSmile = !state.valueSmile;
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggleIsChatOpen, toggleisOpenNavMenu, toggleSmileCollection } =
  SliceChat.actions;

export default SliceChat.reducer;
