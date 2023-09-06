let display = document.getElementById("display");
//Number enter
one.addEventListener('click',function(){
    display.value = display.value+1;
})
two.addEventListener('click',function(){
    display.value = display.value+2;
})
three.addEventListener('click',function(){
    display.value = display.value+3;
})
four.addEventListener('click',function(){
    display.value = display.value+4;
})
five.addEventListener('click',function(){
    display.value = display.value+5;
})
six.addEventListener('click',function(){
    display.value = display.value+6;
})
seven.addEventListener('click',function(){
    display.value = display.value+7;
})
eight.addEventListener('click',function(){
    display.value = display.value+8;
})
nine.addEventListener('click',function(){
    display.value = display.value+9;
})
zero.addEventListener('click',function(){
    display.value = display.value+0;
})
dot.addEventListener('click',function(){
    display.value = display.value+'.';
})
//Operations
plus.addEventListener('click',function(){
    display.value = display.value+"+";
})
minus.addEventListener('click',function(){
    display.value = display.value+"-";
})
multiply.addEventListener('click',function(){
    display.value = display.value+"*";
})
divide.addEventListener('click',function(){
    display.value = display.value+"/";
})
percent.addEventListener('click',function(){
    display.value = eval(eval(display.value)*100);
})
sign.addEventListener('click',function(){
    display.value=eval(display.value*(-1));
})



//Special operations
equal.addEventListener('click',function(){
    display.value=eval(display.value);
})

ac.addEventListener('click',function(){
    display.value="";
})
        
const enterKey = document.getElementById('display');
enterKey.addEventListener('keydown', function(e) {
    if (e.key === 'Enter') {
        display.value=eval(display.value);
    }
});