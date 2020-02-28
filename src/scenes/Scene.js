import React, {Component} from "react";
import {Canvas, extend, useThree} from "react-three-fiber";
import utils from "../utils";
import {PerspectiveCamera} from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

extend({OrbitControls});

function Controls() {
    const {
        camera,
        gl: {domElement}
    } = useThree();
    return <orbitControls enableRotate={true} minDistance={5} maxDistance={50} args={[camera, domElement]} />
}

class Scene extends Component {
    static defaultProps = {
        camPos: [0, 0, 5],
        camLookAt: [0, 0, 0]
    };

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
        this.state.camera.position.set(this.props.camPos[0], this.props.camPos[1], this.props.camPos[2]);
        this.state.camera.lookAt(this.props.camLookAt[0], this.props.camLookAt[1], this.props.camLookAt[2]);
    }

    render() {
        return (
            <Canvas camera={this.state.camera} style={this.props.style}>
                <Controls/>
                {this.props.children}
            </Canvas>
        );
    }
}

export default Scene;
