import {MeshBasicMaterial, MeshPhongMaterial, TextureLoader} from "three";

function loadBasicMaterial(url : string) : MeshPhongMaterial {
    const map = new TextureLoader().load(url);
    return new MeshBasicMaterial({ map: map });
}

function loadPhongMaterial(url : string) : MeshPhongMaterial {
    const map = new TextureLoader().load(url);
    return new MeshPhongMaterial({ map: map });
}

export default {
    loadBasicMaterial,
    loadPhongMaterial
};
