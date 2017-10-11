import React from 'react';
import {connect} from 'react-redux';
import * as utils from '../../lib/utils';

class DashboardContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  componentWillMount() {
    this.props.auth ? undefined : this.props.history.replace('/');
  }

  handleChange(e) {
    let {type, name} = e.target;
    if(name === 'photo') {
      let {files} = e.target;
      let photo = files[0];
      this.setState({photo});

      utils.photoToDataUrl(photo)
        .then(photos => this.setState({photos}))
        .catch(console.error);
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onComplete(this.state);
  }

  render() {
    return (
      <div className='dashboard-container'>
        <h2>Hello from the Dashboard!</h2>
        <h3>Upload an image to add to the page.</h3>
        <form
          className="photo-form"
          onSubmit={this.handleSubmit}>

          <input
            type="file"
            name="photo"
            onChange={this.handleChange}/>

          <button type="submit">Submit</button>
        </form>
        <img src={this.state.photos} style={{'width': '25%'}}/>
      </div>
    );
  }
}

let mapStateToProps = state => ({
  auth: state.auth,
});

let mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(DashboardContainer);
