
var isReady=false;var onReadyCallbacks=[];
var __uniConfig = {"pages":["pages/index/index","pages/boiling/boiling","pages/my/my","pages/found/found"],"window":{"navigationBarTextStyle":"black","navigationBarTitleText":"burukeYou社区","navigationBarBackgroundColor":"#FFFFFF","backgroundColor":"#FFFFFF"},"tabBar":{"color":"white","selectedColor":"#409eff","backgroundColor":"white","borderStyle":"black","list":[{"pagePath":"pages/index/index","text":"首页","iconPath":"./static/logo.png","selectedIconPath":"static/logo.png"},{"pagePath":"pages/boiling/boiling","text":"沸点","iconPath":"./static/logo.png"},{"pagePath":"pages/found/found","text":"发现","iconPath":"./static/logo.png"},{"pagePath":"pages/my/my","text":"我的","iconPath":"./static/logo.png"}]},"splashscreen":{"alwaysShowBeforeRender":true,"autoclose":false},"appname":"burukeyou-mobile","compilerVersion":"2.6.5","entryPagePath":"pages/index/index","networkTimeout":{"request":60000,"connectSocket":60000,"uploadFile":60000,"downloadFile":60000}};
var __uniRoutes = [{"path":"/pages/index/index","meta":{"isQuit":true,"isTabBar":true},"window":{"titleNView":{"searchInput":{"align":"center","backgroundColor":"#F5F4F2","borderRadius":"4px","disabled":true,"placeholder":"搜索文章/标签/用户","placeholderColor":"#6D6C67"},"buttons":[{"fontSrc":"","text":"标签"}]}}},{"path":"/pages/boiling/boiling","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/my/my","meta":{"isQuit":true,"isTabBar":true},"window":{}},{"path":"/pages/found/found","meta":{"isQuit":true,"isTabBar":true},"window":{}}];
__uniConfig.onReady=function(callback){if(__uniConfig.ready){callback()}else{onReadyCallbacks.push(callback)}};Object.defineProperty(__uniConfig,"ready",{get:function(){return isReady},set:function(val){isReady=val;if(!isReady){return}const callbacks=onReadyCallbacks.slice(0);onReadyCallbacks.length=0;callbacks.forEach(function(callback){callback()})}});
service.register("uni-app-config",{create(a,b,c){if(!__uniConfig.viewport){var d=b.weex.config.env.scale,e=b.weex.config.env.deviceWidth,f=Math.ceil(e/d);Object.assign(__uniConfig,{viewport:f,defaultFontSize:Math.round(f/20)})}return{instance:{__uniConfig:__uniConfig,__uniRoutes:__uniRoutes,window:void 0}}}});
