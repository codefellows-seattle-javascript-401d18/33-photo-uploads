import React from 'react';
import {connect} from 'react-redux';


class Splash extends React.Component {
  render() {
    return (
      <div className="splash">
        <h2 className="splash-title ">SLUGGRAM</h2>
      </div>
    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({});


export default connect(mapStateToProps, mapDispatchToProps)(Splash);
