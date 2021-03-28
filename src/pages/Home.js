import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../components/styles/Home.css";
import breakingBadLogo from "../images/breaking-bad-logo.png";
import walterSittingImg from "../images/walter-white-sitting.png";

export default class Home extends Component {
	render() {
		return (
			<div className="Home">
				<dir className="col-text">
					<img
						src={breakingBadLogo}
						className="breaking-bad-logo"
						alt="Breaking Bad Logo"
					/>
					<h1>MATI'S BREAKING BAD SITE</h1>
					<Link className="btn btn-primary button" to="/badges">
						Start
					</Link>
				</dir>
				<dir className="col-img">
					<img src={walterSittingImg} className="walter-sitting" alt="Walter" />
				</dir>
			</div>
		);
	}
}
