import React, { Component } from 'react';
import axios from 'axios';
const moment = require('moment');

export default class EventTile extends Component {
	constructor(props) {
		super(props);
		this.state = {
			count : "0/0"
		};
	}

	componentDidMount() {
		axios.post(`${this.props.EventGuid}/methods.asmx/GetRegistrationStats`, {})
			.then((response) => {
				this.setState({
					count : `${response.d.TotalAttended}/${response.d.TotalRegistrants}`
				});
			})
			.catch((err) => {
				//console.log(err);
			});
	}

	render() {
		let location = [this.props.City, this.props.StateProvince || this.props.Country].filter((p) => { return p ? true : false; }).join(", ");
		let startDate = moment(this.props.StartDate, 'YYYY-MM-DDTHH:mm:ss.SSSSSS').format('MMM Do');
		let endDate = moment(this.props.EndDate, 'YYYY-MM-DDTHH:mm:ss.SSSSSS').format('MMM Do, YYYY');
		let date = [startDate, endDate].join(' - ');
		return (
			<div className="row event-tile-wrapper">
				<a href={this.props.EventGuid} className="event-tile col-xs-12 col-sm-6 offset-sm-3">
					<p className="card-head">
						{this.props.Name}
						<span className="count">{this.state.count}</span>
					</p>
					<div className="card-content clearfix">
						{
							date ? 
							<div className="card-content-block card-date col-xs-12 col-sm-7">
								{ date }
								<small>Date</small>
							</div> :
							""
						}					
						{ (location || this.props.Venue) ? 
							<div className="card-content-block card-location col-xs-12 col-sm-5">
								{ location || this.props.Venue}
								<small>Location</small>
							</div> :
							""
						}					
					</div>					
				</a>
			</div>
		);
	}	
}