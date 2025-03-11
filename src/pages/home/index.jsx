import { Card } from 'antd'
import PageHeaderWrapper from '@/components/pageHeaderWrapper'
import './home.styl'

function Home() {
    return (
        <>
            <PageHeaderWrapper title="首页" subtitle="(副标题)" />
            <section className="G-main P-home">
                <Card title="使用说明">
                    <p>
                        1. 
                    </p>
                    <p>
                        2.
                        
                    </p>
                </Card>
                <Card title="内容说明">
                    <p>...</p>
                    <p></p>
                    <p></p>
                </Card>
            </section>
        </>
    )
}

export default Home
