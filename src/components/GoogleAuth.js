import React, {Component} from 'react';

class GoogleAuth extends Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '813325091323-5uk7rmai44cafl9pmb0s016487u5n9up.apps.googleusercontent.com',
        scope: 'email',
        plugin_name: "Tvitch"
      });

    });
  }

  render() {
    return <div>Google Auth</div>;
  }
}

export default GoogleAuth;