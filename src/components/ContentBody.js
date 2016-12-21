import React from 'react';

import Loading from './Loading';
import EventTile from './EventTile';

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
	if(props.error) {		
		return (
			<div className="container text-center">
				<div className="row msg-container">
					<div className="error-container col-xs-12 col-sm-6 offset-sm-3">
						<div className="msg-text">Uh-oh! There was an issue loading your events...</div>
						<a href="" className="reload" onClick={(e) => { e.preventDefault(); window.location.reload(); }}>Retry</a>
					</div>													
				</div>
			</div>
		);
	}
	if(props.events && props.events.length === 0) {
		return (
			<div className="container text-center">
				<div className="row msg-container">
					<div className="error-container col-xs-12 col-sm-6 offset-sm-3">
						<div className="msg-text">It doesn't look like this login has any active events...</div>
					</div>				
				</div>
			</div>
		);
	}
	return (
		<div className="container">
			<div className="events-container">
				{props.events.map((event) => { return (<EventTile key={event.EventGuid} {...event} />);})}
			</div>
		</div>
	);
};

export default ContentBody;