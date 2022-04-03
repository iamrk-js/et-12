let cl = console.log;
$(document).ready(function(){
    let changeBg = $('#changeBg');
    let allDivs = $('.all');

    changeBg.on('change', function(){
        let getClass = "."+$(this).val();
        allDivs.hide()
        $(getClass).fadeIn(700)
    })
})

