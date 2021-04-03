import React from "react";

import "../components/styles/Badges.css";
import EpisodesList from "../components/EpisodesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import MiniLoader from "../components/MiniLoader";

class Episodes extends React.Component {
	state = {
		loading: true,
		error: null,
		data: undefined,
	};

	componentDidMount() {
		fetch("https://www.breakingbadapi.com/api/episodes")
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

		/* 			Random quotes are not used because the api fails sometimes
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
						<h1>Episodes</h1>
					</div>
				</div>

				<div className="Badges__container">
					<EpisodesList badges={this.state.data} />

					{this.state.loading && <MiniLoader />}
				</div>
			</React.Fragment>
		);
	}
}

export default Episodes;
