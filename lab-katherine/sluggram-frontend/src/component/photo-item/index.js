import React from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import * as utils from '../../lib/utils.js';
import {tokenDelete} from '../../action/auth-actions';

class PhotoItem extends React.Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }
  render() {
    return (
      <div className="photo-item">
        <img src={this.props.photo.url} style={{"width": "15%", "border": "1px solid grey"}}/>
        <p>{this.props.photo.description}</p>
      </div>
    );
  }
}

let mapStateToProps = () => ({});

let mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(PhotoItem);
