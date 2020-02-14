(function insert(){
    let someNum = [...document.getElementsByClassName('button')];
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