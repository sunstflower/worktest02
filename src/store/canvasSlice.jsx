import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  canvasData: {}  // 使用对象存储不同页面的画布数据
};

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    setNodesAndEdges: (state, action) => {
      const { pageId, nodes, edges } = action.payload;
      state.canvasData[pageId] = { nodes, edges };
    },
    updateNodes: (state, action) => {
      const { pageId, nodes } = action.payload;
      if (state.canvasData[pageId]) {
        state.canvasData[pageId].nodes = nodes;
      }
    },
    updateEdges: (state, action) => {
      const { pageId, edges } = action.payload;
      if (state.canvasData[pageId]) {
        state.canvasData[pageId].edges = edges;
      }
    }
  }
});

export const { setNodesAndEdges, updateNodes, updateEdges } = canvasSlice.actions;
export default canvasSlice.reducer;