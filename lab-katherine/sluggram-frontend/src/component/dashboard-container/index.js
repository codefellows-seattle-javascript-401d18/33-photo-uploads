import React from 'react';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import PhotoForm from '../photo-form';
import PhotoItem from '../photo-item';
import {photoFetchRequest, photoCreateRequest} from '../../action/photo-actions';


class DashboardContainer extends React.Component {
  componentDidMount() {
    this.props.photoFetch()
      .then(() => console.log('do i exist', this.props));
  }

  componentWillMount() {
    this.props.auth ? undefined : this.props.history.replace('/');
  }

  render() {
    return (
      <div className="dashboard-container">
        <div className="photo-form-container">
          <h2>Create your photo!</h2>
          <PhotoForm
            onComplete={(photo) => {
              return this.props.photoCreate(photo)
                .catch(console.error)
            }}/>
          {utils.renderIf(this.props.photo,
            this.props.photo.map(photo =>
              <Col sm={6} md={3}>{
                <PhotoItem key={photo._id} photo={photo}
                />
              }<br/></Col>
            ))}
        </div>
        )
      </div>
    );
  }
}

let mapStateToProps = state => ({
  auth: state.auth,
  photo: state.photo,
  profile: state.profile,
});

let mapDispatchToProps = dispatch => ({
  photoCreate: photo => dispatch(photoCreateRequest(photo)),
  photoFetch: () => dispatch(photoFetchRequest()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
