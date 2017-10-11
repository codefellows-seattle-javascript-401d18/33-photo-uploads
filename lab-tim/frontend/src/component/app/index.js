import React from 'react';
import Navbar from '../navbar';
import {Provider} from 'react-redux';
import LandingContainer from '../landing-container';
import Dashboard from '../dashboard';
import {BrowserRouter, Route} from 'react-router-dom';
import appStoreCreate from '../../lib/app-create-store';

let store = appStoreCreate();

class App extends React.Component {
  render() {
    return (
      <div className="application">
        <Provider store={store}>
          <BrowserRouter>
            <div>
              <Navbar />
              {<Route path="/welcome/:auth" component={LandingContainer}/>}
              {<Route path="/dashboard" component={Dashboard}/>}
            </div>
          </BrowserRouter>
        </Provider>
      </div>
    );
  }
}

export default App;
