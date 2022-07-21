
import Login from "../pages/Login";
import PostList from '../pages/PostList'
import Home from '../pages/Home'
import Write from '../pages/Write'
import Demo from '../components/NeumorphicElements'

const routerConfig = [
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/demo',
    component: Demo,
  },
  {
    path: '/home',
    component: Home,
    children: [
      {
        path: '/postList',
        component: PostList,
      },
      {
        path: '/write',
        component: Write,
      },
    ]
  },
  {
    path: '/',
    // 路由重定向
    redirect: '/login',
  },
];

export default routerConfig;
