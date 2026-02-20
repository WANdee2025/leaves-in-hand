Skip to Play Sketch
File
Edit
Sketch
Help
English
Log in
or
Sign up



Auto-refresh

Cultivate frigate
p5.js 1.11.11


sketch.js
38
    
39
    // Leaf Shape
40
    fill(item.color);
41
    noStroke();
42
    beginShape();
43
    vertex(50, y);
44
    bezierVertex(70, y-20, 90, y-20, 110, y);
45
    bezierVertex(90, y+20, 70, y+20, 50, y);
46
    endShape(CLOSE);
47
​
48
    // Modern Text Access
49
    textAlign(LEFT, CENTER);
50
    textFont('Georgia'); 
51
    
52
    // Header Text (White/Off-white for Dark Mode)
53
    fill(220);
54
    textSize(22);
55
    textStyle(BOLD);
56
    text(item.truth, 140, y - 10);
57
    
58
    // Detail Text (Light Grey)
59
    fill(160);
60
    textSize(14);
61
    textStyle(NORMAL);
62
    text(item.detail, 140, y + 15);
63
    
64
    // Subtle Divider
65
    stroke(40);
66
    line(50, y + (spacing/2), width - 50, y + (spacing/2));
67
  });
68
}
There are no lint messages
Current lineline 68

Console
Clear

​
Preview

