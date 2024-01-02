$(() => {
    $("#btn01").click(() => {
        $(".frame").append("<p>Absatz mit append()</p>");
    });

    $("#btn02").click(() => {
        $(".frame").prepend("<p>Absatz mit prepend()</p>");
    });

    $("#btn03").click(() => {
        $(".frame").after("<p>Absatz mit after()</p>");
    });

    $("#btn04").click(() => {
        $(".frame").before("<p>Absatz mit before()</p>");
    });
});