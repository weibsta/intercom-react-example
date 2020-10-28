import React, { Component } from 'react';

/*
  This is an example of how to boot the Intercom Messenger using
  a Class component
*/

class MessengerClass extends Component {
  constructor(props) {
    super(props);

    window.Intercom('boot', {
      app_id: 'APP_ID'           // your app id
      // pass in any custom attributes as key-value pairs here
    });
  }

  componentDidMount() {
      // as a second option, you can also throw Intercom boot inside here
  }

  render() {
    return null;
  }
}

export default MessengerClass;
