import React, {Component} from "react";
import {Link} from "react-router-dom";
import configuration from "../../config";

class Home extends Component {
    render() {
        const listeScenes = configuration.scenes.map((item, index) => (
            <li key={index}>
                <Link to={item.route}>
                    {item.titre}
                </Link>
            </li>
        ));

        return (
            <div>
                <nav>
                    <ul>
                        {listeScenes}
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Home;
