function getPin() {
    const pin = generatePin();
    const pinString = pin + '';
    if (pinString.length === 4) {
        return pin;
    }
        
    
  else {
        // console.log('pin not 3 digit found', pin);
            return getPin();
        }
}
function generatePin() {
    const random = Math.round(Math.random()*10000);
    return random;
}

document.getElementById('generate-Pin').addEventListener('click', function () {
    const pin = getPin();
    // display pin
    const displayPin = document.getElementById('display-pin');
    displayPin.value = pin;
})

document.getElementById('calculator').addEventListener('click', function (event) {
    const number = event.target.innerText;
    const typeNumberField = document.getElementById('type-numbers');
    const typeNumberFieldString = typeNumberField.value;
    if (isNaN(number)) { 
        if (number === 'c') {
            typeNumberField.value = '';
        }
        else if (number === '<') {
            const digits = typeNumberFieldString.split();
            digits.pop();
            const remainingDigits = digits.join('');
            typeNumberField.value = remainingDigits;
        }
    }
    else {
       
        
        const newTypeNumber = typeNumberFieldString + number;
        typeNumberField.value = newTypeNumber;
    }
})

// document.getElementById('clear-btn').addEventListener('click', function () {
//     console.log('click');
//     document.getElementById('type-numbers').value = '';

// })

document.getElementById('btn-submit').addEventListener('click', function () {
    const displayPin = document.getElementById('display-pin');
    const currentPin = displayPin.value;

    const typeNumberField = document.getElementById('type-numbers');
    const typeNumberFieldString = typeNumberField.value;
    const pinSuccessMesess = document.getElementById('pin-success');
    const pinFaield = document.getElementById('pin-failed');

    if ( typeNumberFieldString === currentPin) {
      
        pinSuccessMesess.style.display = 'block';
        pinFaield.style.display = 'none';
    }
    else {
       
        pinFaield.style.display = 'block';
        pinSuccessMesess.style.display = 'none';
   }
})