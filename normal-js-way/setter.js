let setter = function(condition) {
    const number = document.querySelector('.number');
    let val = +number.innerText;
    if(condition == 'dec') {
        val--;
        number.innerText = val
    }
    else if(condition == 'inc') {
        val++;
        number.innerText = val
    }
}