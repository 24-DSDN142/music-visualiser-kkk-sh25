let myFont;
function preload(){
  myfont = loadFont('Dokdo.ttf');
}
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(227, 173, 86)
  textFont(myfont); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(60);
  text(words, width/7.5, height/3.6,width/5,height/2);
  
  
  //noStroke()
  strokeWeight(0)
  fill(237, 193, 90)
  rect(width/2, height/1.34, 700, 340);
  //image(img,width/2,height/2);
  
  // Hi-Hats 
  fill(103, 148, 153);
  let triDrum = map(drum,0,100,100,115);//top
  let bothat = map(drum,0,100,100,70);//bottom
  triangle(triDrum,height/1.7, triDrum - width/10, height/1.6, width/4, triDrum+height/2.2); // upper triangle
  //triangle(width/6.5, height/1.7, width/20, height/1.6, width/4, height/1.7); // upper triangle
  triangle(triDrum, height/1.58, triDrum - width/10, height/1.6, width/4, bothat+height/2); // lower triangle
  
  strokeWeight(1.5) 
  stroke('black')
  line(width/7, height/1.7,width/6.5,height/1.3);//stand
  line(width/11, height/1.28,width/6.5,height/1.3);//feet1
  line(width/9, height/1.23,width/6.5,height/1.3);//feet2
  line(width/5, height/1.28,width/6.5,height/1.3);//feet3

  //snare
  let snare = map(drum,0,100,100,115)
  fill(148, 85, 53)
  strokeWeight(0)
  rect(width/3.6, height/1.37, 100, snare-48);
  strokeWeight(1.5)
  stroke('black')
  line(width/3.6, height/1.31,width/3.6,height/1.13);//stand
  line(width/3.6, height/1.13,width/4,height/1.1);//feet1
  line(width/3.6, height/1.13,width/3.2,height/1.1);//feet2
  line(width/3.6, height/1.13,width/2.7,height/1.1);//feet3
  for(var i = 1; i < 20; i+=5){
    let drawcircle = i*5;
    line(drawcircle+width/4.5,height/1.4,drawcircle+width/4.5,snare+height/1.59);
  
  }
  
  strokeWeight(0)
  fill(0)
  ellipse(width/3.6,height/1.43,snare-5,45)//shadow

  fill(225)
  ellipse(width/3.6,height/1.45,snare-5,45)//head

  let stick = map(drum,0,100,100,145)
  strokeWeight(3.5)
  line(width/3.8, stick+height/1.85,width/5,stick+height/1.68);//drum stick 1
  
  //let head = map(bass,0,100,100,115)
  strokeWeight(0)
  fill(0)
  circle(width/3.8, stick+height/1.85, 10)

  //bass drum
  let bazz = map(drum,0,100,200,160)
  strokeWeight(20)
  stroke(51, 50, 50)
  line(width/2.18,height/1.23,width/2.3,height/1.15)
  line(width/1.75,height/1.23,width/1.65,height/1.15)
  
  strokeWeight(0)
  fill(0)
  ellipse(width/1.87,height/1.35,bazz+20,200)//ouside


  strokeWeight(0)
  fill(205, 92, 8)
  ellipse(width/1.9,height/1.35,bazz+20,200)//ouside


  strokeWeight(2)
  stroke('black')
  line(width/1.67,height/1.55,width/2,height/1.55)
  line(width/1.8,height/1.45,width/1.55,height/1.45 )
  line(width/1.8,height/1.35,width/1.52,height/1.35)
  line(width/1.8,height/1.25,width/1.56,height/1.25)
  line(width/1.8,height/1.20,width/1.65,height/1.20)
  //line(width/1.8,height/1.4,width/1.63,height/1.5)

  strokeWeight(0)
  stroke(120, 116, 116)
  fill(0)
  ellipse(width/2,height/1.35,bazz+10,200)//inside
  fill(227, 201, 182)
  ellipse(width/2.03,height/1.35,bazz,198)//inside

  //bass stick
  let hstick = map(drum,0,100,25,10)
  let fstick = map(drum,0,100,100,145)
  strokeWeight(2.5)
  stroke('black')
  line(fstick+width/3.3,height/1.2,width/2,height/1.13)//stick
  
  strokeWeight(0)
  fill(0)
  //rect(fstick+width/3.3,height/1.2,hstick+10,20)
  circle(fstick+width/3.3,height/1.2,hstick+10)//stick head
  
  //small snare
  let msnare = map(drum,0,100,100,80)
  fill(176, 97, 97)
  rotate(19)
  rect(width/1.28,height/2.65,93,msnare-34)
  strokeWeight(2)
  for(var i = 1; i < 20; i+=5){
    //stroke('black')
    let drawline = i*5;
    line(drawline + width/1.38,height/2.9,drawline+width/1.38,height/2.46);
    }
  strokeWeight(0)
  fill(0)
  ellipse(width/1.28,height/2.9,msnare+7,50)//shadow
  fill(225)
  ellipse(width/1.28,height/2.97,msnare+7,50)
  
  rotate(-36)
  fill(176, 97, 97)
  rect(width/4.5,height/1.5,93,msnare-34)
  strokeWeight(2)
  for(var i = 1; i < 20; i+=5){
  //stroke('black')
  let drawline = i*5;
  line(drawline + width/6,height/1.56,drawline+width/6,height/1.44);
  }
  strokeWeight(0)
  fill(0)
  ellipse(width/4.5,height/1.57,msnare+5,50)//s
  fill(225)
  ellipse(width/4.5,height/1.59,msnare+5,50)
  strokeWeight(2.5)
  line(width/3.3,stick+height/1.87,width/4.3,stick+height/2.1)
  
  fill(0)
  strokeWeight(0)
  circle(width/4.3,stick+height/2.1,10)
  
  //cymbal
  let cymbal = map(drum,0,100,90,120)
  let cymbal1 = map(drum,0,100,110,130)
  strokeWeight(0)
  fill(106, 156, 137)
  triangle(width/1.7,cymbal1+height/1.3,width/3.2,cymbal+height/1.5,width/2.2,cymbal+height/1.5)
  strokeWeight(1.5)
  line(width/2.2,height/1.25,width/2.5,height/0.98)//stand
  line(width/2.5,height/0.98,width/3,height/0.97)
  line(width/2.5,height/0.98,width/2.5,height/0.93)
  line(width/2.5,height/0.98,width/2.2,height/0.93)
  
  
  
  
  
  
  
  
    

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
}
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