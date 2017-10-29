import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import User from '../components/user.jsx';

class App extends Component {
	onNameBtnClick() {
	  this.props.setName('Scrum')
	}

	render() {
		return (
			<div>
				<User user={this.props.user}></User>
				<button onClick={::this.onNameBtnClick}>set name scrum</button>
			</div>
		);
	};
};


function mapStateToProps (state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
	setName: bindActionCreators(name => ({
			type: 'SET_NAME',
			payload: name
	}), dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
