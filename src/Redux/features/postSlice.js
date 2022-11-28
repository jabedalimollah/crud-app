import { createSlice } from "@reduxjs/toolkit";
export const postSlice = createSlice({
  name: "apiData",
  initialState: {
    posts: [
      { name: "Kabir", city: "Mumbai", age: 23 },
      { name: "Sahir", city: "Kolkata", age: 28 },
      { name: "Arjun", city: "New Delhi", age: 25 },
    ],
    temp: [
      { name: "Kabir", city: "Mumbai", age: 23 },
      { name: "Sahir", city: "Kolkata", age: 28 },
      { name: "Arjun", city: "New Delhi", age: 25 },
    ],
    loading: "idle",
    status: true,
    check: true,
  },
  reducers: {
    DataModify: (state) => {
      state.status = false;
    },
    showData: (state) => {
      return state.posts;
    },
    addData: (state, action) => {
      state.posts.push(action.payload);
      state.temp.push(action.payload);
    },
    deleteData: (state, action) => {
      if (state.temp.length === state.posts.length) {
        state.temp = state.posts.filter((state, index) => {
          return action.payload !== index;
        });
      }

      state.posts = state.posts.filter((state, index) => {
        return action.payload !== index;
      });
    },
    editData: (state, action) => {
      state.temp[action.payload.index] = action.payload.updateValue;
      state.posts[action.payload.index] = action.payload.updateValue;
    },
    handleSortDefault: (state) => {
      state.posts = state.temp;
      state.status = true;
    },
    handleShortAtoZ: (state, action) => {
      state.status = false;
      state.posts = action.payload.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    },
    handleSortZtoA: (state) => {
      state.status = false;
      state.posts.sort((a, b) => {
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
          return 1;
        }
        return 0;
      });
    },
    handleSearchOption: (state, action) => {
      if (action.payload !== "") {
        state.status = false;
        state.posts = state.posts.filter((item) => {
          let itemName = item.name.toLowerCase();
          let searchItem = action.payload.toLowerCase();
          if (itemName.search(searchItem) !== -1) {
            return item;
          }
          return false;
        });
      }
    },
    handleCloseOption: (state) => {
      state.posts = state.temp;
      state.status = true;
    },
  },
});
export const {
  DataModify,
  addData,
  deleteData,
  editData,
  showData,
  handleShortAtoZ,
  handleSortDefault,
  handleSortZtoA,
  handleSearchOption,
  handleCloseOption,
} = postSlice.actions;
export default postSlice.reducer;
