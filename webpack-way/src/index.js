const common = require('./common');


window.onload = () => {
    const btnDec = document.getElementById('decrement')
    const btnInc = document.getElementById('increment')
    btnDec.addEventListener('click', common.genericBtn('dec'))
    btnInc.addEventListener('click', common.genericBtn('inc'))
}
