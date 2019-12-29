var first = $('#first').offset().top;
var second = $('#second').offset().top;
var third = $('#third').offset().top;
var fourth = $('#fourth').offset().top;
var fifth = $('#fifth').offset().top;

$(function () {
    $('.header-item').click(function () {
        var id = $(this).attr('targetid');
        //$('html,body').animate({ scrollTop: $(id).offset().top });
        var pos = 0;
        if (id === "first") {
            pos = first;
        } else if (id === "second") {
            pos = second;
        } else if (id === "third") {
            pos = third;
        } else if (id === "fourth") {
            pos = fourth;
        } else if (id === "fifth") {
            pos = fifth;
        }
        $('html,body').animate({ scrollTop: pos });
    });

    $('div.area').each(function () {
        var $win = $(window),
            $winH = $win.height(),
            area = $(this),
            areaH = $(this).height,
            position = area.offset().top,
            per = 0,
            perPos = 0,
            perOpa = 0,
            perY = 100,
            scroll;
        $win.on('load scroll', function () {
            scroll = $win.scrollTop();
            per = (1 - (position - scroll) / $winH) * 100;

            if (per >= 150) {
                //perPos = 100 * ((per - 150) / 50);
                perOpa = 1-((per-150) / 50);
            } else if (150 > per && per >= 100) {
                //perPos = 0;
                perOpa = 1;
            } else if (100 > per) {
                //perPos = 100 - (100 * per / 50);
                perOpa = per / 100;
            }
            //perY = 100 - per;
            //if (per > 99.9) {
            //    per = 100;
            //}
            if (scroll >= position - $winH) {
                area.css({
                    'transform': 'translate(' + 0 + '%,' + 0 + ')',
                    'opacity': perOpa
                });
            }
        });
    });
});
