import React from "react";
import { Link } from "react-router-dom";

import "../components/styles/BadgeDetails.css";
import EpisodeBadge from "../components/EpisodeBadge";

function useIncreaseCount(max) {
	const [count, setCount] = React.useState(0);

	if (count > max) {
		setCount(0);
	}

	return [count, setCount];
}

function EpisodeDetalis(props) {
	const [count, setCount] = useIncreaseCount(4);

	const badge = props.badge;

	return (
		<div>
			<div className="BadgeDetails__hero">
				<div className="container"></div>
			</div>

			<div className="container">
				<div className="row">
					<div className="col">
						<EpisodeBadge badge={badge[0]} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default EpisodeDetalis;
