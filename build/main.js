require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(8);


/***/ },
/* 1 */
/***/ function(module, exports) {

module.exports = {
  router: {
    base: '/app/', // 路由base选项
    linkActiveClass: 'active-link',
    middleware: 'user', // 在每页渲染前运行 middleware/user-agent.js 中间件的逻辑
    extendRoutes: function extendRoutes(routes) {
      /* routers.push({
        name: 'lost',
        path: '*',
        component: resolve(__dirname, 'pages/404.vue')
      }) */
    }
  },
  prefetch: true, // 预加载
  vender: ['element-ui'],
  plugins: [{ src: './plugins/element-ui', ssr: true }],
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxt',
    meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: 'Nuxt.js project' }],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  babel: {
    "plugins": [["component", [{
      "libraryName": "element-ui",
      "styleLibraryName": "theme-default"
    }, 'transform-async-to-generator', 'transform-runtime']]],
    comments: true
  },
  /*
  ** Global CSS
  */
  css: ['~assets/css/main.css', { src: 'element-ui/lib/theme-chalk/index.css' },
  // { src: 'element-ui', lang: 'css'},
  { src: './assets/css/main.less', lang: 'less' // 使用预处理器

  }],
  /*
  ** Customize the progress-bar color
  */
  // loading: { color: '#3B8070' },
  loading: './components/Loading.vue',
  /*
   ** Build configuration
   */
  build: {
    /*
     ** Run ESLINT on save
     */
    extend: function extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        });
      }
      // vue-loader
      var vueLoader = config.module.rules.find(function (rule) {
        return rule.loader === 'vue-loader';
      });
      vueLoader.options.loaders.less = 'vue-style-loader!css-loader!less-loader';
    }
  }
};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_Code_vue_project_server_render_vue_server_template_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_Code_vue_project_server_render_vue_server_template_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_D_Code_vue_project_server_render_vue_server_template_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa_router__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }


var router = __WEBPACK_IMPORTED_MODULE_1_koa_router___default()();
/**
 * login
 */
router.post('/frontLogin', function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_Code_vue_project_server_render_vue_server_template_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(ctx, next) {
    var _ctx$request$body, username, password, result, user;

    return __WEBPACK_IMPORTED_MODULE_0_D_Code_vue_project_server_render_vue_server_template_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _ctx$request$body = ctx.request.body, username = _ctx$request$body.username, password = _ctx$request$body.password;
            result = {};

            if (username === 'demo' && password === 'demo') {
              user = {
                _id: 'demo',
                username: 'demo',
                nickname: 'demo',
                role: 'demo'
              };

              ctx.session.user = user;
              result = {
                success: true,
                userId: 1111111111111,
                username: 'demo',
                msg: '登录成功'
              };
            } else {
              result = {
                success: false,
                msg: '登录失败'
              };
            }
            ctx.body = result;

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x, _x2) {
    return _ref.apply(this, arguments);
  };
}());
/**
 * logout
 */
router.post('/logout', function () {
  var _ref2 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_Code_vue_project_server_render_vue_server_template_node_modules_babel_runtime_regenerator___default.a.mark(function _callee2(ctx) {
    return __WEBPACK_IMPORTED_MODULE_0_D_Code_vue_project_server_render_vue_server_template_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            // 删除session
            ctx.session = null;
            console.log(ctx.session);
            ctx.body = {
              success: true,
              msg: '退出成功'
            };

          case 3:
          case 'end':
            return _context2.stop();
        }
      }
    }, _callee2, _this);
  }));

  return function (_x3) {
    return _ref2.apply(this, arguments);
  };
}());

router.get('/demo', function () {
  var _ref3 = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_Code_vue_project_server_render_vue_server_template_node_modules_babel_runtime_regenerator___default.a.mark(function _callee3(ctx) {
    return __WEBPACK_IMPORTED_MODULE_0_D_Code_vue_project_server_render_vue_server_template_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            ctx.body = ctx.session.user;

          case 1:
          case 'end':
            return _context3.stop();
        }
      }
    }, _callee3, _this);
  }));

  return function (_x4) {
    return _ref3.apply(this, arguments);
  };
}());
/* harmony default export */ exports["a"] = router;

/***/ },
/* 3 */
/***/ function(module, exports) {

module.exports = require("koa");

/***/ },
/* 4 */
/***/ function(module, exports) {

module.exports = require("koa-bodyparser");

/***/ },
/* 5 */
/***/ function(module, exports) {

module.exports = require("koa-session");

/***/ },
/* 6 */
/***/ function(module, exports) {

module.exports = require("nuxt");

/***/ },
/* 7 */
/***/ function(module, exports) {

module.exports = require("koa-router");

/***/ },
/* 8 */
/***/ function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_Code_vue_project_server_render_vue_server_template_node_modules_babel_runtime_regenerator__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_D_Code_vue_project_server_render_vue_server_template_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_D_Code_vue_project_server_render_vue_server_template_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_koa___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_koa__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_session__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_koa_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_koa_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nuxt__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_nuxt___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_nuxt__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__routers__ = __webpack_require__(2);


var server = function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_D_Code_vue_project_server_render_vue_server_template_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
    var app, host, port, config, nuxt, builder, CONFIG;
    return __WEBPACK_IMPORTED_MODULE_0_D_Code_vue_project_server_render_vue_server_template_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            app = new __WEBPACK_IMPORTED_MODULE_1_koa___default.a();
            host = process.env.HOST || '127.0.0.1';
            port = process.env.PORT || 8007;

            // Import and Set Nuxt.js options

            config = __webpack_require__(1);

            config.dev = !(app.env === 'production');

            // Instantiate nuxt.js
            nuxt = new __WEBPACK_IMPORTED_MODULE_3_nuxt__["Nuxt"](config);
            // parse body

            app.use(bodyparser({
              enableTypes: ['json', 'form', 'text']
            }));
            // Build in development

            if (!config.dev) {
              _context.next = 11;
              break;
            }

            builder = new __WEBPACK_IMPORTED_MODULE_3_nuxt__["Builder"](nuxt);
            _context.next = 11;
            return builder.build();

          case 11:
            // session
            app.keys = ['session'];

            CONFIG = {
              key: 'APP_SESSION', /** (string) cookie key (default is koa:sess) */
              maxAge: 86400000,
              overwrite: true, /** (boolean) can overwrite or not (default true) */
              httpOnly: true, /** (boolean) httpOnly or not (default true) */
              signed: true, /** (boolean) signed or not (default true) */
              rolling: false /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. default is false **/
            };

            app.use(__WEBPACK_IMPORTED_MODULE_2_koa_session___default()(CONFIG, app));
            // 路由模块
            app.use(__WEBPACK_IMPORTED_MODULE_4__routers__["a" /* default */].routes(), __WEBPACK_IMPORTED_MODULE_4__routers__["a" /* default */].allowedMethods());

            app.use(function (ctx) {
              ctx.status = 200;
              ctx.respond = false; //
              ctx.req.ctx = ctx; //
              // console.log('当前用户session')
              // console.log(ctx.session)
              ctx.req.session = ctx.session;
              nuxt.render(ctx.req, ctx.res);
            });
            app.listen(port, host);
            console.log('Server listening on ' + host + ':' + port); // eslint-disable-line no-console

          case 18:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function server() {
    return _ref.apply(this, arguments);
  };
}();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }





var bodyparser = __webpack_require__(4);

server();

/***/ }
/******/ ]);
//# sourceMappingURL=main.map