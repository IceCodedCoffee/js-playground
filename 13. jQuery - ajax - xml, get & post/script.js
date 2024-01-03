// $(() => {
//     $("#meter").keyup(() => {
//         $.get("calculate.php", { meter: $("#meter").val() },
//         (data, status) => {
//             if (status === "success") {

//                 $("#meilen").val($(data).find("meilen").text());
//                 $("#yard").val($(data).find("yard").text());

//             } else {
//                 $("#meilen").val(0);
//                 $("#yard").val(0);
//             }
//         });
//     });
// });

$(() => {
    $("#meter").keyup(() => {
        $.post("calculate.php", { meter: $("#meter").val() },
        (data, status) => {
            if (status === "success") {

                $("#meilen").val($(data).find("meilen").text());
                $("#yard").val($(data).find("yard").text());

            } else {
                $("#meilen").val(0);
                $("#yard").val(0);
            }
        });
    });
});