import React from 'react';
import AuthForm from '../auth-form';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import {signupRequest, loginRequest} from '../../action/auth-actions';
import Dashboard from '../dashboard-container';

class LandingContainer extends React.Component {
  render() {
    console.log(this.props.auth,'This is that thing');
    let {params} = this.props.match;
    console.log(this.props);
    let handleComplete = params.auth === 'login' ?
      this.props.login :
      this.props.signup;

    return (
      <div>
        <h2>hello world from landing!</h2>
        <AuthForm
          auth={params.auth}
          onComplete={handleComplete}/>

        <section>
          {utils.renderIf(this.props.auth,
            <Dashboard
            />
          )}
        </section>
      </div>
    );
  }
}

let mapStateToProps = (state) => ({
  auth: state.auth,
});
let mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signupRequest(user)),
  login: user => dispatch(loginRequest(user)),
});


export default connect(mapStateToProps, mapDispatchToProps)(LandingContainer);
