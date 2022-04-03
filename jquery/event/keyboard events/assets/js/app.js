let cl = console.log;
let img1 = " https://images.unsplash.com/photo-1641888994649-ed29b56e4957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80";
let img2 = "https://images.unsplash.com/photo-1641965382148-5e1f8ccc2f51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
$(document).ready(function(){
    let fname = $('#fname');
    let changeBg = $('#changeBg');
    fname.on('keypress', function(){
        $(this).addClass('bg-primary text-white');

    })
    fname.on('keyup', function(){
        $(this).removeClass('bg-primary text-white');
        cl($(this).val())
        let val = $(this).val()
    })
    changeBg.on('change', (e) => {
        $('body').css('background-color', $(e.target).val())
    })
})

