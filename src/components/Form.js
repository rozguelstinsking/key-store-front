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
      projectId: 'projectId',
      jksFile: 'jksFile',
      alias: 'alias',
      environment: 'environment'
    };
  }

  handleProjectIdChange = (event) => {
    this.setState({
      projectId: event.target.value,
      alias: this.props.alias,
      jksFile: this.props.jksFile,
      environment: this.props.environment
    });
  };

  handleAliasChange = (event) => {
    this.setState({
      projectId: this.props.projectId,
      alias: event.target.value,
      jksFile: this.props.jksFile,
      environment: this.props.environment
    });
  };

  handleJksFileChange = (event) => {
    this.setState({
      projectId: this.props.projectId,
      alias: this.props.alias,
      jksFile: event.target.value,
      environment: this.props.environment
    });
  };

  handleEnvironmentChange = (event) => {
    console.log('changed value  ')
    this.setState({
      projectId: this.props.projectId,
      alias: this.props.alias,
      jksFile: this.props.jksFile,
      environment: event.target.value
    });
  };

  handleClick = (event) => {
    this.setState({
      value: event.target.value,
    });
  };


  render() {
    return (
      <div style={divStyle}>
        <h1>Key store search</h1>
        <TextField
          id="projectId"
          value={this.state.projectId}
          onChange={this.handleProjectIdChange.bind(this)}
          disabled={false}
        />
        <br/>
        <TextField
          id="alias"
          value={this.state.alias}
          onChange={this.handleAliasChange.bind(this)}
        />
        <br/>
        <TextField
          id="jksFile"
          value={this.state.jksFile}
          onChange={this.handleJksFileChange.bind(this)}
        />
        <br/>
        <TextField
          id="environment"
          value={this.state.environment}
          onChange={this.handleEnvironmentChange.bind(this)}
        />
        
      </div>
    );
  }
}
