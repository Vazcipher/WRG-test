import React from 'react';
import { BrowserRouter, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './routes/privateRoutes';
import PublicRoute from './routes/publicRoutes';


import logo from './logo.svg';
import './App.css';
import SignIn from './views/pages/signIn';
import Dashboard from './views/pages/dashboard';

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
        <Redirect from="*" to="/signin" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
