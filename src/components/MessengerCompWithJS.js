import React, { useEffect } from 'react';

/*
  This is an example of how to boot the Intercom Messenger using
  a functional component and injecting the Intercom JS library
  within the component
*/

const loadScript = (url) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.addEventListener('load', () => {
      resolve();
    });
    script.addEventListener('error', (e) => {
      reject(e);
    });
    document.querySelector('head').appendChild(script);
  });
}

const MessengerCompWithJS = () => {

  useEffect(() => {
    loadScript('//widget.intercom.io/widget/')
      .then(() => {
        window.Intercom('boot', {
          app_id: 'APP_ID'           // your app id
          // pass in any custom attributes as key-value pairs here
        });
      });
  }, []);

  return null;
}

export default MessengerCompWithJS;
