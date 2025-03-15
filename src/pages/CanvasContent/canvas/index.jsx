import { useCallback, useEffect, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ReactFlow, {
  applyNodeChanges,
  applyEdgeChanges,
  MiniMap,
  Controls,
  Background,
  Panel,
} from 'reactflow';
import 'reactflow/dist/style.css';
import { setNodesAndEdges, updateNodes, updateEdges } from '@/store/canvasSlice';


// 将样式定义移到组件外部
 const baseNodeStyle = {
    background: '#2d3748',
    color: '#fff',
    border: '1px solid #4a5568',
    borderRadius: '8px',
    padding: '12px 20px',
    fontSize: '14px',
    width: 160,
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const nodeStyles = {
    start: { ...baseNodeStyle, background: '#2C5282', borderColor: '#3182CE' },
    process: { ...baseNodeStyle, background: '#285E61', borderColor: '#319795' },
    decision: { ...baseNodeStyle, background: '#744210', borderColor: '#D69E2E' },
    action: { ...baseNodeStyle, background: '#285E61', borderColor: '#319795' },
    end: { ...baseNodeStyle, background: '#742A2A', borderColor: '#E53E3E' }
  };

  // 将 nodeTypes 定义移到组件外部
const nodeTypes = {};

const CanvasContent = ({ pageId }) => {
  const dispatch = useDispatch();
  
  // 使用 useMemo 优化选择器
  const canvasData = useSelector(
    (state) => state.canvas.canvasData[pageId] || { nodes: [], edges: [] },
    (prev, next) => {
      return JSON.stringify(prev) === JSON.stringify(next);
    }
  );

  const { nodes, edges } = canvasData;

// 使用 useMemo 缓存初始节点生成函数
const getInitialNodes = useMemo(() => (pageId) => {
    return [
      {
        id: `${pageId}-1`,
        type: 'input',
        position: { x: 250, y: 25 },
        data: { label: '开始' },
        style: nodeStyles.start,
      },
      // ... 其他节点定义
    ];
  }, []);


  // 使用 useMemo 缓存初始边生成函数
  const getInitialEdges = useMemo(() => (pageId) => {
    return [
      {
        id: `${pageId}-e1-2`,
        source: `${pageId}-1`,
        target: `${pageId}-2`,
        label: '开始流程',
        animated: true,
        style: { stroke: '#4a5568', strokeWidth: 2 },
        labelStyle: { fill: '#A0AEC0', fontSize: 12 },
        type: 'smoothstep',
      },
      // ... 其他边定义
    ];
  }, []);


  useEffect(() => {
    if (!canvasData.nodes?.length) {
      const defaultNodes = getInitialNodes(pageId);
      const defaultEdges = getInitialEdges(pageId);
      dispatch(setNodesAndEdges({ pageId, nodes: defaultNodes, edges: defaultEdges }));
    }
  }, [pageId, dispatch, canvasData.nodes, getInitialNodes, getInitialEdges]);

  const onNodesChange = useCallback((changes) => {
    const newNodes = applyNodeChanges(changes, nodes);
    dispatch(updateNodes({ pageId, nodes: newNodes }));
  }, [nodes, pageId, dispatch]);

  const onEdgesChange = useCallback((changes) => {
    const newEdges = applyEdgeChanges(changes, edges);
    dispatch(updateEdges({ pageId, edges: newEdges }));
  }, [edges, pageId, dispatch]);

  // 使用 useMemo 缓存 ReactFlow 的默认属性
  const defaultEdgeOptions = useMemo(() => ({
    type: 'smoothstep',
    animated: false,
    style: { stroke: '#4a5568', strokeWidth: 2 },
    labelStyle: { fill: '#A0AEC0', fontSize: 12 },
  }), []);

  return (
    <div className="w-full h-full bg-gray-800">
       <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        fitView
        className="bg-gray-800"
        style={{ height: '100%' }}
        defaultEdgeOptions={defaultEdgeOptions}
        minZoom={0.2}
        maxZoom={4}
        defaultViewport={{ zoom: 1 }}
      >
        <Background color="#4a5568" gap={16} />
        <Controls 
        className="bg-gray-800 border-gray-700 rounded-lg m-4"
        style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            padding: '4px',
          }}
        />
        <MiniMap 
          style={{
            backgroundColor: '#1a202c',
            border: '1px solid #2d3748',
            borderRadius: '8px',
            margin: '16px',
          }}
          className="!bottom-0 !right-0"
          nodeColor="#4a5568"
          maskColor="rgba(26, 32, 44, 0.5)"
        />
        <Panel 
          position="top-left" 
          className="bg-gray-800 m-4 p-6 rounded-lg border border-gray-700 shadow-lg"
        >
          <h3 className="text-white text-sm font-medium">页面 {pageId}</h3>
        </Panel>
        <Panel 
          position="top-right" 
          className="bg-gray-800 m-4 p-2 rounded-lg border border-gray-700 shadow-lg flex gap-2"
        >
          <button className="px-3 py-1 text-sm text-gray-300 hover:bg-gray-700 rounded">
            保存
          </button>
          <button className="px-3 py-1 text-sm text-gray-300 hover:bg-gray-700 rounded">
            重置
          </button>
        </Panel>
      </ReactFlow>
    </div>
  );
};

export default CanvasContent;