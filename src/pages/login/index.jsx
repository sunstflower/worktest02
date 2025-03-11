import { useState } from 'react'
import { Button, Form, Input } from 'antd'
import { KeyOutlined, UserOutlined } from '@ant-design/icons'

// import '@/common/styles/frame.styl'
// import imgLogo from '@/common/images/logo.png'
// import imgCover from './cover.svg'

const login = () => {
    return (
      /* 最外层灰色容器 */
      <div className="bg-gray-100 min-h-screen p-4">
        {/* 响应式内容容器 */}
        <div className="w-[90%] md:w-[80%] lg:w-[70%] mx-auto space-y-4">
          {/* 卡片容器 */}
          <div className="w-full aspect-video bg-black rounded-xl p-4 md:p-6 flex flex-col justify-between shadow-lg">
            <div className="space-y-2">
              <h1 className="text-white text-lg md:text-2xl lg:text-3xl font-bold">
                主标题
              </h1>
              
              <h2 className="text-gray-400 text-sm md:text-base lg:text-lg">
                副标题内容
              </h2>
            </div>
            
            <button className="bg-white text-black py-2 px-4 rounded-lg hover:bg-gray-100 transition-colors w-fit">
              进入
            </button>
          </div>
  
          {/* 视频容器 */}
          <div className="w-full aspect-video rounded-xl overflow-hidden shadow-lg">
            <video 
              className="w-full h-full object-cover"
              controls
              autoPlay
              muted
              loop
            >
              <source src="/path/to/your/video.mp4" type="video/mp4" />
              你的浏览器不支持视频播放。
            </video>
          </div>
        </div>
      </div>
    );
  };
  
  export default login;