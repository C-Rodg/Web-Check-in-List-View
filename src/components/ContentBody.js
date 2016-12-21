import React from 'react';

import Loading from './Loading';
import EventTile from './EventTile';

const Events = [{
	City: "Seattle",
	Country : "USA",
	Description: "",
	EndDate : "2016-04-29T00:00:00.0000000",
	EventGuid : "9919260-4bea-42d3-95d8-8c6222b55c73",
	Name: "SplunkLive! Seattle 2017",
	OnlineRegistrationUrl: "/OnlineRegistration/App/9919260-4bea-42d3-95d8-8c6222b55c73/",
	StartDate : "2016-04-26T00:00:00.0000000",
	StateProvince : "WA",
	TimeZoneName : "Pacific Standard Time",
	TimeZoneOffset : -480,
	Venue : "Seattle Convention Center"
}, {
	City: "San Francisco",
	Country : "USA",
	Description: "",
	EndDate : "2016-08-22T00:00:00.0000000",
	EventGuid : "555282360-4bea-42d3-95d8-8c6222b55c73",
	Name: "Apple WWDC User's Conference 2017",
	OnlineRegistrationUrl: "/OnlineRegistration/App/555282360-4bea-42d3-95d8-8c6222b55c73/",
	StartDate : "2016-08-20T00:00:00.0000000",
	StateProvince : "CA",
	TimeZoneName : "Pacific Standard Time",
	TimeZoneOffset : -480,
	Venue : ""
}, {
	City: "London",
	Country : "UK",
	Description: "",
	EndDate : "2016-05-07T00:00:00.0000000",
	EventGuid : "491e2860-4bea-42d3-95d8-8c6222b55c73",
	Name: "Salesforce Higher Ed London 2017",
	OnlineRegistrationUrl: "/OnlineRegistration/App/491e2860-4bea-42d3-95d8-8c6222b55c73/",
	StartDate : "2016-05-05T00:00:00.0000000",
	StateProvince : "",
	TimeZoneName : "Pacific Standard Time",
	TimeZoneOffset : -480,
	Venue : "Horizon Center"
}];

const ContentBody = (props) => {
	if(props.loading) {
		return (
			<div className="container text-center content-body">
				<div className="loading-container">
					<Loading />
				</div>
			</div>
		);
	}
	if(false) {
	//if(props.error) {		
		return (
			<div className="container text-center">
				<div className="error-container">
					Uh-oh! There was an issue loading your events...				
					<a href="" className="reload" onClick={(e) => { e.preventDefault(); window.location.reload(); }}>Retry</a>
				</div>
			</div>
		);
	}
	return (
		<div className="container">
			<div className="events-container">
				{Events.map((event) => { return (<EventTile key={event.EventGuid} {...event} />);})}
			</div>
		</div>
	);
};

export default ContentBody;