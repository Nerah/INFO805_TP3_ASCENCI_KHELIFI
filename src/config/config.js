import React from "react";
import {
    Home,
    Error404
} from "../pages"
import {
    Boxes,
    WebGL,
    SystemeSolaireScene
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
        {
            route: "/systeme-solaire",
            titre: "Système solaire",
            component: <SystemeSolaireScene/>
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
