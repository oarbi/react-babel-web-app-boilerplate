import React, { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import configureStore from '#/common/stores';
import RootRouter from '#/root/root.router';

const Root = () => (
  <Provider store={configureStore({})}>
    <BrowserRouter>
      <Suspense
        fallback={(
          <div className='loader'>
            <h1>Loading ...</h1>
          </div>
        )}
      >
        <RootRouter />
      </Suspense>
    </BrowserRouter>
  </Provider>
);

export default Root;
