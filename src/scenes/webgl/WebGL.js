import React from "react";
import {
    WebGLBox
} from "../../scene-components";
import Scene from "../Scene";

function WebGL() {
    return (
        <Scene style={{background: 'black'}}>
            <WebGLBox position={[-1.2, 0, 0]}/>
        </Scene>
    );
}

export default WebGL;
