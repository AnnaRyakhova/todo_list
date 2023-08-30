import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './views/App';

import './views/slyles/reset.scss';
import './views/slyles/common.scss';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
