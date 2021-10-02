import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './routes/privateRoutes';
import PublicRoute from './routes/publicRoutes';

import './App.css';
import SignIn from './views/pages/signIn';
import Dashboard from './views/pages/dashboard';
import AddUser from './views/pages/AddUser';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <PublicRoute restricted={false}
          component={SignIn}
          path="/signin" exact />
        <PrivateRoute
          path="/dashboard" exact>
          <Dashboard />
        </PrivateRoute>
        <PrivateRoute path="/adduser">
          <AddUser />
        </PrivateRoute>
        <Redirect from="*" to="/signin" />
        {/* <Redirect to="/adduser" component={AddUser} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
