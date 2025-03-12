import { createSlice } from '@reduxjs/toolkit';

const pageSlice = createSlice({
  name: 'pages',
  initialState: {
    pages: []
  },
  reducers: {
    addPage: (state) => {
      const newPage = {
        id: Date.now(),
        title: `Page ${state.pages.length + 1}`,
        path: `/page/${state.pages.length + 1}`
      };
      state.pages.push(newPage);
    }
  }
});




export const { addPage } = pageSlice.actions;
export default pageSlice.reducer;