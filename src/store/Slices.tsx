import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type isChatOpenState = {
  value: boolean;
};

const initialState: isChatOpenState = {
  value: false,
};

export const Slices = createSlice({
  name: "slice",
  initialState,
  reducers: {
    toggleIsChatOpen: (state) => {
      state.value = !state.value;
    },
    toggleisOpenNavMenu: (state, actions: PayloadAction<boolean>) => {},
  },
});

// Action creators are generated for each case reducer function
export const { toggleIsChatOpen, toggleisOpenNavMenu } = Slices.actions;

export default Slices.reducer;
