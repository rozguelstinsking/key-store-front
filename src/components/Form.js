import React from 'react';
import TextField from 'material-ui/TextField';

export default class TextFieldExampleControlled extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      value1: 'Property Value1',
      value2: 'Property Value2',
    };
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <TextField
          id="text-field-name"
          value={this.state.value1}
          onChange={this.handleChange}
        />
        <br/>
        <TextField
          id="text-field-id"
          value={this.state.value2}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}
