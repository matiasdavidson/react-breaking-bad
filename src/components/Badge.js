import React from "react";

import "./styles/Badge.css";

class Badge extends React.Component {
	render() {
		return (
			<div className="Badge">
				<div className="Badge__header">
					<h1>
						{this.props.badge.name} AKA {this.props.badge.nickname}
					</h1>
				</div>

				<div className="Badge__section-name">
					<p>
						<strong>Birthday: </strong>
						{this.props.badge.birthday} <br />
						<strong>Occupation: </strong>
						{this.props.badge.occupation[0]}{" "}
						{this.props.badge.occupation.length != 0 &&
							"and " + this.props.badge.occupation[1]}{" "}
						<br />
						<strong>Final status: </strong>
						{this.props.badge.status} <br />
						<strong>Appearances on seasons: </strong>
						{this.props.badge.appearance.join(", ")}
					</p>
				</div>

				<div className="Badge__section-info">
					<div>Actor / Actress: {this.props.badge.portrayed}</div>
				</div>
				<div className="d-flex">
					<img className="char-img" src={this.props.badge.img} />
				</div>
			</div>
		);
	}
}

export default Badge;
