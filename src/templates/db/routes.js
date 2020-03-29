import DBListRoutes from './db/routes'

const DBRoutes = [
  {
    path: '/db',
    redirect: '/db/list',
    component: () => import('./DBLayout'),
    name: 'DB',
    children: [
      ...DBListRoutes
    ]
  }
]

export default DBRoutes
