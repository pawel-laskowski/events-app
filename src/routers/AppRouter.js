import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import DashboardPage from '../components/DashboardPage';
import AddEventPage from '../components/AddEventPage'
import NotFoundPage from '../components/NotFoundPage';
import EditEventPage from '../components/EditEventPage';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={DashboardPage} exact={true} />
        <PrivateRoute path="/create" component={AddEventPage} />
        <PrivateRoute path="/edit/:id" component={EditEventPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
