
// $() >> jQuery Wrapper 
let cl = console.log;
cl("Hello")
$(document).ready(function () {
    let list = $('.list-group');
    let heading = $('#heading');
    cl(list.html());
    heading.html("jQuery Selectors");
    heading.css('color', '#fff');
    let allLists = $('li');
    cl(allLists);
    allLists.css('background-color', "blueviolet")

    // let star = $('*');

    // star.hide();
    // star.show();
    let ajax = $('li.ajax');
    cl(typeof ajax)
    ajax.css({
        'color' : 'gold',
        'font-weight' : 'bold',
        'text-transform' : 'uppercase'
    })


    let firstLi = $('li:first');

    firstLi.addClass('active');

    let lastLi = $('li:last');
    // debugger
    cl(lastLi.html())
    lastLi.removeClass('list-group-item plugins');

    lastLi.toggleClass('list-group-item plugins');

    let firstLiOfFirstUl = $('ul li:first');
    cl(firstLiOfFirstUl.html())

    let allFirstLi = $('ul li:first-child');
    cl(allFirstLi);

    let btn = $('#btn');

    // btn.on('click', function(){
    //     // cl(this.html())
    //     cl($(this))
    //     cl($(this).html())
    //     $(this).text('Got Clicked')
    // })
    btn.click(function(){
        // cl(this.html())
        cl($(this))
        cl($(this).html())
        $(this).text('Got Clicked')
    })
    let oddLi = $('.testList li:odd')
    oddLi.css({
        'color' : 'gold',
        'font-weight' : 'bold',
        'text-transform' : 'uppercase'
    })
})

// $(window).load(function(){

// })