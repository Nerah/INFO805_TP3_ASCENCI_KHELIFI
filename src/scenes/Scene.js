import React from "react";
import {Canvas} from "react-three-fiber";

function Scene(props) {
    return (
        <Canvas style={props.style}>
            {props.children}
        </Canvas>
    );
}

export default Scene;
