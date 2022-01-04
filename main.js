quick_draw_data_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple"];
random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
Element_of_array = quick_draw_data_set[random_number];
document.getElementById("sketch_to_be_drawn").innerHTML ="sketch to be drawn:"+Element_of_array;

classifier = "";
timer_counter = 0;
timer_check="";
drawn_sketch="";
answer_holder="";
score = 0;
sketch=Element_of_array;
 
function preload(){
    classifier = ml5.imageClassifier("DoodleNet");
}

function draw(){
                
                strokeWeight(6);
                stroke(0);
                if(mouseIsPressed){
                    line(pmouseX,pmouseY,mouseX,mouseY);

                    check_sketch();
                    if(drawn_sketch ==sketch){
                        timer_counter = 0;
                        answer_holder = "set";
                        score = score+1;
                        document.getElementById("score").innerHTML ="score: "+score;
                    }
            }
        }
            
   

function check_sketch(){
    
    timer_counter++;
    document.getElementById("timer").innerHTML="Timer:"+timer_counter;
    if(timer_counter>400){
       // document.getElementById("label").innerHTML="your sketch: ";
        //document.getElementById("confidence").innerHTML="Confidence: " + Math.round(result[0],confidence*100)+"%";
        timer_counter = 0;
        timer_check = "completed";
    }
    if(timer_check == "completed" || answer_holder =="set"){
        timer_check="";
        answer_holder="";
        updateCanvas();

    }
}
    function updateCanvas(){
        background("white");
        quick_draw_data_set=["aircraft carrier","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple"];
        random_number = Math.floor((Math.random()*quick_draw_data_set.length)+1);
        Element_of_array = quick_draw_data_set[random_number];
        sketch= Element_of_array;
        document.getElementById("sketch_to_be_drawn").innerHTML ="sketch to be drawn:"+sketch;
    }

    function setup(){
        canvas =createCanvas(400,400);
        canvas.center();
        background("white");
        canvas.mouseReleased(ClassifyCanvas);
        
        }
      
        

            function ClassifyCanvas()
            {
            classifier.classify(canvas,gotResults);
        
            }


            function gotResults(error,results){
    
                if(error){
                    console.error(error);
                }
                else{
                    console.log(results);
                    drawn_sketch = results[0].label;
                    document.getElementById("label").innerHTML="Your Sketch: " + results[0].label;
                    document.getElementById("confidence").innerHTML="Confidence: "+Math.round(results[0].confidence * 100)+"%"; 
                }
                }

            




    
    
    
        

