console.log('script file works');
var numberAdjust = 0;

//dom references
var number = document.getElementById('number');
var add = document.getElementById('add');
var input = document.getElementById('user-input');
var subtract = document.getElementById('subtract');

//event listeners
add.addEventListener('click', function() {
    console.log(`add this number`);
    numberAdjust += parseInt(input.value);
    number.textContent = numberAdjust;
    if (numberAdjust < 0) {
        number.style.color = 'red';
    } else {
        number.style.color = 'black';
    }
    
})

subtract.addEventListener('click', function() {
    console.log(`subtract this number`);
    numberAdjust -= parseInt(input.value);
    number.textContent = numberAdjust;
    if (numberAdjust < 0) {
        number.style.color = 'red';
    } else {
        number.style.color = 'black';
    }
})



