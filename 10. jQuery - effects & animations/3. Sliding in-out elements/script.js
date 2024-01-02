$(() => {
    $("#teaser").click(() => {
        $("#ball").slideToggle(1000, () => {
            alert("Die Aktion ist fertig")
        });
    });
});