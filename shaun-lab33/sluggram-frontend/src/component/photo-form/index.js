import React from 'React';
import * as utils from '../../lib/utils';

class PhotoForm extends React.Component {
  constructor(props){
    super(props);
    this.state = props.photo
      ? props.photo
      : {description: '' , preview: '', photo: null};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleChange(e) {
    let {name} = e.target;
    if(name === `description`) this.setState({description: e.target.value});
    if(name === `photo`) {
      let {files} = e.target;
      let photo = files[0];
      this.setState({photo});

      utils.photoToDataUrl(photo)
        .then(preview => this.setState({preview}))
        .catch(console.error);
    }
  }

  handleSubmit(e){
    e.preventDefault();
    return this.props.onComplete(this.state)
      .then(() => { 
        if(!this.props.profile){
          this.setState({description: '' , preview: '', photo: null});
        }
      });
  }

  render () {
    return (
      <div>
        <h2>Choose a photo to upload to your page</h2>
        <form
          className="photoForm"
          onSubmit={this.handleSubmit}>

          <img src={this.state.preview} style={{'width': '25%'}}/>
          <input
            type="file"
            name="photo"
            onChange={this.handleChange}/>
          <h2>Add a description</h2>
          <textarea
            name="description"
            cols="30"
            rows="5"
            value={this.state.description}
            onChange={this.handleChange}>
          </textarea>

          <button type="submit">{this.props.buttonText}</button>
        </form>
      </div>
    );
  }
}

export default PhotoForm;