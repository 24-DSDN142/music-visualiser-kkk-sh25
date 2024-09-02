
// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
  background(227, 173, 86)
  textFont('Verdana'); // please use CSS safe fonts
  rectMode(CENTER)
  textSize(24);
  
  //noStroke()
  strokeWeight(0)
  fill(237, 193, 90)
  rect(width/2, height/1.5, 700, 500);

  fill(103, 148, 153);// Hi-Hats 
  triangle(width/6.5, height/1.7, width/20, height/1.6, width/4, height/1.7); // upper triangle
  triangle(width/6.5, height/1.58, width/20, height/1.6, width/4, height/1.66); // lower triangle
  strokeWeight(1.5) 
  line(width/6.5, height/1.7,width/6.5,height/1.3);//stand
  line(width/11, height/1.28,width/6.5,height/1.3);//feet1
  line(width/9, height/1.23,width/6.5,height/1.3);//feet2
  line(width/5, height/1.28,width/6.5,height/1.3);//feet3

  //snare
  strokeWeight(0)
  rect(30, 20, 55, 40);


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