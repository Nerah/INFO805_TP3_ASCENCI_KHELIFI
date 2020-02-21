import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import {
    Home,
    Error404,
} from "../scenes";
import * as config from "../config";
import Boxes from "../scenes/boxes/Boxes";

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path={config.routes.home}>
                    <Home/>
                </Route>
                <Route exact path={config.routes.boxes}>
                    <Boxes/>
                </Route>
                <Route path={config.routes.error404}>
                    <Error404/>
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;
