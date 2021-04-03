import React from "react";

import "../components/styles/Badges.css";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import MiniLoader from "../components/MiniLoader";

class Badges extends React.Component {
	state = {
		loading: true,
		error: null,
		data: undefined,
		quote: undefined,
	};

	componentDidMount() {
		fetch("https://www.breakingbadapi.com/api/characters")
			.then((res) => res.json())
			.then(
				(result) => {
					this.setState({
						loading: false,
						data: result,
					});
				},
				(error) => {
					this.setState({
						loading: false,
						error,
					});
				}
			);

		/* Random quotes are not used because the api fails sometimes.
		 */ fetch("https://www.breakingbadapi.com/api/quote/random")
			.then((res) => res.json())
			.then((result) => {
				this.setState({
					quote: result,
				});
			});
	}

	render() {
		if (this.state.loading === true && !this.state.data) {
			return <PageLoading />;
		}

		if (this.state.error) {
			return <PageError />;
		}

		return (
			<React.Fragment>
				<div className="Badges">
					<div className="Badges__hero">
						<h1>Characters</h1>
					</div>
				</div>

				<div className="Badges__container">
					<BadgesList badges={this.state.data} />

					{this.state.loading && <MiniLoader />}
				</div>
			</React.Fragment>
		);
	}
}

export default Badges;
