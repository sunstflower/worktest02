import { Outlet, Link, useNavigate } from 'react-router-dom';
import { Layout } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { HomeOutlined, AppstoreOutlined, PlusOutlined } from '@ant-design/icons';
import { addPage } from '@/store/pageSlice';

const { Content, Sider } = Layout;

function Entry() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const pages = useSelector(state => state.pages.pages);
    
    const handleAddPage = () => {
        dispatch(addPage());
        const newPageId = pages.length + 1;
        navigate(`/page/${newPageId}`);
    };

    return (
        <Layout style={{ 
            minHeight: '100vh',
            height: '100vh',
            backgroundColor: '#1a202c'
        }}>
            <div style={{ 
                height: '60px', 
                background: '#2d3748',
                color: 'white',
                display: 'flex',
                alignItems: 'center',
                padding: '0 20px',
                fontSize: '18px',
                borderBottom: '1px solid #4a5568'
            }}>
                Flow Editor
            </div>
            <Layout style={{ height: 'calc(100vh - 60px)' }}>
                <Sider 
                    width={200} 
                    style={{
                        background: '#2d3748',
                        borderRight: '1px solid #4a5568'
                    }}
                >
                    <div className="h-full overflow-y-auto">
                        <div className="flex flex-col p-4 space-y-2">
                            <Link 
                                to="/home"
                                className="flex items-center p-2 rounded-lg text-gray-300 hover:bg-gray-700"
                            >
                                <HomeOutlined className="mr-2" />
                                <span>主页</span>
                            </Link>

                            <div className="space-y-2">
                                <div className="flex items-center justify-between p-2 text-gray-300">
                                    <div className="flex items-center">
                                        <AppstoreOutlined className="mr-2" />
                                        <span>分页</span>
                                    </div>
                                    <button 
                                        onClick={handleAddPage}
                                        className="text-gray-400 hover:text-blue-400"
                                    >
                                        <PlusOutlined />
                                    </button>
                                </div>
                                
                                {pages.map(page => (
                                    <Link
                                        key={page.id}
                                        to={page.path}
                                        className="flex items-center p-2 pl-8 rounded-lg text-gray-300 hover:bg-gray-700"
                                    >
                                        {page.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </Sider>
                <Layout style={{ 
                    background: '#1a202c',
                    height: '100%',

                }}>
                    <Content style={{ 
                        height: '100%',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <Outlet />
                    </Content>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default Entry;