import { useParams } from 'react-router-dom';
import ReactFlow, { 
  Background, 
  Controls,
  MiniMap
} from 'reactflow';
import 'reactflow/dist/style.css';

// 初始节点配置
const initialNodes = [
  {
    id: '1',
    position: { x: 0, y: 0 },
    data: { label: '输入节点' },
    type: 'input',
  },
  {
    id: '2',
    position: { x: 200, y: 100 },
    data: { label: '处理节点' },
  },
  {
    id: '3',
    position: { x: 400, y: 200 },
    data: { label: '输出节点' },
    type: 'output',
  }
];

// 初始连接配置
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e2-3', source: '2', target: '3' }
];

const PageFlow = () => {
  const { id } = useParams();
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  return (
    <div className="p-4 h-screen flex flex-col">
      <h1 className="text-2xl font-bold mb-4">流程图页面 - {id}</h1>
      
      <div className="flex-1 bg-gray-50 rounded-lg shadow-lg overflow-hidden">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={(changes) => setNodes(applyNodeChanges(changes, nodes))}
          onEdgesChange={(changes) => setEdges(applyEdgeChanges(changes, edges))}
          fitView
        >
          {/* 背景网格 */}
          <Background 
            color="#888" 
            gap={32} 
            variant="dots" 
          />

          {/* 控制面板 */}
          <Controls 
            position="bottom-right"
            showInteractive={false}
          />

          {/* 缩略图 */}
          <MiniMap 
            position="bottom-left" 
            zoomable
            pannable
          />
        </ReactFlow>
      </div>
    </div>
  );
};

export default PageFlow;