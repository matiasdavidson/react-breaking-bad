import React from "react";

import "./styles/Badge.css";

class EpisodeBadge extends React.Component {
	render() {
		return (
			<div className="Badge">
				<div className="Badge__header">
					<h1>{this.props.badge.title}</h1>
				</div>

				<div className="Badge__section-name">
					<p>
						<strong>Season: </strong>
						{this.props.badge.season} <br />
						<strong>Episode: </strong>
						{this.props.badge.episode} <br />
						<strong>Air Date: </strong>
						{this.props.badge.air_date}
						<br />
						<strong>Characters: </strong>
						{this.props.badge.characters.join(", ")} <br />
					</p>
				</div>
			</div>
		);
	}
}

export default EpisodeBadge;
