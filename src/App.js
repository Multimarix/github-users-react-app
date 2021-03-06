import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// # MAIN COMP..
function App() {
	// # RETs
	return (
		<Router>
			<Switch>
				<PrivateRoute path="/" exact={true}>
					<Dashboard></Dashboard>
				</PrivateRoute>

				<Route path="/login">
					<Login />
				</Route>

				<Route path="*">
					<Error></Error>
				</Route>
			</Switch>
		</Router>
	);
}

export default App;
