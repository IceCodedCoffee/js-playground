$(() => {
    $("#btn01").click(() => {
        let backup = "Alter Link: " + $("a").attr("href");

        $("a").attr("href", $("#inp01").val());

        backup += "\nNeuer Link: " + $("a").attr("href");

        console.log(backup);
    });
});