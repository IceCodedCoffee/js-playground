$(() => {
    $("#btn01").click(() => {
        $("div").fadeOut(4000, () => {
            alert("Das Element ist jetzt versteckt")
        });
    });

    $("#btn02").click(() => {
        $("div").fadeIn(4000);
    });

    $("#btn03").click(() => {
        $("div").fadeToggle("slow");
    });
});