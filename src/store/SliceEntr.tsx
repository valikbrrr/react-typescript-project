import { createSlice } from "@reduxjs/toolkit";

type toggle = {
  isEntr: boolean;
};

const initialState: toggle = {
  isEntr: true,
};

export const SliceEntr = createSlice({
  name: "EntrOrReg",
  initialState,
  reducers: {
    toggleEntrOrReg: (state) => {
      state.isEntr = !state.isEntr;
    },
  },
});

export const { toggleEntrOrReg } = SliceEntr.actions;

export default SliceEntr.reducer;
