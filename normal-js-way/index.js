$('.btn').on('click', function() {
    const btnType = $(this).attr('class').split(' ')[1]
    genericBtn(btnType)
})
