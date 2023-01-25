import { createSlice } from "@reduxjs/toolkit";

const ListSlice = createSlice({
  name: "List",
  initialState: { items: [] },
  reducers: {
    addItemToList(state, action) {
      const newItem = action.payload;
      const existingItem = state.items.find((item) => item.id === newItem.id);
      if (!existingItem) {
        state.items.push({
          id: newItem.id,
          title: newItem.title,
          image: newItem.image,
        });
      }
    },
    removeItemFromList(state, action) {
      const Item = action.payload;
      const existingItem = state.items.find((item) => item.id === Item);
      if (existingItem) {
        state.items = state.items.filter((item) => item.id !== Item);
      }
    },
  },
});
export const listActions = ListSlice.actions;

export default ListSlice.reducer;
