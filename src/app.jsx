import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

const setName = function (name) {
	return {
  		type: 'SET_NAME',
  		payload: name
	}
}

class App extends Component {
	onNameBtnClick() {
	  this.props.setName('Scrum')
	}

	render() {
		return (
			<div setName={setName}>
				<h1>Hello World, { this.props.user }!</h1>
				<button onClick={::this.onNameBtnClick}>set name scrum</button>
			</div>
		);
	};
};

export default connect(state => ({user: state.user}), dispatch => ({
		setName: bindActionCreators(setName, dispatch)
	})
)(App)
