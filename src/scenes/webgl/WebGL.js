import React, {Component} from "react";
import {Canvas} from "react-three-fiber";
import {
    WebGLBox
} from "../../scene-components";

class WebGL extends Component {
    render() {
        return (
            <Canvas style={{background: 'black'}}>
                <WebGLBox position={[-1.2, 0, 0]}/>
            </Canvas>
        );
    }
}

export default WebGL;
