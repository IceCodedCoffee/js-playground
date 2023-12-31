$(() => {
    $("#btn01").click(() => {
        let inp = "Ihre Eingabe: <b>";
        inp += $("#inp01").val() + "</b>";

        $("#txt").text(inp);
        $("#htm").html(inp);

        $("#inp01").val("Danke");
    });
});