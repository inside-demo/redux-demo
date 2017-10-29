import React, { Component } from 'react';

export default class User extends Component {
	render() {
		return (
			<h1>Hello World, { this.props.user.name }!</h1>
		)
	}
}
