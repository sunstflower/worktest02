import { useParams } from 'react-router-dom';
import CanvasContent from './CanvasContent/canvas';

const PageContent = () => {
  const { id } = useParams();
  
  return (
    <div className="flex flex-col h-screen bg-gray-900 p-4 pb-6">
      {/* <header className="bg-gray-800 p-4 border-b border-gray-700">
        <h1 className="text-xl text-white font-bold">画布 {id}</h1>
      </header> */}
      <div className="flex-1 relative p-2 pb-">
          <CanvasContent pageId={id} />
      </div>
    </div>
  );
};

export default PageContent;