let cl = console.log;
let img1 = " https://images.unsplash.com/photo-1641888994649-ed29b56e4957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80";
let img2 = "https://images.unsplash.com/photo-1641965382148-5e1f8ccc2f51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
$(document).ready(function () {
    let fname = $('#fname');

    fname.on('focus', function () {
        $(this).addClass('bg-success text-white')
    })

    fname.on('blur', function () {
        $(this).removeClass('bg-success text-white')
    })

    // hide >> toggle
    // show
    // fadeOut >> fadeToggle
    // fadeIn
    // slideUp >> slideToggle
    // slideDown
})

