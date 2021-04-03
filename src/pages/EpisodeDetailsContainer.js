import React from "react";

import EpisodeDetails from "./EpisodeDetails";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

class EpisodesDetailContainer extends React.Component {
	state = {
		loading: true,
		error: null,
		data: undefined,
	};

	componentDidMount() {
		fetch(
			`https://www.breakingbadapi.com/api/episodes/${this.props.match.params.episode_id}`
		)
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
	}

	render() {
		if (this.state.loading) {
			return <PageLoading />;
		}

		if (this.state.error) {
			return <PageError error={this.state.error} />;
		}

		return <EpisodeDetails badge={this.state.data} />;
	}
}

export default EpisodesDetailContainer;
