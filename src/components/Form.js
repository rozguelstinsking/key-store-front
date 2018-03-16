import React from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const divStyle = {
  paddingTop: 30,
  paddingLeft: 50,
  color: 'red',
  align:'right'
};

const styleButton = {
  margin: 12,
};


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
      <div style={divStyle}>
        <h1>Key store search</h1>
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
        <RaisedButton style={styleButton} label='Enviar'/>
      </div>
    );
  }
}
