const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');
const plus = document.getElementById('plus');
const minus = document.getElementById('minus');
const times = document.getElementById('times');
const divide = document.getElementById('divide');
const equals = document.getElementById('equals');
const clear = document.getElementById('clear');
const decimal = document.getElementById('decimal');
const display = document.getElementById('display');
const openParen = document.getElementById('openParen');
const closeParen = document.getElementById('closeParen');




one.addEventListener('click', function () {
    display.value += '1';
});


two.addEventListener('click', function () {
    display.value += '2';
}
);
three.addEventListener('click', function () {
    display.value += '3';
}
);
four.addEventListener('click', function () {
    display.value += '4';
}
);
five.addEventListener('click', function () {
    display.value += '5';
}
);
six.addEventListener('click', function () {
    display.value += '6';
}
);
seven.addEventListener('click', function () {
    display.value += '7';
}
);
eight.addEventListener('click', function () {
    display.value += '8';
}

);
nine.addEventListener('click', function () {
    display.value += '9';
}
);

zero.addEventListener('click', function () {
    display.value += '0';
});



plus.addEventListener('click', function () {
    display.value += '+';
}
);
minus.addEventListener('click', function () {
    display.value += '-';
}
);
times.addEventListener('click', function () {
    display.value += '*';
}
);
divide.addEventListener('click', function () {
    display.value += '/';
}
);


equals.addEventListener('click', function () {
    try {
        display.value = eval(display.value);
      }
      catch(err) {
        display.value = 'Error';
      }
    
});
clear.addEventListener('click', function () {
    display.value = '';
});

decimal.addEventListener('click', function () {
    display.value += '.';
}
);

openParen.addEventListener('click', function () {
    display.value += '(';
});

closeParen.addEventListener('click', function () {
    display.value += ')';
}
);

