import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Layout from "./Layout";
import Home from "../pages/Home";
import Badges from "../pages/Badges";
import Episodes from "../pages/Episodes";
import EpisodeDetalisCointainer from "../pages/EpisodeDetailsContainer";
import BadgeDetailsContainer from "../pages/BadgeDetailsContainer";
import NotFound from "../pages/NotFound";

function App() {
	return (
		<BrowserRouter>
			<Layout>
				<Switch>
					<Route exact path="/" component={Home} />
					<Route exact path="/badges" component={Badges} />
					<Route
						exact
						path="/badges/:char_id"
						component={BadgeDetailsContainer}
					/>
					<Route exact path="/episodes" component={Episodes} />
					<Route
						exact
						path="/episodes/:episode_id"
						component={EpisodeDetalisCointainer}
					/>

					<Route component={NotFound} />
				</Switch>
			</Layout>
		</BrowserRouter>
	);
}

export default App;
