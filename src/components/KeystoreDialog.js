import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';
import Form from './Form';

/**
 * Dialog with action buttons. The actions are passed in as an array of React objects,
 * in this example [FlatButtons](/#/components/flat-button).
 *
 * You can also close this dialog byclicking outside the dialog, or with the 'Esc' key.
 */
 const divStyle = {
   padding: 30,
   paddingButtom: 30,
   paddingLeft: 50,
   color: 'red',
   align:'right'
 };


export default class KeystoreDialog extends React.Component {
  state = {
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const actions = [
      <FlatButton
        label="Cancelar"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Enviar"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    return (
      <div style={divStyle}>
        <RaisedButton label="Create new keys" onClick={this.handleOpen} />
        <Dialog
          title="Crear keysore"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
        <br/>
        <Form />
        </Dialog>
      </div>
    );
  }
}
