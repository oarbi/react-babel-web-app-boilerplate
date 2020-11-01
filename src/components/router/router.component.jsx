import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

const Router = (props) => props.routes.map((item) => (item.redirect ? (
  <Redirect key={`redirect:${item.to}`} to={item.to} />
) : (
  <Route key={`path:${item.path}`} exact={!!item.exact} path={item.path} component={item.component} />
)));

Router.propTypes = {
  routes: PropTypes.arrayOf(
    PropTypes.shape({
      path: PropTypes.string,
      component: PropTypes.elementType,
      exact: PropTypes.bool,
    }),
  ).isRequired,
};

Router.defaultProps = {
  routes: [],
};

export default Router;
