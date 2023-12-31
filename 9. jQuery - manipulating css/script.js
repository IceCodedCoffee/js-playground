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

    $("div").css("background-color", "blue");

    $("div.hinweis").css({
        "background-color":"black",
        "color": "white"
    });

    console.log($("p#wichtig").css("background-color"));
});