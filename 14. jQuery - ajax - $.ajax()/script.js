$(() => {
    $("#meter").keyup(() => {
        $.ajax({
            url: 'calculate.php',
            method: 'GET',
            data: { meter:  $("#meter").val()},
            dataType: 'xml',

            success: (data) => {
                console.log('Success:', data);

                $("#meilen").val($(data).find("meilen").text());
                $("#yard").val($(data).find("yard").text());

            },

            error: (textStatus, errorThrown) => {
                console.error('Error:', textStatus, errorThrown);

                $("#meilen").val(0);
                $("#yard").val(0);
            }
        });
    });
});