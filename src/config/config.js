import React from "react";
import {
    Home,
    Boxes,
    WebGL,
    Error404
} from "../scenes"

const configuration = {
    scenes: [
        {
            route: "/boxes",
            titre: "Boxes",
            component: <Boxes/>
        },
        {
            route: "/webgl",
            titre: "WebGL",
            component: <WebGL/>
        },
    ],
    pages: {
        home: {
            route: "/",
            titre: "Home",
            component: <Home/>
        },
        error404: {
            route: "*",
            titre: "Error 404",
            component: <Error404/>
        }
    }
};

export default configuration;
