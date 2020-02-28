import React, {Component} from "react";
import {Canvas} from "react-three-fiber";
import utils from "../utils";
import {PerspectiveCamera} from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

class Scene extends Component {
    constructor(props) {
        super(props);
        this.state = {
            camera: new PerspectiveCamera(
                45,
                window.innerWidth / window.innerHeight,
                1,
                4000
            )
        }
    }

    componentDidMount(): void {
        document.title = utils.config.getConfigScene(this._reactInternalFiber.return.elementType.name).titre;
        this.state.camera.position.set(0, 0, 20);
        this.state.camera.lookAt(0, 0, 0);
    }

    render() {
        return (
            <Canvas camera={this.state.camera} style={this.props.style}>
                {this.props.children}
            </Canvas>
        );
    }
}

export default Scene;
