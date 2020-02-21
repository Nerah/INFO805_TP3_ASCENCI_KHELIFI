import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";
import configuration from "../config";

const listeScenes = configuration.scenes.map((item) => (
    <Route exact path={item.route}>
        {item.component}
    </Route>
));

function Routes() {
    return (
        <Router>
            <Switch>
                <Route exact path={configuration.pages.home.route}>
                    {configuration.pages.home.component}
                </Route>
                {listeScenes}
                <Route path={configuration.pages.error404.route}>
                    {configuration.pages.error404.component}
                </Route>
            </Switch>
        </Router>
    );
}

export default Routes;
