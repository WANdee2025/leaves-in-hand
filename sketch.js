const simsapaCore = [
  {
    truth: "Suffering exists", 
    detail: "The simple fact of unsatisfactoriness.",
    color: "#666666" 
  },
  {
    truth: "The cause is clinging", 
    detail: "The internal reaction that creates burden.",
    color: "#4F634F" 
  },
  {
    truth: "The Total Extinction", 
    detail: "The state where the fire goes out.",
    color: "#84947C" 
  },
  {
    truth: "The Path is the practice", 
    detail: "The practical way of living (The Middle Way).",
    color: "#3D523D" 
  }
];

function setup() {
  // ปรับให้ใช้พื้นที่เต็มหน้าจอ Browser
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function windowResized() {
  // ถ้าคนดูย่อขยายหน้าจอ ให้วาดใหม่ให้พอดี
  resizeCanvas(windowWidth, windowHeight);
  draw();
}

function draw() {
  background(18, 18, 18); 
  textAlign(CENTER, TOP); 
  fill(100); 
  textSize(16);
  textStyle(NORMAL);
  text("SĪSAPĀSUTTA", width/2, 20);
  let margin = 80;
  // คำนวณระยะห่างให้พอดีกับความสูงหน้าจอ
  let spacing = (height - (margin * 2)) / 5;

  simsapaCore.forEach((item, i) => {
    let y = margin + (i * spacing);
    let xBase = 50;
    
    // Leaf Shape
    fill(item.color);
    noStroke();
    beginShape();
    vertex(xBase, y);
    bezierVertex(xBase + 20, y - 20, xBase + 40, y - 20, xBase + 60, y);
    bezierVertex(xBase + 40, y + 20, xBase + 20, y + 20, xBase, y);
    endShape(CLOSE);

    // Text Content
    textAlign(LEFT, CENTER);
    textFont('Georgia'); 
    
    fill(220);
    textSize(22);
    textStyle(BOLD);
    text(item.truth, xBase + 90, y - 12);
    
    fill(160);
    textSize(14);
    textStyle(NORMAL);
    text(item.detail, xBase + 90, y + 15);
    
    stroke(40);
    line(xBase, y + (spacing/2), width - xBase, y + (spacing/2));
  });
}
