import { Card } from 'antd'
import PageHeaderWrapper from '@/components/pageHeaderWrapper'


function Users() {
    return (
        <>
            <PageHeaderWrapper title="用户管理" subtitle="(副标题)" />
            <section className="G-main P-users">
                <Card>Users页面</Card>
            </section>
        </>
    )
}

export default Users
