import React from 'react';
import './_heroContainer.scss';
import {Button, Image} from 'react-bootstrap';
import assetPicture from '../../assets/mountains.jpg';

class Hero extends React.Component {
  constructor(props){
    super(props);
    this.state = { 

    };
  }

  
  render() {
    return (
      <section>
        <div className='hero'>
          <Image className='uploadedImages' src={assetPicture} responsive />
          <div className="bar"></div>
        </div>
      </section>
    );
  }
}


export default Hero;