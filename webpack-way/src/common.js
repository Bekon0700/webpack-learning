const decrementor = require('./decrementor')
const incrementor = require('./incrementor')

exports.genericBtn = function (btnClass) {
    if (btnClass == 'inc') {
        incrementor.incrementor(btnClass)
    }
    else if(btnClass == 'dec') {
        decrementor.decrementor(btnClass)
    }
}