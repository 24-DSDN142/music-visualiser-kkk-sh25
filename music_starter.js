//let myFont;
let bck = [];
let mic = [];
let image2 = []
let plants = []
let lineY = 303
var xMOVE = 0;
let angle = -100;
let old_loudest = 0;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  rectMode(CENTER);
  console.log(counter)
  if (counter == 0) {
    bck.push(loadImage('backg1.jpg'));
    mic.push(loadImage('mic3.png'));
    image2.push(loadImage('hyukoh.png'))
    plants.push(loadImage('plants.GIF'))
    
  }
  
  //background
  background(249, 219, 186);
  
  let loudest = 0; // loudest should be 1, 2, 3, 4 (which of 
  // 
  if(vocal > drum) {
    loudest = 1;
  }
  
  if(loudest == old_loudest) {
    fill(26, 72, 112)//blue
    rect(width/1.45, height/2.55, 380, 170);
  }
  else if(loudest == 1) {
    fill(0)//black
    rect(width/1.45, height/2.55, 380, 170);
  }
  old_loudest = loudest;

  //rect background
  strokeWeight(0)
  fill(181, 137, 54)//yellow
  rect(width/2, height/1.3, 650, 340);
  fill(26, 72, 112)//blue
  rect(width/4.7, height/6, 250, 250);
  fill(52, 84, 44)//greenleft
  rect(width/4.7, height/2.3, 250, 150);
  fill(52, 84, 44)//green
  rect(width/1.78, height/7.3, 200, 200);
  // fill(26, 72, 112)//blue
  // rect(width/1.45, height/2.55, 380, 170);
  fill(181, 137, 54)//yellow
  rect(width/1.18, height/7.3, 170, 200);
  // fill(98, 114, 158)
  // quad(width/1.04, height/2.01, width/2.38, height/2.01, width/2.6, height/1.9, width/1.1, height/1.9)


 //image(img,width/2,height/2);
  if (bck[0]) {
    tint(255, 50);
    let img = bck[0];
    image(img,24,8.9, width, height)
    // tint(255, 50);
    // image(img,293, height/3.53, 380, 200)
    // tint(255, 80);
    // image(img,width/2.39, 10, 380, 200)
  }

  if (plants[3]){
    tint(255,200);
    let plant = plants[3];
    //let dance = map(other,0,100,20,40)
    image(plant,300,height/4.4, width/2,height/3)
  }
  
  //bulletin
  //strokeWeight(2)
  //stroke(43, 43, 43)
  fill(249, 219, 186)
  //circle(150,30,20)
  for(var i = 1; i <10; i+=2){
    let dots = i * 23
    circle(33+dots,30,20)
  }
  for(var i = 1; i <10; i+=2){
    let d_lines = i * 23
    strokeWeight(10)
    stroke(249, 219, 186)
    line(33+d_lines,10,33+d_lines,20)
  }
  
  strokeWeight(2)
  for(var i = 1; i <10; i+=2){
    let bl_line = i * 22;
    stroke(43, 43, 43)
    line(35,bl_line+35,width/2.7,35+bl_line)
  }

  //LYRICS
  strokeWeight(0)
  textFont('Black Han Sans');
  fill(0)
  textSize(35);
  textStyle(BOLDITALIC);
  textAlign(CENTER);
  text(words, width/5, height/3,width/4,height/2);
  
  // // microphone
  // if (mic[1]) {
  //   tint(220);
  //   //strokeWeight(2)
  //   let img1 = mic[1];
  //   let microphone = map(vocal,0,100,100, 130)
  //   image(img1,width-730,220,microphone+100, microphone+100)
  // }

   //shadow
  strokeWeight(0)
  fill(94, 93, 93)
  //triangle(width/7,height/1.28,width/1,height/2,width/3,height/2)
  ellipse(width/6.5,height/1.28,100,15)
  ellipse(width/3.7,height/1.11,100,10)
  ellipse(width/1.9,height/1.06,175,10)
  ellipse(width/1.34,height/1.05,105,10)
  ellipse(width/1.13,height/1.08,70,10)

  //radio
  let speaker = map(other,0,100,0,20)
  let anthena = map(vocal,0,100,15,0)
  fill(74, 53, 53)//
  rect(width/4.7, height/2.3, 200, 120,10);
  fill(84, 61, 61)//
  arc(width/4.7, height/2.77, 192, 20,0,180)

  
  fill(23, 23, 23)
  circle(width/7, height/2.3, speaker+70)//speaker
  fill(227, 201, 182)
  circle(width/7, height/2.3,speaker+50)
  fill(23, 23, 23)
  circle(width/7, height/2.3,speaker+30)
  fill(0)
  arc(width/8.5, height/2.75, 20, 15,180,0)
  rect(width/3.7, height/2.5, 95, 20);
  arc(width/8.5, height/1.94, 30, 15,180,0)//feet
  arc(width/3.3, height/1.94, 30, 15,180,0)//feet

    //anthena
  strokeWeight(0)
  circle(width/4.5, anthena+height/3, 5)
  //let s = map(bass,0,100,0,10)
  // for (var i = 1; i<12; i +=2){
  //   let s_line = i*3
  //   stroke(225)
  //   strokeWeight(0.5)
  //   line(width/10.15-s,height/2.4+s_line,width/5.35+s,height/2.4+s_line)
  // }
  strokeWeight(2)
  let l = map(bass,0,100,0,100)
  stroke(0)
  line(width/8.5, height/2.77, width/4.5, height/3+anthena)
  stroke(204, 94, 108)
  line(width/4.9+l,height/2.57,width/4.9+l, height/2.445)

  
  
  strokeWeight(0)
  fill(112, 93, 93)
  circle(width/3.3, height/2.2, 25)//button
  circle(width/4, height/2.2, 25)//butoon
  fill(0)
  circle(width/4, height/2.2, 10)//butoon
  circle(width/3.3, height/2.2, 10)//button


  // Hi-Hats 
  let h_width = width - 50;
  strokeWeight(0)
  fill(191, 121, 8);
  let triDrum = map(drum,0,100,100,115);//top
  let bothat = map(drum,0,100,100,70);//bottom
  triangle(triDrum-15,height/1.7, triDrum - h_width/9, height/1.6, h_width/3.5, triDrum+height/2.2); // upper triangle
  //triangle(width/6.5, height/1.7, width/20, height/1.6, width/4, height/1.7); // upper triangle
  triangle(triDrum-15, height/1.57, triDrum - h_width/9, height/1.6, h_width/3.5, bothat+height/2); // lower triangle

  strokeWeight(1.5) 
  stroke('black')
  line(h_width/7, height/1.7,h_width/6.5,height/1.3);//stand
  line(h_width/11, height/1.28,h_width/6.5,height/1.3);//feet1
  line(h_width/9, height/1.23,h_width/6.5,height/1.3);//feet2
  line(h_width/5, height/1.28,h_width/6.5,height/1.3);//feet3

  
  //snare
  let bs_width = width - 110
  let snare = map(drum,0,100,100,115)
  fill(86, 117, 150)
  strokeWeight(0)
  rect(bs_width/3.6, height/1.37, 100, snare-48);
  strokeWeight(1.5)
  stroke('black')
  line(bs_width/3.6, height/1.31,bs_width/3.6,height/1.13);//stand
  line(bs_width/3.6, height/1.13,bs_width/4,height/1.1);//feet1
  line(bs_width/3.6, height/1.13,bs_width/3.2,height/1.1);//feet2
  line(bs_width/3.6, height/1.13,bs_width/2.7,height/1.1);//feet3
  for(var i = 1; i < 20; i+=5){
    let drawcircle = i*5;
    //stroke(158, 85, 146)
    line(drawcircle+bs_width/4.8,height/1.4,drawcircle+bs_width/4.8,snare+height/1.59);
  
  }
  
  strokeWeight(0)
  fill('black')
  ellipse(bs_width/3.6,height/1.43,snare-5,45)//shadow

  fill(227, 201, 182)
  ellipse(bs_width/3.6,height/1.45,snare-5,45)//head

  let stick = map(drum,0,100,100,145)
  strokeWeight(2.5)
  stroke(0)
  line(bs_width/3.8, stick+height/1.85,bs_width/5,stick+height/1.68);//drum stick 1
  
  //let head = map(bass,0,100,100,115)
  strokeWeight(0)
  fill(0)
  circle(bs_width/3.8, stick+height/1.85, 10)

  //bass drum
  let b_width = width - 50
  let b_height = height + 50
  let bazz = map(drum,0,100,200,160)
  strokeWeight(20)
  stroke(51, 50, 50)
  line(b_width/2.18,b_height/1.23,b_width/2.3,b_height/1.14)
  line(b_width/1.75,b_height/1.23,b_width/1.65,b_height/1.14)
  
  strokeWeight(0)
  fill(0)
  ellipse(b_width/1.87,b_height/1.35,bazz+20,200)//ouside


  strokeWeight(0)
  fill(205, 92, 8)
  ellipse(b_width/1.9,b_height/1.35,bazz+20,200)//ouside

  let b_line = map(drum,0,100,100,130)
  strokeWeight(2)
  stroke('black')
  line(b_line+b_width/2.35,b_height/1.55,b_width/2,b_height/1.55)
  line(b_width/1.8,b_height/1.45,b_line + b_width/2.1,b_height/1.45 )
  line(b_width/1.8,b_height/1.35,b_line +b_width/2.09,b_height/1.35)
  line(b_width/1.8,b_height/1.25,b_line +b_width/2.11,b_height/1.25)
  line(b_width/1.8,b_height/1.20,b_line +b_width/2.3,b_height/1.20)

  strokeWeight(0)
  stroke(120, 116, 116)
  fill(0)
  ellipse(b_width/2,b_height/1.35,bazz+10,200)//inside
  fill(227, 201, 182)
  ellipse(b_width/2.04,b_height/1.35,bazz,200)//inside

  //bass stick
  let hstick = map(drum,0,100,25,10)
  let fstick = map(drum,0,100,100,145)
  strokeWeight(2.5)
  stroke('black')
  line(fstick+b_width/3.3,b_height/1.2,b_width/2,b_height/1.13)//stick
  
  strokeWeight(0)
  fill(0)
  circle(fstick+b_width/3.3,b_height/1.2,hstick+10)//stick head
  
  //MP3 DRAWING
  fill(59, 55, 56)
  rect(width/1.78,height/4.1,200,30)
  //MP3 pic
  if (image2[2]) {
    //tint(220);
    //strokeWeight(2)
    let img2 = image2[2];
    image(img2,width/2.12,24,125,125)
  }
  strokeWeight(1)
  stroke(225)
  line(width/2.3,height/4.7,width/1.46,height/4.7)
  //pause,play,skip button
  strokeWeight(5)
  line(width/1.8,height/4.27,width/1.8,height/3.95)
  line(width/1.75,height/4.27,width/1.75,height/3.95)
  strokeWeight(0)
  fill(225)
  triangle(width/2.05,height/4.27,width/2.05,height/3.95,width/2.18,height/4.1)
  triangle(width/1.57,height/4.27,width/1.57,height/3.95,width/1.5,height/4.1)
  textSize(10)
  text('0:21',width/2.25,height/4.9)
  text('3:21',width/1.48,height/4.9)
  textSize(15)

  strokeWeight(2.5)
  fill(225)
  line(lineY,height/4.7,lineY+xMOVE,height/4.7)
  fill(0)
  xMOVE = xMOVE + 0.027;
  if (xMOVE >175){
    xMOVE = 0;
  }

   // microphone
  strokeWeight(0)
  let mic1 = map(vocal,0,100,90,100)
  fill(158, 129, 73)
  circle(width/1.15,height/1.5,mic1)
  fill(82, 81, 81)
  let voice = map(vocal,0,100,55,65)
  rect(width/1.15,height/1.5,35,voice,10)
  fill(59, 59, 59)
  ellipse(width/1.15, height/1.57, 30, 10)
  ellipse(width/1.15, height/1.44, 30, 10)
  for(var i = 1; i < 8;i+=2){
    let lines = i*3.5;
    let lines2 = i*3;
    strokeWeight(2)
    stroke(212, 210, 210)
    line(width/1.07-voice,height/1.52+lines,width/1.24+voice,height/1.52+lines)
    line(width/1.172+lines2,height/1.575,width/1.172+lines2,height/1.75+voice)
  }
 
  //stand
  strokeWeight(1.5)
  stroke(0)
  line(width/1.148,height/1.425,width/1.148,height/1.1)
  line(width/1.09,height/1.08,width/1.148,height/1.1)
  line(width/1.2,height/1.08,width/1.148,height/1.1)
  line(width/1.15,height/1.07,width/1.148,height/1.1)

  //small snare
  let s_width = width-40
  let s_height = height + 110
  let s_height2 = height +20
  let s_width2 = width-250
  let msnare = map(drum,0,100,100,80)
  push();
  fill(176, 97, 97)
  rotate(19)
  strokeWeight(0)
  rect(s_width/1.28,s_height/2.65,93,msnare-34)
  strokeWeight(2)
  for(var i = 1; i < 20; i+=5){
    //stroke('black')
    stroke(0)
    let drawline = i*5;
    line(drawline + s_width/1.39,s_height/2.9,drawline+s_width/1.39,msnare+s_height/3.25);
    }
  strokeWeight(0)
  fill(0)
  ellipse(s_width/1.28,s_height/2.9,msnare+7,50)//shadow
  fill(227, 201, 182)
  ellipse(s_width/1.28,s_height/2.97,msnare+7,50)
  //snare 2
  rotate(-36)
  fill(176, 97, 97)
  rect(s_width2/4.5,s_height2/1.5,93,msnare-34)
  strokeWeight(2)
  for(var i = 1; i < 20; i+=5){
  //stroke('black')
  let drawline = i*5;
  line(drawline + s_width2/7.5,s_height2/1.56,drawline+s_width2/7.5,msnare+s_height2/1.7);
  }
  strokeWeight(0)
  fill(0)
  ellipse(s_width2/4.5,s_height2/1.57,msnare+5,50)//s
  fill(227, 201, 182)
  ellipse(s_width2/4.5,s_height2/1.59,msnare+5,50)
  strokeWeight(2.5)
  line(s_width2/3.3,stick+s_height2/1.87,s_width2/4.3,stick+s_height2/2.1)
  
  fill(0)
  strokeWeight(0)
  circle(s_width2/4.3,stick+s_height2/2.1,10)
  
  //cymbal
  let c_width = width-40
  let c_height = height+40
  let cymbal = map(drum,0,100,90,120)
  let cymbal1 = map(drum,0,100,110,130)
  strokeWeight(0)
  fill(191, 121, 8)
  triangle(c_width/1.7,cymbal1+c_height/1.3,c_width/3.1,cymbal+c_height/1.5,c_width/2.2,cymbal+c_height/1.45)
  strokeWeight(1.5)
  line(c_width/2.2,c_height/1.23,c_width/2.5,c_height/0.98)//stand
  line(c_width/2.5,c_height/0.98,c_width/3,c_height/0.95)
  line(c_width/2.5,c_height/0.98,c_width/2.5,c_height/0.94)
  line(c_width/2.5,c_height/0.98,c_width/2.2,c_height/0.94)
  pop();
    //disc
    strokeWeight(0)
    let disc = map(other,0,100,195,210)
    let disc2 = map(other,0,100,25,20)
    fill(33, 32, 32)
    arc(width/1.38,110,disc,disc,270,90)
    
    fill(227, 201, 182)
    arc(width/1.38,110,disc2+20,disc2+20,270,90)
    fill(33, 32, 32)
    arc(width/1.38,110,disc2,disc2,270,90)
    push();
    angleMode(DEGREES);
    angle = angle + 1
    translate(width/1.38,110)
    rotate(angle)
    strokeWeight(2)
    stroke(227, 201, 182)
    noFill()
    curve(20, 0, 6, 90, 80, 30, 80, -200);
    curve(20, 0, 6, 70, 70, 20, 80, -190);
    curve(20, 10, 6, 50, 50, 20, 80, -100);

    if (angle >8){
      angle = -100
    }
    pop();

    push();
    let rec = map(other,0,100,25,35)
    rotate(50)
    strokeWeight(0)
    fill(225)
    rect(width/1.6,-410,10,rec)
    strokeWeight(2)
    stroke(0)
    line(width/1.6,-430+rec,width-260,-480)
    pop();
    fill(0)
    circle(width/1.08,30,20)
    
    for(var i = 1; i < 6; i+=2){
      fill(74, 53, 53)
      let dots = i * 2
      let dot = map(vocal,0,100,15,25)
      circle(width/1.13,height/4.2,dot)
      circle(width/1.08,height/4.2,dot)
    }
    
    
}

 