//let myFont;
let bck = [];
let mic = [];
let image2 = []
var xMOVE = 0;
//let font = []

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
 // please use CSS safe fonts
 
  rectMode(CENTER);
  console.log(counter)
  if (counter == 0) {
    bck.push(loadImage('backg1.jpg'));
    mic.push(loadImage('mic3.png'));
    image2.push(loadImage('hyukoh.png'))
    //font.push(loadFont('EastSeaDokdo.ttf'))
  }
  
  //background
  //tint(225)
  background(249, 219, 186);

  //noStroke()
  strokeWeight(0)
  fill(181, 137, 54)//yellow
  rect(width/2, height/1.3, 650, 340);
  fill(26, 72, 112)//blue
  rect(width/4.7, height/3.7, 250, 415);
  fill(52, 84, 44)//green
  rect(width/1.45, height/7.3, 380, 200);
  fill(26, 72, 112)//
  rect(width/1.45, height/2.45, 380, 200);
  // // //image(img,width/2,height/2);
  if (bck[0]) {
    tint(255, 50);
    let img = bck[0];
    image(img,24,8.9, width, height)
    // tint(255, 50);
    // image(img,293, height/3.53, 380, 200)
    // tint(255, 80);
    // image(img,width/2.39, 10, 380, 200)
  }


  //fonts
  strokeWeight(0)
  textFont('Black Han Sans');
  fill(43, 40, 41)
  textSize(25);
  textStyle(BOLDITALIC);
  textAlign(CENTER);
  text(words, width/1.3, height/3.3,width/4,height/2);
  
  // microphone
  if (mic[1]) {
    tint(220);
    //strokeWeight(2)
    let img1 = mic[1];
    let microphone = map(vocal,0,100,100, 130)
    image(img1,width-730,220,microphone+100, microphone+100)
  }
   //shadow
  strokeWeight(0)
  fill(94, 93, 93)
  ellipse(width/7,height/1.28,100,15)
  ellipse(width/4,height/1.11,100,10)
  ellipse(width/2.08,height/1.06,155,10)
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
  fill(179, 79, 79)
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
    line(drawcircle+bs_width/4.8,height/1.4,drawcircle+bs_width/4.8,snare+height/1.59);
  
  }
  
  strokeWeight(0)
  fill(0)
  ellipse(bs_width/3.6,height/1.43,snare-5,45)//shadow

  fill(225)
  ellipse(bs_width/3.6,height/1.45,snare-5,45)//head

  let stick = map(drum,0,100,100,145)
  strokeWeight(3.5)
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
  //line(width/1.8,height/1.4,width/1.63,height/1.5)

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
  //rect(fstick+width/3.3,height/1.2,hstick+10,20)
  circle(fstick+b_width/3.3,b_height/1.2,hstick+10)//stick head
  
  //MP3 DRAWING
  fill(59, 55, 56)
  rect(width/1.45,height/4.1,width/1.84,30)
  //MP3 pic
  if (image2[2]) {
    //tint(220);
    //strokeWeight(2)
    let img2 = image2[2];
    image(img2,width/2.27,height/28,120,120)
  }
  //rect(width/1.45,height/41,width/1.84,20)
  strokeWeight(1)
  stroke(225)
  line(width/2.2,height/4.7,width/1.09,height/4.7)
  //pause,play,skip button
  strokeWeight(5)
  line(width/1.5,height/4.27,width/1.5,height/3.95)
  line(width/1.48,height/4.27,width/1.48,height/3.95)
  strokeWeight(0)
  fill(225)
  triangle(width/1.7,height/4.27,width/1.7,height/3.95,width/1.8,height/4.1)
  triangle(width/1.32,height/4.27,width/1.32,height/3.95,width/1.26,height/4.1)
  textSize(10)
  text('0:21',width/2.2,height/4.9)
  text('3:21',width/1.1,height/4.9)
  textSize(15)
  //text('Now Playing',width/1.4,height/10)


  strokeWeight(0)
  fill(225)
  circle(width/2.2+xMOVE,height/4.7,5,5)
  fill(0)
  xMOVE = xMOVE + 0.02;
  if (xMOVE >160){
    xMOVE = 0;
  }

  //small snare
  let s_width = width-40
  let s_height = height + 110
  let s_height2 = height +20
  let s_width2 = width-250
  let msnare = map(drum,0,100,100,80)
  fill(176, 97, 97)
  rotate(19)
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
  fill(225)
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
  fill(225)
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
  
  // music record

}
  
  
  
  
  
  
  
    

  // // //square()
  // fill(70)
  // circle(100, height-200, 1000)
  // fill(70)
  // arc(0, height, 1350, 1350, 270, 0);

  // fill(0)
  // arc(0, height, 900, 900, 270, 0);
  
  // fill(0)
  // rect(200, 80, 280, 130);
  

  // strokeWeight(2)
  // fill(70)
  // ellipse(width/2,height/2,650)//disk

  // fill(225)
  // ellipse(width/2,height/2,250)//inside disk

  // fill(225)
  // strokeWeight(5)
  // ellipse(width/2,height/2,20)//inside disk


  // strokeWeight(45)
  // line(50, height-180,150,height/1.5);
  // line(50, height-180,150,height-40);
  // line(150, height-290,270,height-130);

      // strokeWeight(0)
      // fill(0)
      // // arc(150, height-80, 160, 140, 230, 60);
      // circle(160, height-100, 135)

  // let arcBass = map(bass,0,100,100,115);
  // strokeWeight(10);
  // line(175, height/3,350,height/3);
  // line(350, 500,350,height/3);
  // line(175, 500,175,height/3);
  

  // fill(0)
  // //left
  // arc(350, 450, arcBass+10, arcBass, 270, 90);
  // //right
  // arc(175, 450, arcBass+10, arcBass, 90, 270);
  
  // let motion = map(drum,0,100,0,90)

  // var drawMap = map(vocal,0,100,30,90)

  //for loops
  // for(var i = 1; i < 30; i+=5){
  //   let drawcircle = i*10;
  //   line(drawcircle+10,vocal,drawcircle,vocal);
  
  // }

// function draw_line(words, vocal, drum, bass, other, counter){
//  strokeWeight(45)
//  line(50, height-180,150,height/1.5);
//  line(50, height-180,150,height-40);
//  line(150, height-290,270,height-130);
// }
// let bar_spacing = height / 10;
//    let bar_height = width / 12;
//    let bar_pos_x = width / 2;
 

//    // vocal bar is red
//    fill(200, 0, 0);
//    rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//    fill(0);
//    text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
//    // drum bar is green
//    fill(0, 200, 0);
//    rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//    fill(0);
//    text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
//    // bass bar is blue
//    fill(50, 50, 240);
//    rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//    fill(0);
//    text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
//    // other bar is white
//    fill(200, 200, 200);
//    rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//    fill(0);
//    text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//    fill(255, 255, 0);
 
//    // display "words"
//    textAlign(CENTER);
//    textSize(vocal);
//    text(words, width/2, height/3);