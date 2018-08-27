import Koa from 'koa'
import Session from 'koa-session'
import { Nuxt, Builder } from 'nuxt'
import router from './routers';
const bodyparser = require('koa-bodyparser')

async function server () {
  const app = new Koa()
  const host = process.env.HOST || '127.0.0.1'
  const port = process.env.PORT || 8007

  // Import and Set Nuxt.js options
  const config = require('../nuxt.config.js')
  config.dev = !(app.env === 'production')

  // Instantiate nuxt.js
  const nuxt = new Nuxt(config)
  // parse body
  app.use(bodyparser({
    enableTypes: ['json', 'form', 'text']
  }))
  // Build in development
  if (config.dev) {
    const builder = new Builder(nuxt)
    await builder.build()
  }
  // session
  app.keys = ['session']

  const CONFIG = {
    key: 'APP_SESSION', /** (string) cookie key (default is koa:sess) */
    maxAge: 86400000,
    overwrite: true, /** (boolean) can overwrite or not (default true) */
    httpOnly: true, /** (boolean) httpOnly or not (default true) */
    signed: true, /** (boolean) signed or not (default true) */
    rolling: false /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
  }
  app.use(Session(CONFIG, app))
  // 路由模块
  app.use(router.routes(), router.allowedMethods())

  app.use(ctx => {
    ctx.status = 200
    ctx.respond = false //
    ctx.req.ctx = ctx //
    // console.log('当前用户session')
    // console.log(ctx.session)
    ctx.req.session = ctx.session
    nuxt.render(ctx.req, ctx.res)
  })
  app.listen(port, host)
  console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

server()
