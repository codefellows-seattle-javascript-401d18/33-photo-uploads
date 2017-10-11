import React from 'react';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils.js';
import {Button} from 'react-bootstrap';
import {photoDeleteRequest, photoUpdateRequest} from '../../action/photo-actions.js';

class PhotoItem extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      edit: false,
    };
  }

  render() {
    return (
      <div>
        {utils.renderIf(!this.state.edit ,
          <div>
            <img src={this.props.photo.url} />
            <p> {this.props.photo.description} </p>
            <Button onClick={() =>this.handleDelete}>X</Button>
            <Button onClick={() =>this.setState({edit: true})}>Edit</Button>
          </div>
        )}
      </div>
    );
  }
}

let mapStateToProps = () => ({});

let mapDispatchToProps = (dispatch) => ({
  deletePhoto: (photo) => dispatch(photoDeleteRequest(photo)),
  updatePhoto: (photo) => dispatch(photoUpdateRequest(photo)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoItem);
