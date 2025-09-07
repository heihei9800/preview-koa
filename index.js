const Koa = require('koa');
const serve = require('koa-static');
const path = require('path');

// 创建Koa实例
const app = new Koa();
const PORT = process.env.PORT || 3000;

// 配置静态资源中间件
// 静态资源将从public目录提供
const staticPath = path.join(__dirname, 'public');
app.use(serve(staticPath));

// 添加一个简单的路由响应
app.use(async (ctx) => {
  // 如果没有匹配到静态资源，返回一个简单的消息
  ctx.body = 'Hello Koa! 静态资源服务已启动，请访问 http://localhost:' + PORT;
});

// 启动服务器
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Static files are served from ${staticPath}`);
});