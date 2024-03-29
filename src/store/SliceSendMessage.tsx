import { createSlice } from "@reduxjs/toolkit";

interface List {
  id: string;
  text: string;
  completed: boolean;
}

// interface ListState {
//   list: List[];
// }

export const sendMessageSlice = createSlice({
  name: "listForMessage", // More descriptive slice name
  initialState: {
    // messages: [
    //   id: String,
    //   text: String,
    //   compiled: Boolean,
    // ],
  },
  reducers: {
    // ToDoSend(state, action: { payload: { text: string } }) {
    //   state.messages.push({
    //     id: new Date().toISOString(),
    //     text: action.payload.text,
    //     completed: false,
    //   });
    // },
  },
});

// export const { ToDoSend } = sendMessageSlice.actions;

export default sendMessageSlice.reducer;
