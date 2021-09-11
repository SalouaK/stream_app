import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client
        .init({
          clientId:
            '407850786494-t5kh2a3vpesh46love5r45el792ieo3g.apps.googleusercontent.com',
          scope: 'email'
        })
        .then(() => {
          this.auth = window.gapi.auth2.getAuthInstance();

          this.onAuthChange(this.auth.isSignedIn.get());
          this.auth.isSignedIn.listen(this.onAuthChange);
        });
    });
  }

  onAuthChange = isSignedIn => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if (this.props.isSignedIn === null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = state => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);

/* 
With Hooks :
import React, { useEffect, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

const GoogleAuth = ({signOut, signIn, isSignedIn }) => {
    const auth = useRef('');
 
    const onAuthChange = useCallback(
        (isSignedIn) => {
          if (isSignedIn) {
            signIn(auth.current.currentUser.get().getId());
          } else {
            signOut();
          }
        },
        [signIn, signOut]
      );

    useEffect(() => {
        window.gapi.load('client:auth2', () => {
            window.gapi.client
                .init({
                    clientId:
                        '407850786494-t5kh2a3vpesh46love5r45el792ieo3g.apps.googleusercontent.com',
                    scope: 'email',
                })
                .then(() => {
                    auth.current = window.gapi.auth2.getAuthInstance();
                    onAuthChange(auth.current.isSignedIn.get());
                    auth.current.isSignedIn.listen(onAuthChange);
                    //the listen function renders the result immediatly on our page 
                });
        });
    },[onAuthChange]);

    const onSignInClick = () => {
        auth.current.signIn();
    };

    const onSignOutClick = () => {
        auth.current.signOut();
    };

    const renderAuthButton = () => {
        if (isSignedIn === null) {
            return null;
        } else if (isSignedIn) {
            return (
                <button onClick={onSignOutClick} className="ui red google button">
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            return (
                <button onClick={onSignInClick} className="ui red google button">
                    <i className="google icon" />
                    Sign In with Google
                </button>
            );
        }
    };

    return <div>{renderAuthButton()}</div>;
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}
export default connect(mapStateToProps,
    { signIn, signOut }
)(GoogleAuth);
*/