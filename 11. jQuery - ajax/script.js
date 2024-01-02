$(() => {
    $("#btn01").click(() => {
        $("div").hide(1000, () => {
            alert("Das Element ist jetzt versteckt")
        });
    });

    $("#btn02").click(() => {
        $("div").show(1000);
    });

    $("#btn03").click(() => {
        $("div").toggle(1000);
    });
});