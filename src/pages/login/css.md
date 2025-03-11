1. 外层div：
bg-black: 黑色背景
rounded-xl: 较大的圆角
p-6: 内边距
max-w-sm: 限制最大宽度
flex flex-col: 纵向弹性布局
gap-4: 子元素之间的间距
shadow-lg: 添加阴影效果
主标题：
text-white: 白色文字
text-2xl: 较大字号
font-bold: 粗体
副标题：
text-gray-400: 灰色文字
text-sm: 小号字体
按钮：
bg-white: 白色背景
text-black: 黑色文字
rounded-lg: 圆角
hover:bg-gray-100: 悬停时变为浅灰色
transition-colors: 颜色过渡动画
你可以根据需要调整文字内容和样式类。要使用这个组件，只需要在其他组件中导入并使用即可：
}




要更新说明：
最外层结构：
最外层添加了灰色背景 bg-gray-100
使用 min-h-screen 确保至少占满屏幕高度
响应式内边距 p-4 sm:p-6 md:p-8
16:9 比例实现：
使用 pb-[56.25%] (9/16 = 0.5625 = 56.25%) 实现16:9比例
配合 relative 和 absolute 定位实现
响应式设计：
使用 max-w-7xl 限制最大宽度
文字大小随屏幕变化：
text-xl sm:text-2xl md:text-3xl (主标题)
text-sm sm:text-base md:text-lg (副标题)
4. 间距控制：
使用 space-y-4 控制垂直间距
mx-auto 实现水平居中
内容布局：
使用 flex flex-col justify-between 实现卡片内容的上下分布
w-fit 使按钮宽度适应内容
这个设计的特点：
完全响应式，适应各种屏幕尺寸
始终保持16:9的比例
内容会随着容器大小自动缩放
留有适当的边距，避免贴边
灰色背景提供更好的视觉体验
你可以根据需要调整颜色、间距和文字大小等具体数值。如果需要修改比例，只需要调整 pb-[56.25%] 的百分比即可。
