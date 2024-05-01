import React from 'react';
import ReactDOM from 'react-dom/client';
import '../Styles/index.css';

import { router } from './index.tsx';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)