import React, { Component } from 'react';

import Header from './Header';
import ContentBody from './ContentBody';

// Import fetch and set default headers
import axios from 'axios';
axios.defaults.headers.common['Cache-Control'] = 'no-cache, no-store, must-revalidate';
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json; charset=utf-8';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error : false,
			events : [],
			loading : true
		};
	}

	componentDidMount() {		
		axios.post('methods.asmx/ListEvents', {})
			.then((response) => {
				console.log(response);
				this.setState({ loading : false });
			})
			.catch((err) => {
				this.setState({ error : true, loading : false });
			});
	}

	render() {
		return (
			<div className="app-root">
				<Header />
				<ContentBody 
					loading={this.state.loading}
					error={this.state.error} 
					events={this.state.events} 
				/>				
			</div>
		);
	}
}