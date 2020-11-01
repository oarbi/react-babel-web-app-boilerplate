import React from 'react';

import { Router } from '#/components';
import HomeContainer from '#/root/home/home.container';

const RootRouter = () => {
  const routes = [
    {
      path: '/',
      component: HomeContainer,
      exact: true,
    },
  ];

  return <Router routes={routes} />;
};

export default RootRouter;
