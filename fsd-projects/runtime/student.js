function moveScenery() {
  // TODO 2: Move background scenery based on current level speed
  for (var i = 0; i < scenery.building.instances.length; i++) {
    var buildingInstance = scenery.building.instances[i];

    buildingInstance.x += buildingInstance.speedX - currentLevel.speed * 0.5;
    if (buildingInstance.x + buildingInstance.width < 0) {
      buildingInstance.x = scenery.building.loopWidth;
    }
  }

  for (var j = 0; j < scenery.lamp.instances.length; j++) {
    var lampInstance = scenery.lamp.instances[j];

    lampInstance.x += lampInstance.speedX - currentLevel.speed * 0.5;
    if (lampInstance.x + lampInstance.width < 0) {
      lampInstance.x = scenery.lamp.loopWidth;
    }
  }
}

function generateLevel() {
  // TODO 3: Generate the current level's game objects
  for (var i = 0; i < currentLevel.gameObjects.length; i++) {
    var currentObject = currentLevel.gameObjects[i];
    create(currentObject);
  }
}

function create(obj) {
  // TODO 4: Create a game object based on its type and kind
  if (obj.type === "obstacle") {
    makeObstacle(obj);
  } else if (obj.type === "enemy") {
    makeEnemy(obj);
  } else if (obj.type === "powerup") {
    makePowerup(obj);
  } else if (obj.type === "goal") {
    makeGoal(obj);
  } else if (obj.type === "platform") {
    makePlatform(obj);
  }
}

function filterObjects(type) {
  // TODO 5: Return only the game objects of the specified type
  var matchingObjects = [];
  for (var i = 0; i < gameObjects.length; i++) {
    if (gameObjects[i].type === type) {
      matchingObjects.push(gameObjects[i]);
    }
  }
  return matchingObjects;
}

function moveGameObjects(objectList) {
  // TODO 6: Move all game objects of a single type based on speeds
  for (var i = 0; i < objectList.length; i++) {
    var currentObject = objectList[i];
    currentObject.x += currentObject.speedX - currentLevel.speed;
    currentObject.y += currentObject.speedY;
  }
}

function handleProjectileCollisions() {
  // TODO 8: Handle collisions between projectiles and enemies
  for (var i = 0; i < gameObjects.length; i++) {
    var currentObject = gameObjects[i];
    for (var j = 0; j < projectiles.length; j++) {
      var currentProjectile = projectiles[j];
      if (
        isCollidingWithProjectile(currentObject, currentProjectile) === true
      ) {
        handleProjectileObjectCollision(j, i);
      }
    }
  }
}

function handleHallebotGenericCollisions() {
  // TODO 9: Handle collisions between Hallebot and game objects
  for (var i = 0; i < gameObjects.length; i++) {
    var currentObject = gameObjects[i];
    if (currentObject.type !== "platform") {
      if (isGenericCollision(currentObject) === true) {
        handleHallebotGenericCollision(i);
      }
    }
  }

  if (health <= 0 && currentAnimationType !== animationTypes.frontDeath) {
    currentAnimationType = animationTypes.frontDeath;
    frameIndex = 0;
  }
}

function triggerLevelTransition() {
  // TODO 10: Transition to the next level or show win screen
  currentLevelIndex += 1;
  currentLevel = LEVELS[currentLevelIndex];
  gameObjects = [];

  if (currentLevelIndex >= LEVELS.length) {
    player.winConditionMet = true;
  } else {
    generateLevel();
  }
}
