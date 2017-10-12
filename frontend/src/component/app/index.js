import React from 'react';
import './_app.scss';
import Navbar from '../navbar';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import {tokenSet} from '../../action/auth-actions';
import LandingContainer from '../landing-container';
import {BrowserRouter, Route} from 'react-router-dom';
import SettingsContainer from '../settings-container';
import DashboardContainer from '../dashboard-container';

class App extends React.Component {


  // componentDidMount() {
  //   let token = utils.cookieFetch('X-Sluggram-Token');
  //   if(token) this.props.tokenSet(token);
  // }

  render() {
    return (
      <div className="application">
        <BrowserRouter>
          <div>
            <Navbar />
            {utils.renderIf(!this.props.auth,
              <div>
                <h2>This will be a hero advertisement</h2>
              </div>
            )} 
            <Route path="/settings" component={SettingsContainer}/>
            <Route path="/welcome/:auth" component={LandingContainer}/>
            <Route exact path="/dashboard" component={DashboardContainer}/>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  profile: state.profile,
  auth: state.auth,
});

let mapDispatchToProps = dispatch => ({
  tokenSet: token => dispatch(tokenSet(token)),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);