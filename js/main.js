$('.ask').on('click', function(event){
    event.preventDefault()
    $('.ask').removeClass('active')
    $('.answer').slideUp()
    $(this).toggleClass('active').next().stop(true).slideToggle();
})

function typing(element){
    let fullText = ''
    i = 0
    innerText = element.text()

    let interval = setInterval(() => {
        fullText += innerText[i]
            i++

            element.html(fullText)
        if(i > innerText.length - 1){
            clearInterval(interval)
        }        
    }, 100)
}

typing($('h1'))