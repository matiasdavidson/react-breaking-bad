import React from "react";

import "./styles/NavBar.css";
import BreakingBadFolder from "../images/breaking-bad-folder.png";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
	render() {
		return (
			<div className="Navbar">
				<div className="container-fluid">
					<Link className="Navbar__brand" to="/">
						<img
							className="Navbar__brand-logo"
							src={BreakingBadFolder}
							alt="Logo"
						/>
						<span className="font-weight-light">Breaking</span>
						<span className="font-weight-bold">Bad</span>
						<span className="font-weight-light">Site</span>
					</Link>
				</div>
			</div>
		);
	}
}

export default Navbar;
