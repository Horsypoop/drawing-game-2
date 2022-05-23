
var timer_counter = 0;
var timer_check = '';
var drawn_sketch = '';
var answer_holder = '';
var score = 0;

Math.floor((Math.random() * quick_draw_data_set.length) + 1);
console.log(quick_draw_data_set[random_number]);
console.log(timer_counter);
sketch = quick_draw_data_set[random_number];
 document.getElementById('sketch_name').innerHTML = 'Sketch To be Drawn: ' + sketch;


 function preload(){
    classifier = ml5.imageClassifier('DoodleNet');
  }

 function draw(){
    strokeWeight(7);
    stroke(0);
     check_sketch();
     if(mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY);
    }
    if(mouseIsPressed){
      timer_counter++
      document.getElementById("tim").innerHTML = "Time: "+timer_counter;
      console.log(timer_counter);
   }
   if(timer_counter == 1000){
      timer_counter= 0;
      document.getElementById("tim").innerHTML = "Time: "+timer_counter;
      score = -1;

   }
 }

 function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background('orange');
}

 function update_canvas(){
     background("orange");
     Math.floor((Math.random() * quick_draw_data_set.length) + 1);
      console.log(quick_draw_data_set[random_number]);
     console.log(timer_counter);
    sketch = quick_draw_data_set[random_number];
    document.getElementById('sketch_name').innerHTML = 'Sketch To be Drawn: ' + sketch;
 }

function check_sketch(){
}
function clear_canvas(){
    background("orange");
}