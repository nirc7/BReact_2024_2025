import  { Component } from 'react';
import PropTypes from 'prop-types';


export default class CCFromsDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName: null
    };
  }

  onTextChanged = (event) => {
    this.setState({ userName: event.target.value.toUpperCase() });
  }

  render() {
    return (
      <div>
        onchange<input type="text" name="userName" value={this.state.userName} /><br />
        connected to state input With onchange<input type="text" name="userName"
          value={this.state.userName} placeholder='enter the name' onChange={this.onTextChanged} />
      </div>
    )
  }
}

CCFromsDemo.propTypes= {
  name: PropTypes.string.isRequired,
  id:PropTypes.number.isRequired
  };
