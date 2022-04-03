let cl = console.log;

$(document).ready(function () {
    const hide = $('#hide');
    const show = $('#show');
    const toggle = $('#toggle');
    const slideUp = $('#slideUp');
    const slideDown = $('#slideDown');
    const slideToggle = $('#slideToggle');
    const fadeOut = $('#fadeOut');
    const fadeIn = $('#fadeIn');
    const fadeToggle = $('#fadeToggle');
    const animate = $('#animate');
    const stop = $('#stop');
    const demo = $('.demo')
    hide.on('click', function () {
        demo.hide()
    })
    show.on('click', function () {
        demo.show()
    })
    toggle.on('click', function () {
        demo.toggle()
    })
    slideUp.on('click', function () {
        // demo.slideUp('3000')
        // demo.slideUp('fast')
        demo.slideUp('slow')
    })
    slideDown.on('click', function () {
        demo.slideDown(3000)
    })
    slideToggle.on('click', function () {
        demo.slideToggle(3000)
    })
    fadeOut.on('click', function(){
        demo.fadeOut(1000)
    })
    fadeIn.on('click', function(){
        demo.fadeIn(2000)
    })
    fadeToggle.on('click', function(){
        demo.fadeToggle('slow')
    })
    animate.on('click', function(){
        demo.animate({
          left:'300px',
          top:'300px',
          width: "400px",
          height: "400px",
          opacity:'.5'
        }, 3000)
    })
    stop.on('click', function(){
        demo.stop()
    })
})