$(() => {
    $("#time").click(() => {
        $("#dynamic01").load("server-time.php");
    });
});