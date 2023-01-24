const $ = require('jquery')
const common = require('./common');

import './style/main.scss';

$('#decrement').on('click', function() {
    common.genericBtn('dec')
})

$('#increment').on('click', function() {
    common.genericBtn('inc')
})

// document.addEventListener('DOMContentLoaded', () => {
    // const btnDec = document.getElementById('decrement')
    // const btnInc = document.getElementById('increment')
    // $('#decrement').on('click', function() {
    //     common.genericBtn('dec')
    // })
    // btnDec.addEventListener('click', common.genericBtn('dec'))
    // btnDec.addEventListener('click', () => {
    //     console.log(common.genericBtn)
    //     common.genericBtn('dec')
    // })
    // btnInc.addEventListener('click', () => {
    //     common.genericBtn('inc')
    // })
// })