import React from "react";
import { Link } from "react-router-dom";

import "../components/styles/Badges.css";
import BadgesList from "../components/BadgesList";
import PageLoading from "../components/PageLoading";
import PageError from "../components/PageError";
import api from "../api";
import MiniLoader from "../components/MiniLoader";

class Badges extends React.Component {
	state = {
		loading: true,
		error: null,
		data: undefined,
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
	}

	fetchData = async () => {
		this.setState({ loading: true, error: null });

		try {
			const data = await api.badges.list();
			this.setState({ loading: false, data: data });
		} catch (error) {
			this.setState({ loading: false, error: error });
		}
	};

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
						<div className="Badges__container"></div>
					</div>
				</div>

				<div className="Badges__container">
					<div className="Badges__buttons">
						<Link to="/badges/new" className="btn btn-primary">
							New Character
						</Link>
					</div>

					<BadgesList badges={this.state.data} />

					{this.state.loading && <MiniLoader />}
				</div>
			</React.Fragment>
		);
	}
}

export default Badges;
