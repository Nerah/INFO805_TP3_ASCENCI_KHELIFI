import configuration from "../config";

function getConfigScene(jsx_name : string) : Object {
    return configuration.scenes.find(
        item => item.component.type.name === jsx_name
    );
}

export default {
    getConfigScene
};
