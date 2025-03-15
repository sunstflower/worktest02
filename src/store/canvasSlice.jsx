import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  canvasData: {
  }
};

const canvasSlice = createSlice({
  name: 'canvas',
  initialState,
  reducers: {
    setNodesAndEdges: (state, action) => {
      const { pageId, nodes, edges } = action.payload;
      // 确保页面存在，如果不存在就初始化
      state.canvasData[pageId] = { nodes, edges };
    },
    updateNodes: (state, action) => {
      const { pageId, nodes } = action.payload;
      // 确保页面存在，如果不存在就初始化
      if (!state.canvasData[pageId]) {
        state.canvasData[pageId] = { nodes: [], edges: [] };
      }
      state.canvasData[pageId].nodes = nodes;
    },
    updateEdges: (state, action) => {
      const { pageId, edges } = action.payload;
      // 确保页面存在，如果不存在就初始化
      if (!state.canvasData[pageId]) {
        state.canvasData[pageId] = { nodes: [], edges: [] };
      }
      state.canvasData[pageId].edges = edges;
    }
  }
});

export const { setNodesAndEdges, updateNodes, updateEdges } = canvasSlice.actions;
export default canvasSlice.reducer;
