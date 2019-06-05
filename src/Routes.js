// COMPONENTS
import Error from '@containers/Error/Error';
import Home from '@containers/Home/Home';
import Test from '@containers/Test';

const routes = [
  {
    path: '/',
    exact: true,
    component: Home,
    name: 'Home'
  },
  {
    path: '/test',
    exact: true,
    component: Test,
    name: 'Test'
  },
  {
    path: '*',
    component: Error,
    name: 'Error'
  }
];

export default routes;
