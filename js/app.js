function getpin(){
    const pin = generatePin();
    const pinString = pin + '';
    if(pinString.length === 4){
        return pin;
    }
    else{
      
       return getpin();
    }
}

function generatePin(){
    const random = Math.round(Math.random() * 10000);
    return random;
}

document.getElementById('generate-pin').addEventListener('click', function(){
    const pin = getpin();
    const displayPinField = document.getElementById('display-pin');
    displayPinField.value = pin;
})


document.getElementById('calculator').addEventListener('click' , function(event){

    const number = event.target.innerText;
    const typedNumberField = document.getElementById('type-numbers')
    const previousTypeNumber = typedNumberField.value;
    if(isNaN(number)){
        if(number === 'C'){
            typedNumberField.value = '';
        }
        else if(number === '<'){
        const digits = previousTypeNumber.split('');
        digits.pop();
        const remainingDigits = digits.join('');
        typedNumberField.value = remainingDigits;
    }
}
    else{
        const newTypeNumber = previousTypeNumber + number;
        typedNumberField.value = newTypeNumber;
    }
})

document.getElementById('verify-pin').addEventListener('click' , function(){

    const displayPinField = document.getElementById('display-pin');
    const currentPin = displayPinField.value;

    const typedNumberField = document.getElementById('type-numbers');
    const typeNumber = typedNumberField.value;

    const pinSuccessMessage = document.getElementById('pin-success');
    const pinError = document.getElementById('pin-error');

    if(typeNumber === currentPin){
        pinSuccessMessage.style.display = 'block'
        pinError.style.display = 'none'
    }
    else{    
        pinError.style.display = 'block'
        pinSuccessMessage.style.display = 'none'
    }
})