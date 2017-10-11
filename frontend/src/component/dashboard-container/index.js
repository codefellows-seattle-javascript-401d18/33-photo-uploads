import React from 'react';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import PhotoForm from '../photo-form';
import PhotoItem from '../photo-item';
import {photosFetchRequest, photoCreateRequest} from '../../action/photo-actions.js';

class DashboardContainer extends React.Component {
  componentDidMount(){
    this.props.photoFetch()
      .then(() => console.log(this.props, '***Props after didMountFetch'));
  }

  
  componentWillMount() {
    this.props.auth ? undefined : this.props.history.replace('/');
  }

  render() {
    console.log(this.props.photos,'****photo');
    console.log(this.props.photos, '%%%%%%%%%%%%%%%%');
    return (
      <div>
        <h4>I are Dashboard</h4>
        <PhotoForm
          buttonText='post'
          onComplete={(photo) =>{
            return this.props.photoCreate(photo)
              .catch(console.error);
          }}
        />
        {utils.renderIf(this.props.photos,
          this.props.photos.map(photo =>
            <PhotoItem key={photo._id} photo={photo}
            />
          ))}
      </div>
    );
  }
}

let mapStateToProps = state => ({
  auth: state.auth,
  profile: state.profile,
  photos: state.photos,
});

let mapDispatchToProps = dispatch => ({
  photoCreate: (photo) => dispatch(photoCreateRequest(photo)),
  photoFetch: () => dispatch(photosFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);


