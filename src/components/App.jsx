import React from 'react';
import { connect } from 'react-redux';
import * as firebase from 'firebase';
import { login, logout, resetNext } from '../actions/auth';
import { push } from 'react-router-redux';

import HeaderNav from './HeaderNav';

class App extends React.Component {
	state = {
		loaded: false,
		user: null
	};

	styles = {
		app: {
			fontFamily: [
				'HelveticaNeue-Light',
				'Helvetica Neue Light',
				'Helvetica Neue',
				'Helvetica',
				'Arial',
				'Lucida Grande',
				'sans-serif'
			],
			fontWeight: 300
		}
	};

	componentWillMount() {
		if(this.props.location.pathname === '/privacy-policy' || this.props.location.pathname === '/terms') {
			if (!this.state.loaded) {
				this.setState({ loaded: true });
			}
			return;
		}
		firebase.auth().onAuthStateChanged(user => {
			if (user) {
				if(!user.emailVerified) {
					this.props.onLogin(user);
					this.props.onRedirect(this.props.next || '/confirm');
					this.props.onResetNext();
					if (!this.state.loaded) {
						this.setState({ loaded: true });
					}
				} else {
					firebase.database().ref('/users/' + user.uid).once('value').then((snapshot) => {
					  let paymentVerified = (snapshot.val() && snapshot.val().paymentVerified) || false;
						this.props.onLogin(user);
					  if(paymentVerified) {
							this.props.onRedirect(this.props.next || '/dashboard');
							this.setState({ user: firebase.auth().currentUser })
					  } else {
					  	this.props.onRedirect(this.props.next || '/payment');
					  }
						this.props.onResetNext();
						if (!this.state.loaded) {
							this.setState({ loaded: true });
						}
					});
				}
			} else {
				if (this.props.user) {
					this.props.onRedirect('/');
					this.props.onResetNext();
				} else {
					this.props.onLogout();
				}
				if (!this.state.loaded) {
					this.setState({ loaded: true });
				}
			}
		});
	}

	render() {
		return (
			<div className="wrapper">
				<HeaderNav {...this.props} loaded={this.state.loaded} user={this.state.user} />
				<div className="content">
					{ this.state.loaded ? this.props.children : null}
				</div>
			</div>
		)
	}
}

export default connect(state => ({ next: state.auth.next, user: state.auth.user }), dispatch => ({
	onLogin: user => {
		dispatch(login(user));
	},
	onLogout: () => {
		dispatch(logout());
	},
	onRedirect: (path) => {
		dispatch(push(path));
	},
	onResetNext: () => {
		dispatch(resetNext());
	}
}))(App);
