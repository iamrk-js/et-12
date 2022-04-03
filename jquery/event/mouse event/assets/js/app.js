let cl = console.log;
let img1 = " https://images.unsplash.com/photo-1641888994649-ed29b56e4957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80";
let img2 = "https://images.unsplash.com/photo-1641965382148-5e1f8ccc2f51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
$(document).ready(function(){
    let demo = $('.demo');
    let demo1 = $('.demo1');
    let btn1 = $('#btn1');
    let bitcoin = $('#bitcoin')
    // btn1.on('click',function(){
    //     demo.toggle()
    // })
    btn1.on('dblclick',function(){
        demo.toggle()
    })
    demo.on('mouseenter', function(){
        // demo.css('background-color', 'blueviolet')
        $(this).css('background-color', 'blueviolet')
    })
    demo.on('mouseleave', function(){
        $(this).css('background-color', 'gold')
    })
    bitcoin.on('mouseenter', function(){
        $(this).attr('src',img2)
    })
    bitcoin.on('mouseleave', function(){
        $(this).attr('src',img1)
    })
})

// https://images.unsplash.com/photo-1641888994649-ed29b56e4957?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80
// https://images.unsplash.com/photo-1641965382148-5e1f8ccc2f51?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80