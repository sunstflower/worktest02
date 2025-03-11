import { useParams } from 'react-router-dom';

const PageContent = () => {
    const { id } = useParams();
    
    return (
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Page {id}</h1>
        <div className="bg-white p-4 rounded-lg shadow">
          {/* 页面内容 */}
          <p>This is page {id} content</p>
        </div>
      </div>
    );
  };
  
  export default PageContent;