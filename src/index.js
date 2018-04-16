import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import App from 'components/App/App'
// import { fetchCurrentUser, fetchOrganisations } from 'libs/axiosRequests.js'
import routes from 'routes'
import createStore from 'store/createStore'
const store = createStore({})

ReactDOM.render(
  <App store={store} routes={routes} />,
  document.getElementById('root')
)


