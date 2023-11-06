var first = document.getElementById('first');
var second = document.getElementById('second');
var display = document.getElementById('display');
var  e = Math.floor(Math.random()*100);


function cal() {
    if (e <= 49 ) {
    display.innerHTML = first.value + " $ " + second.value + ' love  ' 
    + " is " + Math.floor(Math.random()*100) + 
    ' % '+ "<br>" + "opps!!your compatability is poor."
   }
   if(e >= 50 ) {
    display.innerHTML = first.value + " $ " + second.value + ' love  '
     + " is " + Math.floor(Math.random()*100) + 
    ' % '+ "<br>" + "congratulation to the newest couple"
   }
}

