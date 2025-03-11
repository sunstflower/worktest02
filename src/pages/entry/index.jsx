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
    
    // 添加新页面并跳转
    const handleAddPage = () => {
        dispatch(addPage());
        const newPageId = pages.length + 1;
        navigate(`/page/${newPageId}`);
    };

    return (
        <Layout className="G-fullpage">
            <div style={{ height: 70, background: '#bae0ff', fontSize: 20 }}>Header</div>
            <Layout style={{ overflow: 'hidden', flex: 1 }}>
                <Sider width={200} theme="light">
                    <div className="h-full overflow-y-auto">
                        <div className="flex flex-col p-4 space-y-2">
                            {/* 主页链接 */}
                            <Link 
                                to="/home"
                                className="flex items-center p-2 rounded-lg hover:bg-gray-100"
                            >
                                <HomeOutlined className="mr-2" />
                                <span>主页</span>
                            </Link>

                            {/* 分页区域 */}
                            <div className="space-y-2">
                                <div className="flex items-center justify-between p-2">
                                    <div className="flex items-center">
                                        <AppstoreOutlined className="mr-2" />
                                        <span>分页</span>
                                    </div>
                                    <button 
                                        onClick={handleAddPage}
                                        className="text-gray-400 hover:text-blue-600"
                                    >
                                        <PlusOutlined />
                                    </button>
                                </div>
                                
                                {/* 动态页面列表 */}
                                {pages.map(page => (
                                    <Link
                                        key={page.id}
                                        to={page.path}
                                        className="flex items-center p-2 pl-8 rounded-lg hover:bg-gray-100"
                                    >
                                        {page.title}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>
                </Sider>
                <Layout>
                    <div className="G-layout-main">
                        <Content style={{ minWidth: 800 }}>
                            <Outlet />
                        </Content>
                    </div>
                </Layout>
            </Layout>
        </Layout>
    );
}

export default Entry;