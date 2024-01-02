$(() => {
    $("#btn01").click(() => {
        $("#p01").text("Button wurde angeklickt");
    });

    $("#btn01").mouseenter(() => {
        $("#p01").text("Maus über dem Button");
    });

    $("#btn01").mouseleave(() => {
        $("#p01").text("Maus hat den Button verlassen");
    });

    $("#btn02").hover(() => {
        $("#p02").text("Maus hovert über dem Button");
    },
    () => {
        $("#p02").text("Maus hovert nicht mehr über dem Button.");
    } );
});