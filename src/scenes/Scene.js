import React, {Component} from "react";
import {Canvas} from "react-three-fiber";
import utils from "../utils";

class Scene extends Component {
    componentDidMount(): void {
        document.title = utils.config.getConfigScene(this._reactInternalFiber.return.elementType.name).titre;
    }

    render() {
        return (
            <Canvas style={this.props.style}>
                {this.props.children}
            </Canvas>
        );
    }
}

export default Scene;
