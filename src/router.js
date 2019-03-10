import Vue from 'vue'
import Router from 'vue-router'
import Home from './home/Home.vue'
import VideoPage from './videopage/VideoPage.vue'

Vue.use(Router)

export default new Router({
  linkExactActiveClass:'active',
  routes: [
    {
      path: '/',
      component: Home,
      children:[
        {
          path: '/',
          name: 'toutiao',
          component: () => import('./home/Toutiao.vue')
        },
        {
          path: '/home/jingxuan',
          name: 'jingxuan',
          component: () => import('./home/Jingxuan.vue')
        },
        {
          path: '/home/yule',
          name: 'yule',
          component: () => import('./home/Yule.vue')
        },
        {
          path: '/home/qiche',
          name: 'qiche',
          component: () => import('./home/Qiche.vue')
          
        },
        
      ]
    },

    
    {
      path: '/videopage',
      name: 'videopage',
      component:VideoPage
    },


    {
      path: '/talkabout',
      name: 'talkabout',
      component: () => import('./talkabout/TalkAbout.vue')
    },


    {
      path: '/mine',
      name: 'mine',
      component: () => import('./mine/Mine.vue'),
      
    },

    {path:'/mine/attention',
    name:'attention',
    component: () =>import('./mine/Attention.vue')
  },
  {path:'/mine/mymsg',
    name:'mymsg',
    component: () =>import('./mine/Mymsg.vue')
  },
  {path:'/mine/readpublic',
    name:'readpublic',
    component: () =>import('./mine/ReadPublic.vue')
  },
  {path:'/mine/store',
    name:'store',
    component: () =>import('./mine/Store.vue')
  },
  {path:'/mine/tool',
    name:'tool',
    component: () =>import('./mine/Tool.vue')
  },
  {path:'/mine/mygentie',
    name:'mygentie',
    component: () =>import('./mine/MyGentie.vue')
  },
  {path:'/mine/collection',
    name:'collection',
    component: () =>import('./mine/Collection.vue')
  },
  {path:'/mine/myhistory',
    name:'myhistory',
    component: () =>import('./mine/History.vue')
  },




    {
      path: '/home/zhibo',
      name: 'zhibo',
      component: () => import('./home/Zhibo.vue')
    },
    {
      path: '/detail',
      name: 'detail',
      component: () => import('./home/views/ToutiaoDetail.vue')
    },
    {
      path: '/search',
      name: 'search',
      component: () => import('./home/views/Search.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('./mine/views/Login.vue')
    },
    {
      path: '/noveldetail',
      name: 'noveldetail',
      component: () => import('./talkabout/NovelDetail.vue')
    },

    
    
  ]
})
