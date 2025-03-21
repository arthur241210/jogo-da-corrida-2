function setup() {
    createCanvas(500, 500);
  }
  
  let xJogador1 = 0;
  let xJogador2 = 0;
  
  function draw() {
    if (focused == true) {
      background("#D2EBB5");
    } else {
      background("rgb(238,178,178)");
    }
  
    textSize(40);
    text("🤪", xJogador1, 100);
    text("😁", xJogador2, 300);
    rect(350, 0, 10, 400);
    if (xJogador1 > 350) {
      text("boa jogador 1!", 50, 200);
      noLoop("parabéns jogador2");
    }
    if (xJogador2 > 350) {
      
  26
    }
  27
  }text("!", 50, 200);
      noLoop();
    
  
  
  function keyReleased() {
    if (key == "a") {
      xJogador1 += random(20);
    }
    if (key == "s") {
      xJogador2 += random(20);
    }
  }
  