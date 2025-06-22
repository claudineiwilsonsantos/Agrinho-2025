let xCarro = 0;       // Posição horizontal do carro
let fase = "campo";    // Fases: "campo", "estrada", "cidade"
let tempoCidade = 0;   // Tempo de chegada na cidade

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(135, 206, 235); // Céu azul claro

  if (fase === "campo") {
    drawCampo();
    movimentarCarro();
    if (xCarro > width / 2) {
      fase = "estrada";
    }
  } else if (fase === "estrada") {
    drawEstrada();
    movimentarCarro();
    if (xCarro > width - 100) {
      fase = "cidade";
      tempoCidade = millis();
    }
  } else if (fase === "cidade") {
    drawCidade();
    movimentarCarro();
    if (millis() - tempoCidade > 5000) {
      xCarro = 0;
      fase = "campo";
    }
  }
}

// -------------------- CENÁRIO CAMPO --------------------
function drawCampo() {
  // Grama
  fill(34, 139, 34);
  rect(0, height / 2, width, height / 2);

  // Sol
  fill(255, 223, 0);
  ellipse(100, 100, 80, 80);

  // Árvores extras
  drawArvore(150, 200);
  drawArvore(250, 220);
  drawArvore(350, 210);

  // Casa
  drawCasa(500, 250);

  // Flores
  drawFlor(80, 350);
  drawFlor(120, 370);
  drawFlor(180, 340);

  // Texto
  fill(0);
  textSize(16);
  text("Sr. Vermelho no Campo: colhendo as frutas!", 20, 30);
}

// Desenhar uma árvore simples
function drawArvore(x, y) {
  fill(139, 69, 19); // Tronco
  rect(x, y, 20, 80);
  fill(34, 139, 34); // Folhas
  ellipse(x + 10, y - 20, 60, 60);
}

// Desenhar uma casa simples
function drawCasa(x, y) {
  fill(210, 180, 140); // Parede
  rect(x, y, 80, 80);
  fill(139, 0, 0); // Telhado
  triangle(x, y, x + 40, y - 50, x + 80, y);
}

// Desenhar flor
function drawFlor(x, y) {
  fill(255, 0, 0);
  ellipse(x - 5, y - 5, 10, 10);
  ellipse(x + 5, y - 5, 10, 10);
  ellipse(x - 5, y + 5, 10, 10);
  ellipse(x + 5, y + 5, 10, 10);
  fill(255, 255, 0);
  ellipse(x, y, 8, 8);
}

// -------------------- CENÁRIO ESTRADA --------------------
function drawEstrada() {
  fill(169, 169, 169); // Asfalto
  rect(0, height / 2, width, height / 2);

  // Faixa amarela
  stroke(255, 255, 0);
  strokeWeight(4);
  line(0, height / 2 + 50, width, height / 2 + 50);
  noStroke();

  // Placas de trânsito
  drawPlaca(200, 300);
  drawPlaca(600, 300);

  // Poste de luz
  drawPoste(400, 250);

  // Mato na beira da estrada
  drawMato(100, 370);
  drawMato(300, 370);
  drawMato(500, 370);
  drawMato(700, 370);

  // Texto
  fill(0);
  textSize(16);
  text("Sr. Vermelho na Estrada: a caminho da cidade!", 20, 30);
}

// Placa de trânsito simples
function drawPlaca(x, y) {
  fill(255, 255, 0);
  rect(x, y, 20, 20);
  fill(0);
  textSize(12);
  textAlign(CENTER, CENTER);
  text("⚠", x + 10, y + 10); // Sinal de alerta
  textAlign(LEFT, BASELINE);
}

// Poste de luz
function drawPoste(x, y) {
  fill(100);
  rect(x, y, 10, 100);
  fill(255, 255, 100);
  ellipse(x + 5, y, 20, 20); // Lâmpada
}

// Mato na beira da estrada
function drawMato(x, y) {
  fill(0, 100, 0);
  triangle(x, y, x + 5, y - 10, x + 10, y);
}

// -------------------- CENÁRIO CIDADE --------------------
function drawCidade() {
  fill(169, 169, 169); // Asfalto
  rect(0, height / 2, width, height / 2);

  drawPredio(100, 120, 60, 180, color(60, 60, 60));
  drawPredio(200, 150, 70, 150, color(80, 80, 150));
  drawPredio(300, 130, 60, 170, color(90, 90, 90));
  drawPredio(400, 140, 80, 160, color(70, 70, 120));
  drawPredio(520, 110, 100, 190, color(50, 50, 50));
  drawPredio(650, 150, 80, 150, color(85, 85, 140));

  // Sol na cidade
  fill(255, 223, 0);
  ellipse(700, 80, 80, 80);

  fill(0);
  textSize(16);
  text("Sr. Vermelho chegou na Cidade: feira das frutas!", 20, 30);
}

function drawPredio(x, y, w, h, cor) {
  fill(cor);
  rect(x, y, w, h);
  fill(255, 255, 100);
  for (let i = y + 10; i < y + h - 10; i += 20) {
    rect(x + 10, i, 10, 10);
    rect(x + w - 20, i, 10, 10);
  }
}

// -------------------- MOVIMENTO DO CARRO --------------------
function movimentarCarro() {
  fill(255, 0, 0);
  rect(xCarro, 340, 60, 20);
  fill(0);
  ellipse(xCarro + 10, 360, 15, 15);
  ellipse(xCarro + 50, 360, 15, 15);
  xCarro += 2; // Velocidade
}
