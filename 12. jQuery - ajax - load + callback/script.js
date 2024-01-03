$(() => {
    $("#time").click(() => {
        $("#dynamic01").load("server-time.php");
    });
});

$(() =>{
    $("#time2").click(() =>{
        $("#dynamic02").load("server-time2.php",
        (responseTxt, statusTxt, xhr) => {
            if (statusTxt === "success") {
                console.log(xhr.status);
                console.log(statusTxt);
                console.log(responseTxt);
            }

            if (statusTxt === "error") {
                console.log(xhr.status);
                console.log(statusTxt);
                console.log(responseTxt);
                $("#dynamic02").html(responseTxt)
            }
        });
    });
});