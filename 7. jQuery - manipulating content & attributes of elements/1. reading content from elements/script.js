$(() => {
    $("#btn01").click(() => {
        let txt = $("#p01").text();

        let htm = $("#p01").html();

        console.log(txt + '\n' + htm);
    });
});