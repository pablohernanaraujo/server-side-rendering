import Login from '../app/pages/login/Login';
import Home from '../app/pages/home/Home';
import Blog from '../app/pages/blog/Blog';

const routes = [
  {
    path: '/',
    component: Login,
    exact: true
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/blog',
    component: Blog
  }
];

export default routes;
