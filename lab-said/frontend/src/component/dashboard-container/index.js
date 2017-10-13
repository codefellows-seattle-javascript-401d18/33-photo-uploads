import React from 'react';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import PhotoForm from '../photo-form';
import PhotoItem from '../photo-item';
import {photosFetchRequest, photoCreateRequest} from '../../action/photo-actions';

class DashboardContainer extends React.Component {
  componentWillMount() {
    console.log('__DASHBOARD_PROPS__', this.props);
    //console.log('_DASHBOARD_DISPATCH__', photo);
    if(!this.props.photos.length) this.props.photosFetch();
  }

  render() {
    return (
      <div className='dashboard-container'>
        <h2>Hello from the Dashboard!</h2>
        <h3>Upload an image to add to the page.</h3>
        <PhotoForm
          buttonText="create"
          onComplete={this.props.photoCreate}/>

        {this.props.photos.map(photo => <PhotoItem key={photo._id} photo={photo}/>)}
      </div>
    );
  }
}

let mapStateToProps = state => ({
  profile: state.profile,
  photos: state.photos,
});

let mapDispatchToProps = dispatch => ({
  photosFetch: () => dispatch(photosFetchRequest()),
  photoCreate: (photo) => dispatch(photoCreateRequest(photo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
