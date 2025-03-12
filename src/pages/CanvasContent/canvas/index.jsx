import { useCallback, useEffect } from 'react';
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

const CanvasContent = ({ pageId }) => {
  const dispatch = useDispatch();
  const canvasData = useSelector((state) => state.canvas.canvasData[pageId] || { nodes: [], edges: [] });
  const { nodes, edges } = canvasData;

  useEffect(() => {
    if (!canvasData.nodes) {
      const defaultNodes = [
        { 
          id: `${pageId}-1`, 
          position: { x: 100, y: 100 }, 
          data: { label: `节点 1` },
          style: {
            background: '#2d3748',
            color: '#fff',
            border: '1px solid #4a5568',
            borderRadius: '8px',
            padding: '10px'
          }
        },
        { 
          id: `${pageId}-2`, 
          position: { x: 300, y: 100 }, 
          data: { label: `节点 2` },
          style: {
            background: '#2d3748',
            color: '#fff',
            border: '1px solid #4a5568',
            borderRadius: '8px',
            padding: '10px'
          }
        },
        { 
          id: `${pageId}-3`, 
          position: { x: 200, y: 250 }, 
          data: { label: `节点 3` },
          style: {
            background: '#2d3748',
            color: '#fff',
            border: '1px solid #4a5568',
            borderRadius: '8px',
            padding: '10px'
          }
        },
      ];

      const defaultEdges = [
        { 
          id: `${pageId}-e1-2`, 
          source: `${pageId}-1`, 
          target: `${pageId}-2`,
          style: { stroke: '#4a5568' }
        },
        { 
          id: `${pageId}-e2-3`, 
          source: `${pageId}-2`, 
          target: `${pageId}-3`,
          style: { stroke: '#4a5568' }
        }
      ];

      dispatch(setNodesAndEdges({ pageId, nodes: defaultNodes, edges: defaultEdges }));
    }
  }, [pageId, dispatch, canvasData.nodes]);

  const onNodesChange = useCallback((changes) => {
    const newNodes = applyNodeChanges(changes, nodes);
    dispatch(updateNodes({ pageId, nodes: newNodes }));
  }, [nodes, pageId, dispatch]);

  const onEdgesChange = useCallback((changes) => {
    const newEdges = applyEdgeChanges(changes, edges);
    dispatch(updateEdges({ pageId, edges: newEdges }));
  }, [edges, pageId, dispatch]);

  return (
    <div className="w-full h-full bg-gray-900">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        fitView
        className="bg-gray-900"
        style={{ height: 'calc(100% - 40px)' }} 
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
          className="bg-gray-800 m-4 p-3 rounded-lg border border-gray-700 shadow-lg"
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