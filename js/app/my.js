/**
 * Created by Li on 2017/2/4.
 */
$(function(){
    $("#fullpage").fullpage({
        // sectionsColor: ["rgba(0,0,0,0.8)", "#2AB561", "#DE8910", "#16BA9D", "#0DA5D6"],
        scrollingSpeed:600,
        afterLoad: function (link, index) {
            $(".section").removeClass("current");
            setTimeout(function () {
                $(".section").eq(index - 1).addClass("current");
            }, 100);
        }
    });
});