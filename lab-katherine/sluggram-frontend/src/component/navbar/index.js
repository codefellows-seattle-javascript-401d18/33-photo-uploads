import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {tokenDeleteRequest} from '../../action/auth-actions';

class Navbar extends React.Component {
  render() {
    return (
      <header className="container">
        {this.props.auth && this.props.profile ?
          <div className="welcome-header">
            {/* <h2 className="welcome">Sluggram</h2> */}
            <img className="avatar" src={this.props.profile.avatar} />
          </div>
          :
          undefined
        }
        <div className="profile-header">
          <ul>
            {this.props.auth ?
              <div>
                <li><Link className="link" to="/settings">**Settings**</Link></li>
                <li><Link className="link" to="/">**Photos**</Link></li>
                <li onClick={this.props.tokenDelete}><Link className="link" to="/">**Logout**</Link></li>
              </div>
              :
              <div>
                <li><Link className="link" to="/welcome/signup">**Signup**</Link></li>
                <li><Link className="link" to="/welcome/login">**Login**</Link></li>
              </div>
            }
          </ul>
        </div>
      </header >
    );
  }
}

let mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
});

let mapDispatchToProps = dispatch => ({
  tokenDelete: () => dispatch(tokenDeleteRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
