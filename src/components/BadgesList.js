import React from "react";
import { Link } from "react-router-dom";
import notFoundImage from "../images/character-not-found.png";

import "../components/styles/BadgesList.css";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

class BadgesListItem extends React.Component {
	render() {
		return (
			<div className="BadgesListItem card box box1" data-aos="fade-up">
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
			<div className="gen-container">
				<div className="form-group pt-4 pb-4">
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

				<div className="not-found">
					<h3 className="mt-4 mb-4">
						No characters were found. Are you sure that{" "}
						<strong>"{query}"</strong> is what you are looking for? You can
						enter either real names or nicknames here.
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
								to={{ pathname: `/badges/${badge.char_id}`, id: badge.char_id }}
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
