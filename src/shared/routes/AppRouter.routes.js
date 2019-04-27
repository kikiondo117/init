import React from 'react'
// ! Routes
import PrivateRoutes from './private/PrivateRoutes.routes'
import PublicRoutes from './public/PublicRoutes.routes'
// Components Root
import App from '../../container/App/App'

function AppRouter() {

  const login = true
  return (
    <App>
      {login ? <PrivateRoutes /> : <PublicRoutes />}
    </App>
  )
}

export default AppRouter