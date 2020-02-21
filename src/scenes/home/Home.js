import React, {Component} from "react";
import {Link} from "react-router-dom";
import * as config from "../../config";

class Home extends Component {
    render() {
        return (
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to={config.routes.home}>Home</Link>
                        </li>
                        <li>
                            <Link to={config.routes.boxes}>Boxes</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Home;
