import {MeshBasicMaterial, TextureLoader} from "three";

function loadMaterial(url : string) : MeshBasicMaterial {
    const map = new TextureLoader().load(url);
    return new MeshBasicMaterial({ map: map });
}

export default {
    loadMaterial
};
