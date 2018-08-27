export default function (context) {
  const store = context.store
  const route = context.route
  const whiteList = ['/login', '/lost']
  console.log(route.path)
/*   if (req.session) {
    console.log(req.session)
  } */
  // 启动路由hooks
  if (!store.state.userId) {
    console.log(`用户没有登录`)
    if (whiteList.indexOf(route.path) === -1) {
      context.redirect('/login')
    }
  } else {
    console.log(`用户已登录`)
  }
}
