import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../images/character-not-found.png";

import "../components/styles/EpisodesList.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

class EpisodesListItem extends React.Component {
	render() {
		return (
			<div className="BadgesListItem card box box1" data-aos="fade-up">
				<div>
					<div className="mb-4">
						<div className="title">
							<strong className="card-title">{this.props.badge.title} </strong>
						</div>
						<br />
						<div className="card-texts">
							<span>Season {this.props.badge.season}</span> <br></br>
							<span>Air date: {this.props.badge.air_date}</span>
						</div>
					</div>
				</div>
				<span className="mt-2 pb-2">Click to find out more!</span>
			</div>
		);
	}
}

function useSearchBadges(badges) {
	const [query, setQuery] = React.useState("");
	const [filteredBadges, setFilteredBadges] = React.useState(badges);

	React.useMemo(() => {
		const result = badges.filter((badge) => {
			return `${badge.title}`.toLowerCase().includes(query.toLowerCase());
		});

		setFilteredBadges(result);
	}, [badges, query]);

	return { query, setQuery, filteredBadges };
}

function EpisodesList(props) {
	const badges = props.badges;

	const { query, setQuery, filteredBadges } = useSearchBadges(badges);

	if (filteredBadges.length === 0) {
		return (
			<div className="gen-container">
				<div className="form-group pt-4 pb-4">
					<label>Filter Episodes</label>
					<input
						type="text"
						className="form-control"
						value={query}
						onChange={(e) => {
							setQuery(e.target.value);
						}}
					/>
				</div>

				<div className="not-found">
					<h3 className="mt-4 mb-4">
						No episodes were found. Are you sure that <strong>"{query}"</strong>{" "}
						is what you are looking for? You can enter episodes names only.
					</h3>
					<img
						src={notFoundImage}
						className="not-found-img mb-8"
						alt="Not found"
					/>
				</div>
				{/* 				<Link className="btn btn-primary" to="/badges/new">
					Create new character
				</Link> */}
			</div>
		);
	}

	return (
		<div className="BadgesList quotes">
			<div className="form-group pb-4 pt-4">
				<label>Filter Episodes</label>
				<input
					type="text"
					className="form-control"
					value={query}
					onChange={(e) => {
						setQuery(e.target.value);
					}}
				/>
			</div>

			<ul className="list-unstyled">
				{filteredBadges.map((badge) => {
					return (
						<li key={badge.episode_id}>
							<Link
								className="text-reset text-decoration-none"
								to={{
									pathname: `/episodes/${badge.episode_id}`,
									id: badge.episode_id,
								}}
							>
								<EpisodesListItem badge={badge} />
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default EpisodesList;
