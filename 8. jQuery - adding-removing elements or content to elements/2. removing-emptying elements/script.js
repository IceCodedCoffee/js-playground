$(() => {
    $("#btn01").click(() => {
        $(".frame").empty();
    });

    $("#btn02").click(() => {
        $(".frame").remove();
    });
});