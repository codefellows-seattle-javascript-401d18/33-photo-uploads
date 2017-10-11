import React from 'react';
import Navbar from '../navbar';
import {Provider}  from 'react-redux';
import * as utils from '../../lib/utils';
import {tokenSet} from '../../action/auth-actions';
import LandingContainer from '../landing-container';
import {BrowserRouter, Route} from 'react-redux-dom';
import DashboardContainer from '../dashboard-container';
import SettingsContainer from '../settings-container';

class App extends React.Component {
  render() {
    return (
      <div className="application">
        <BrowserRouter>
          <div>
            <Navbar />
            <Route path="settings" component={SettingsContainer}/>
            <Route path="/welcome/:auth" component={LandingContainer}/>
            <Route exact path="/dashboard" component={DashboardContainer}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
