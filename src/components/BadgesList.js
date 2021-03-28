import React from "react";
import { Link } from "react-router-dom";

import "../components/styles/BadgesList.css";
import Gravatar from "./Gravatar";

class BadgesListItem extends React.Component {
	render() {
		return (
			<div className="BadgesListItem card">
				<div>
					<div className="mb-4">
						<div className="title">
							<strong className="card-title">{this.props.badge.name}</strong>{" "}
							AKA{" "}
							<strong className="card-title">
								{this.props.badge.nickname}
							</strong>
						</div>
						<br />
						<div className="card-texts">
							<span>Birthday: {this.props.badge.birthday}</span>
							<br />
							{this.props.badge.occupation[0]}
							{this.props.badge.occupation.length > 1 &&
								` and ${this.props.badge.occupation[1]}`}
							<br />
						</div>
					</div>
					<img
						src={this.props.badge.img}
						className="profile-pic"
						alt="Profile picture"
					/>
				</div>
			</div>
		);
	}
}

function useSearchBadges(badges) {
	const [query, setQuery] = React.useState("");
	const [filteredBadges, setFilteredBadges] = React.useState(badges);

	React.useMemo(() => {
		const result = badges.filter((badge) => {
			return (
				`${badge.name}`.toLowerCase().includes(query.toLowerCase()) ||
				`${badge.nickname}`.toLowerCase().includes(query.toLowerCase())
			);
		});

		setFilteredBadges(result);
	}, [badges, query]);

	return { query, setQuery, filteredBadges };
}

function BadgesList(props) {
	const badges = props.badges;

	const { query, setQuery, filteredBadges } = useSearchBadges(badges);

	if (filteredBadges.length === 0) {
		return (
			<div>
				<div className="form-group">
					<label>Filter Characters</label>
					<input
						type="text"
						className="form-control"
						value={query}
						onChange={(e) => {
							setQuery(e.target.value);
						}}
					/>
				</div>

				<h3>No characters were found</h3>
				<Link className="btn btn-primary" to="/badges/new">
					Create new character
				</Link>
			</div>
		);
	}

	return (
		<div className="BadgesList">
			<div className="form-group mb-4">
				<label>Filter Characters</label>
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
						<li key={badge.char_id}>
							<Link
								className="text-reset text-decoration-none"
								to={`/badges/${badge.id}`}
							>
								<BadgesListItem badge={badge} />
							</Link>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default BadgesList;
