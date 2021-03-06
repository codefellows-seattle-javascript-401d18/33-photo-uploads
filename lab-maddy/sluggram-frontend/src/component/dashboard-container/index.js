import React from 'react';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';
import PhotoForm from '../photo-form';
import PhotoItem from '../photo-item';
import {GridList} from 'material-ui/GridList';
import {photosFetchRequest, photoCreateRequest} from '../../action/photo-action';

class DashboardContainer extends React.Component {
  componentWillMount() {
    if(!this.props.photos.length) this.props.photosFetch();
  }

  render() {
    const styles = {
      root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
      },
    };

    return (
      <div className="dashboard-container">
        <h2>This is the dashboard</h2>
        <PhotoForm
          buttonText="create"
          onComplete={this.props.photoCreate}/>

        <GridList style={styles.root} cellHeight={180}>
          {this.props.photos.map(photo => <PhotoItem key={photo._id} photo={photo}/>)}
        </GridList>
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
  photoCreate: photo => dispatch(photoCreateRequest(photo)),
});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
