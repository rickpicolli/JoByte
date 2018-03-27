import React, { Component } from 'react';
import API from '../utils/API';

class AddJob extends Component {
  state = {
    job: [],
    company: '',
    position: '',
    link: '',
    status: ''
  };

  //   componentDidMount() {
  //     setState = {
  //         this.handleFormSubmit()
  //     };
  //   }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();

    API.addJob({
      company: this.state.company,
      position: this.state.position,
      link: this.state.link,
      status: this.state.status
    }).catch(err => console.log(err));
  };

  render() {
    return (
      <div className="App">
        <form>
          <input
            value={this.state.company}
            onChange={this.handleInputChange}
            name="company"
            placeholder="Company (required)"
          />
          <input
            value={this.state.position}
            onChange={this.handleInputChange}
            name="position"
            placeholder="Position (required)"
          />
          <input value={this.state.link} onChange={this.handleInputChange} name="link" placeholder="Link (required)" />
          <input
            value={this.state.status}
            onChange={this.handleInputChange}
            name="status"
            placeholder="Status (required)"
          />
          <button onClick={this.handleFormSubmit}>Add</button>
        </form>
      </div>
    );
  }
}

export default AddJob;