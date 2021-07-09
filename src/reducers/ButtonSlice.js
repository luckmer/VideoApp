import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  type: "tile",
  demo: "",
  filterType: {
    favorite: "",
    data: "",
    row: "",
  },
};

const ButtonSlice = createSlice({
  name: "buttonPanel",
  initialState,
  reducers: {
    setClickType: (state, action) => {
      const { view } = action.payload;
      state.type !== view ? (state.type = view) : (state.type = "tile");
    },

    SetDemoMode: (state, action) => {
      state.demo = action.payload;
    },

    SetFilterType: (state, action) => {
      const { type, color } = action.payload;
      const copy = state.filterType;

      if (type === "favorite") {
        state.filterType = {
          ...copy,
          favorite: type === "favorite" && color === "danger" ? "" : type,
        };
      }

      if (type === "new") {
        state.filterType = {
          ...copy,
          data: type === "new" && color === "danger" ? "" : type,
        };
      }

      if (type === "row") {
        state.filterType = {
          ...copy,
          row: type === "row" && color === "danger" ? "" : type,
        };
      }
    },
  },
});

export const { SetFilterType, setClickType, SetDemoMode } = ButtonSlice.actions;

export default ButtonSlice.reducer;
