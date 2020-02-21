import React, {Component} from "react";
import {Canvas} from "react-three-fiber";
import {
    Box
} from "../../scene-components";

class Boxes extends Component {
    render() {
        return (
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Box position={[-1.2, 0, 0]}/>
                <Box position={[1.2, 0, 0]}/>
            </Canvas>
        );
    }
}

export default Boxes;
