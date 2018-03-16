  import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Form from './components/Form';
import EnvironmentTab from './components/EnvironmentTab';

class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <Form />
        <EnvironmentTab />
      </MuiThemeProvider>
    );
  }
}
injectTapEventPlugin();
export default App;
