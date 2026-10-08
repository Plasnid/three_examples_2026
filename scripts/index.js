import * as Tone from 'tone';

const synth = new Tone.Synth().toDestination();

// tone embedded into document as well
let tonePage = document.querySelector("body");
tonePage.addEventListener('click', async () => {
    await Tone.start();
    synth.triggerAttackRelease('C4', '8n');
});

//making basic shapes
/**
import { makeAScene } from "/scripts/basicScene.js";
makeAScene();
 */

//materials
/**
import { makeASceneWithMaterials } from '/scripts/materialsExperiments.js';
makeASceneWithMaterials();
 */

//textures
/**
import { makeTextureExample } from '/scripts/texturesExample.js';
makeTextureExample();
 */

//making a scene with motion
/**
import { makeAMotionScene } from "/scripts/basicMotion.js";
makeAMotionScene();
 */

//animating groups of items
/**
import { makeAGroupMotionScene } from "/scripts/motionInGroups.js";
makeAGroupMotionScene();
 */