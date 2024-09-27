import * as PROPRIUM from 'proprium-dev';

const SCENE =  new PROPRIUM.HVYM_DefaultScene();
//SCENE.createCameraOrbitControls();
SCENE.createCameraZoomOnlyControls();

const ORIGIN = new PROPRIUM.InvisibleBox(SCENE.scene).box;
SCENE.setOrigin(ORIGIN);
ORIGIN.name = "ORIGIN";
const text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

SCENE.scene.add( ORIGIN );

SCENE.animate();

//PROPRIUM.popupStaticScrollableTextPortal(SCENE, ORIGIN, text)
PROPRIUM.popupScrollableTextInputPortal(SCENE, ORIGIN, text);




console.log(SCENE)