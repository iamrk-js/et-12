let cl = console.log;
$(document).ready(function () {
    let lis = $('.myTabHeading li');
    lis.on('click', tabHandler);
    function tabHandler() {
        let getId = $(this).attr('data-id');
        lis.removeClass('active');
        $(this).addClass('active');
        cl(getId);
        $('.myTabPanel').hide()
        $("#"+getId).fadeIn()
    }
})

