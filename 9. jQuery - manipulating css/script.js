$(() => {
    $("#btn01").click(() => {
        $(".hinweis").addClass("frame");
    });

    $("#btn02").click(() => {
        $(".hinweis").removeClass("frame");
    });

    $("#btn03").click(() => {
        $("p").toggleClass("newStyle");
    });
});