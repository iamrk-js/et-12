let cl = console.log;
$(document).ready(function () {
    let heading = $('.accoHeading');
    heading.on('click', accoHandler);

    function accoHandler(){
        heading.removeClass('active');
        $(this).addClass('active');
        $(this).parent().siblings().find('.accoBody').slideUp();
        // $(this).siblings('.accoBody').slideToggle();
        $(this).next().slideToggle();
    }
})

