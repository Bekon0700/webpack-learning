const decrementor = require('./decrementor')
const incrementor = require('./incrementor')

exports.genericBtn = function (btnClass) {
    console.log(46941)
    if (btnClass == 'inc') {
        console.log(9999)
        incrementor.incrementor(btnClass)
    }
    else if(btnClass == 'dec') {
        console.log(7777)
        decrementor.decrementor(btnClass)
    }
}