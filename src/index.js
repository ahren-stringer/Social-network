import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/reduxStore'
import {Provider} from 'react-redux'
import { BrowserRouter} from 'react-router-dom';
// addPost('!!!!!!!!!')
 //{/* state={store.getState.call(store)} */}
    ReactDOM.render(
        <React.StrictMode>
          <Provider store={store}>
            <BrowserRouter>
              <App/>
            </BrowserRouter>
          </Provider>
        </React.StrictMode>,
        document.getElementById('root')
      );

serviceWorker.unregister();
