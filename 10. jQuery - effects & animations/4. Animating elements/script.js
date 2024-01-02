$(() => {
    $("#btn01").click(() => {
        $("#ball").animate({ left: "200px" }, 2000, () => {
            $("#ball").animate({ left: "0px" }, 2000);
        });
    });
});

$(() => {
    $("#btn02").click(() => {
        $("#ball").animate({
            left: "250px",
            width: "50px",
            opacity: "0.0"
        }, 2000);

        $("#ball").animate({
            left: "0px",
            width: "100px",
            opacity: "1.0"
        }, 2000);
    });
});

$(() => {
    $("#btn03").click(() => {
        $("#ball").stop();
    });
});