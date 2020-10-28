import React, { useEffect } from 'react';

/*
  This is an example of how to boot the Intercom Messenger using
  a functional component and hooks
*/

const MessengerFn = () => {

  useEffect(() => {
    window.Intercom('boot', {
      app_id: 'APP_ID'           // your app id
      // pass in any custom attributes as key-value pairs here
    });
  }, []);

  return null;
}

export default MessengerFn;
