import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";

interface IListPayload {
  uid?: string;
  listId?: string;
  list?: string;
  _id?: string;
  book?: unknown;
}

interface IList {
  wishlist: IListPayload[];
  reading: IListPayload[];
  completed: IListPayload[];
}

const initialState: IList = {
  wishlist: [],
  reading: [],
  completed: [],
};

const listSlice = createSlice({
  name: "list",
  initialState,
  reducers: {},
});

// export const {  } = listSlice.actions;

export default listSlice.reducer;
