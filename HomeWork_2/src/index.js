
import Parser from './scripts/parser';
import { add } from './scripts/core';

import './styles/style.scss';

const p = new Parser();

function evaluateAsFloat(code) {
    function evaluate(obj) {
        switch (obj.type) {
        case "number":  return parseInt(obj.value);
        case "+":  return add(evaluate(obj.left), evaluate(obj.right));
        // todo: добавить остальные операции, написать на них тесты 
        }
    }
    return evaluate(p.parse(code));
}

// работает только с "+", добавьте остальные операции 
console.log(evaluateAsFloat('1 + 2 + 3 + 47'));


(function insert(){
    let someNum = [...document.getElementsByClassName('table')];
    console.log(someNum.target);
    console.log(someNum.forEach(element=> element.addEventListener('click', function () {
        let res = document.getElementById('calc_input').value += element.value;
        if (element.value === "C") {
            document.getElementById('calc_input').value = '';
        } else if (element.value === "="){
            let exp = res.slice(0, -1);
            document.getElementById('calc_input').value = eval(exp);
        } else if (element.value === "<-"){
            let cut = document.getElementById('calc_input').value;
            cut = cut.slice(0, -3);
            console.log(cut);
            document.getElementById('calc_input').value = cut;
        }
    })));
})();
function multiply() {

}
function sum() {

}
function division() {

}