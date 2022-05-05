import { Navigate, useRoutes } from 'react-router-dom'
import AccountLayout from 'layouts/AccountLayout'
import MainLayout from 'layouts/dashboard'
import Home from 'pages/Home'
import PageNotFound from 'pages/PageNotFound'


const Router: React.FC = (): JSX.Element => {
  const mainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
      {path: '*', element: <Navigate to='/404' />},
      {path: '/', element: <Home />},
      {path: '404', element: <PageNotFound />},
      {path: 'account', element: <Navigate to='/account/list' />},
    ],
  }

  const accountRoutes = {
    path: 'account',
    element: <AccountLayout />,
    children: [
      {path: '*', element: <Navigate to='/404' />},
      {path: ':id', element: <Home />},
      {path: 'add', element: <Home />},
      {path: 'list', element: <Home />},
    ],
  }

  const routing = useRoutes([mainRoutes, accountRoutes])

  return <>{routing}</>
}

export default Router
