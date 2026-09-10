$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "rgb(118, 0, 233)"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     //toggleGrid();


    // TODO 2 - Create Platforms
   createPlatform(250, 600, 50, 20, "black");
   createPlatform(350, 650, 50, 20, "black");
   createPlatform(450, 600, 50, 20, "black");
   createPlatform(550, 650, 50, 20, "black");
   createPlatform(650, 600, 50, 20, "black");
   createPlatform(750, 650, 50, 20, "black");
   createPlatform(850, 600, 50, 20, "black");
   createPlatform(950, 650, 50, 20, "black");
   createPlatform(1050, 600, 50, 20, "black");
   createPlatform(1150, 650, 50, 20, "black");
   createPlatform(1250, 600, 50, 20, "black");
   createPlatform(1350, 500, 50, 20, "black");
   createPlatform(250, 400, 50, 20, "black");
   createPlatform(350, 450, 50, 20, "black");
   createPlatform(450, 400, 50, 20, "black");
   createPlatform(550, 450, 50, 20, "black");
   createPlatform(650, 400, 50, 20, "black");
   createPlatform(750, 450, 50, 20, "black");
   createPlatform(850, 400, 50, 20, "black");
   createPlatform(950, 450, 50, 20, "black");
   createPlatform(1050, 400, 50, 20, "black");
   createPlatform(1150, 450, 50, 20, "black");
   createPlatform(1250, 400, 50, 20, "black");
   createPlatform(350, 300, 50, 20, "black");
   createPlatform(450, 200, 50, 20, "black");
   createPlatform(550, 250, 50, 20, "black");
   createPlatform(650, 250, 50, 20, "black");
   createPlatform(750, 200, 50, 20, "black");
   createPlatform(850, 250, 50, 20, "black");
   createPlatform(950, 250, 50, 20, "black");
   createPlatform(1050, 250, 50, 20, "black");
   createPlatform(1150, 250, 50, 20, "black");
   createPlatform(1250, 250, 50, 20, "black");
   createPlatform(1350, 350, 50, 20, "black");
   createPlatform(1350, 150, 50, 20, "black");
  
  createPlatform(150, 680, 100, 20, "black");
   
   

   




    // TODO 3 - Create Collectables
    createCollectable("database", 750, 150);
    createCollectable("database", 450, 350);
    createCollectable("database", 1150, 400);
    createCollectable("database", 950, 600);
    createCollectable("database", 350, 600);






    
    // TODO 4 - Create Cannons
    createCannon("top", 500, 1200);
   createCannon("top", 900, 1600);
  createCannon("top", 1300, 2000);
  createCannon("right", 300, 2500);
  createCannon("right", 600, 2500);





    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
