let cl = console.log;



$(document).ready(function () {
    let javaScript = $('.javaScript');
    // child to parent

    $('.javaScript').on('click', function () {
        cl($(this))
        cl($(this).parent());

        $(this).parent().css({
            'border': "5px solid orange"
        })

        $(this).parents().css({
            'border': "5px solid blueviolet"
        })
        $(this).parentsUntil('.container').css({
            'border': "5px solid yellowgreen"
        })
    })
    // parent to child
    // Decendents >> children and find

    let SkillList = $('.SkillList');
    let list = $('.SkillList').children();
    cl(list)
    list.css({
        "background-color": "gold"
    })

    let js = SkillList.find('.js')
    cl(js);
    js.css({
        'font-weight': 'bold'
    })

    // siblings
    // siblings, next, prev, nextAll, prevAll, nextUntil , prevUntil

    javaScript = $(".javaScript");
    let sib = javaScript.siblings();
    cl(sib)
    sib.each(function (s, ele) {
        cl(s, $(ele).html())
        $(ele).css({
            "border": "2px solid blueviolet"
        })
    })

    let angular = javaScript.siblings('.angular');
    cl(angular)
    $(angular).html('5 Angular 13');

    // next
    // nextJS // lib of react
    // nestJS, Angular Universal // lib of Angular
    let nextJS = javaScript.next();
    cl(nextJS);
    $(nextJS).text('4 Typescript 4.6');
    // prev 

    let prev = javaScript.prev();

    $(prev).text('2 CSS3');

    // nextAll

    let nAll = javaScript.nextAll();
    cl(nAll);


    // prevAll

    let prevAll = javaScript.prevAll();
    cl(prevAll);

    prevAll.each((i, ele) => {
        cl($(ele).html())
    })
    // nextUntil
    let nextUntil = javaScript.nextUntil('.angular');
    cl(nextUntil);
    // prevUntill
    let prevUntil = javaScript.prevUntil('.html');
    cl(prevUntil);
})