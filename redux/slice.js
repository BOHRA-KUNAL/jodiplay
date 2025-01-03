import { getSetData } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    token: getSetData("token") || "",
    headerTitle: getSetData("docTitle") || "JODI PLAY",
    contact_details: {},
    userId: null,
  },
  reducers: {
    setHeaderTitle: (state, action) => {
      getSetData("docTitle", action.payload);
      document.title = action.payload;
      state.headerTitle = action.payload;
    },
    setContactDetails: (state, action) => {
      state.contact_details = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setHeaderTitle, setContactDetails, setUserId } = dataSlice.actions;

export default dataSlice.reducer;