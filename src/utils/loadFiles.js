import {MeshPhongMaterial, TextureLoader} from "three";

function loadMaterial(url : string) : MeshPhongMaterial {
    const map = new TextureLoader().load(url);
    return new MeshPhongMaterial({ map: map });
}

export default {
    loadMaterial
};
