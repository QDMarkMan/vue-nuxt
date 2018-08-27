import koaRouter from 'koa-router'
const router = koaRouter()
/**
 * login
 */
router.post('/frontLogin', async (ctx, next) => {
  const { username, password } = ctx.request.body
  let result = {}
  if (username === 'demo' && password === 'demo') {
    const user = {
      _id: 'demo',
      username: 'demo',
      nickname: 'demo',
      role: 'demo'
    }
    ctx.session.user = user
    result = {
      success: true,
      userId: 1111111111111,
      username: 'demo',
      msg: '登录成功'
    }
  } else {
    result = {
      success: false,
      msg: '登录失败'
    }
  }
  ctx.body = result
})
/**
 * logout
 */
router.post('/logout', async (ctx) => {
  // 删除session
  ctx.session = null
  console.log(ctx.session)
  ctx.body = {
    success: true,
    msg: '退出成功'
  }
})

router.get('/demo', async(ctx) => {
  ctx.body = ctx.session.user
})
export default router
