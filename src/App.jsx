import { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { KeyOutlined, UserOutlined } from '@ant-design/icons'

// import '@/common/styles/frame.styl'
// import imgLogo from '@/common/images/logo.png'
// import imgCover from './cover.svg'


function Login() {
    // 登录按钮loading状态
    const [loading, setLoading] = useState(false)

    // 提交登录
    const loginSubmit = (values) => {
        setLoading(true)

        let data = {
            account: values.account,
            password: values.password,
        }

        console.log('submitData', data)
    }

    return (
        <div className="bg-black rounded-xl p-6 max-w-sm mx-auto flex flex-col gap-4 shadow-lg">
      <h1 className="text-white text-2xl font-bold">
        主标题
      </h1>
      
      <h2 className="text-gray-400 text-sm">
        副标题内容
      </h2>
      
      <button className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors">
        进入
      </button>
    </div>
    )
}

export default Login
