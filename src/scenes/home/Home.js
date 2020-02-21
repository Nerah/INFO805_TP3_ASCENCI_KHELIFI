import React, {Component} from "react";
import {Link} from "react-router-dom";
import configuration from "../../config";

class Home extends Component {
    render() {
        const listeScenes = configuration.scenes.map((item) => (
            <li>
                <Link to={item.route}>
                    {item.titre}
                </Link>
            </li>
        ));

        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={configuration.pages.home.route}>{configuration.pages.home.titre}</Link>
                        </li>
                        {listeScenes}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Home;
