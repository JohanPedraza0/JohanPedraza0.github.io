// === SCENERY CREATION ===

/* Important Note:
    The background images will be drawn in order from top to bottom, so put the ones in the far background first, then work forward. Note that none of the background images can go in front of Hallebot.
*/

// TODO 1: Create more scenery instances
const scenery = {
  moon: {
    imageUrl: "images/backgrounds/moon.png",
    loopWidth: 0,
    instances: [{ x: 100, y: 175, width: 150, height: 150 }],
  },
  building: {
    imageUrl: "images/backgrounds/building.png",
    loopWidth: 1400,
    instances: [
      { x: 0, width: 100, height: 300, speedX: -2 },
      { x: 250, width: 140, height: 420, speedX: -2.4 },
      { x: 520, width: 120, height: 360, speedX: -2.1 },
      { x: 860, width: 170, height: 500, speedX: -2.8 },
      { x: 1180, width: 230, height: 440, speedX: -2.6 },
    ],
  },
  lamp: {
    imageUrl: "images/backgrounds/lamp.png",
    loopWidth: 1400,
    instances: [
      { x: 120, width: 45, height: 150, speedX: -1 },
      { x: 420, width: 50, height: 170, speedX: -1.4 },
      { x: 760, width: 45, height: 160, speedX: -1.2 },
      { x: 1030, width: 55, height: 180, speedX: -1.6 },
      { x: 1330, width: 50, height: 165, speedX: -1.3 },
    ],
  },
};
