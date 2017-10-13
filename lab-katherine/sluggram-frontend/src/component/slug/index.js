import React from 'react';
import {connect} from 'react-redux';
import Splash from '../splash';
import img from './image.png';


class Slug extends React.Component {
  render() {
    return (
      <div className="slug-container">
        <Splash />
        <img  className="slug-image" src={img} />
      </div>
    );
  }
}

let mapStateToProps = () => ({});
let mapDispatchToProps = dispatch => ({});


export default connect(mapStateToProps, mapDispatchToProps)(Slug);
