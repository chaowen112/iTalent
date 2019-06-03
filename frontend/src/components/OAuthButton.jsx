import { withOAuth } from 'aws-amplify-react';
import React, { Component } from 'react';

class OAuthButton extends React.Component {
  render() {
    return (
      <button onClick={this.props.OAuthSignIn}>
        Sign in
      </button>
    )
  }
}

export default withOAuth(OAuthButton);