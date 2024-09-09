//对外暴露配置路由（常量路由）
export const constantRoute=[
    {
        // 登录
        name:'login',//命名路由
        path:'/login',
        component:()=>import('@/views/login/index.vue'),
        meta:{
            title:'登录',
            hidden:false, //是否隐藏， 隐藏为true
            icon:'Promotion'
        }
    },
    {
        // 登录成功展示数据的路由
        name:'layout',
        path:'/',
        component:()=>import('@/layout/index.vue'),
        meta:{
            title:'layout',
            hidden:false,
            icon:'Avatar'
            
        },
        children:[
            {
                path:'/home',
                component:()=> import('@/views/home/index.vue'),
                meta:{
                    title:'首页',
                    hidden:false,
                    icon:'HomeFilled'
                }
            },
            {
                path:'/home',
                component:()=> import('@/views/home/index.vue'),
                meta:{
                    title:'测试',
                    hidden:false,
                    icon:'Histogram'
                }
            }
        ],
    },
    {
        // 404页面
        name:'404',
        path:'/404',
        component:()=>import('@/views/404/index.vue'),
        meta:{
            title:'404',
            hidden:false,
            icon:'WarnTriangleFilled'
        }
    },
    {
        // 任意路由，上面都没匹配到
        name:'Any',
        path:'/:pathMatch(.*)*',//特殊的路由配置，用于捕获任意路径并进行路由重定向
        redirect:'/404',
        meta:{
            title:'任意路由',
            hidden:false,
            icon:'Notification'
        }
    }

]