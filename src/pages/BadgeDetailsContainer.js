import React from "react";

import BadgeDetails from "./BadgeDetails";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";

class BadgeDetailsContainer extends React.Component {
	state = {
		loading: true,
		error: null,
		data: undefined,
	};

	componentDidMount() {
		fetch(
			`https://www.breakingbadapi.com/api/characters/${this.props.match.params.char_id}`
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

		return <BadgeDetails badge={this.state.data} />;
	}
}

export default BadgeDetailsContainer;
