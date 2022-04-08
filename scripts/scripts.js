$(function(){
    let genres = [
        ["diamond", ["Pop", "Rock", "Rap", "R&B"]],
        ["moon", ["Pop", "Rock", "Rap", "R&B"]],
        ["star", ["Pop", "Rock", "Rap", "R&B"]],
        ["fox", ["Pop", "Rock", "Rap", "R&B"]]
    ];

    $("#emojiKind").on("change", function(e) {
        //enables the genre dropdown
        $("#genre").prop("disabled", false);

        let inputVal = this.value;

        // console.log(inputVal);

        //loop though array of genres
        $.each(genres, function(key, value) {
            //match genre to user selected
            if (inputVal === value[0]) {
                $.each(value, function(nestKey, nestValue) {
                    // console.log(nestKey);

                    switch (nestKey) {
                        case 0:
                            $("label[for=genre]").text(nestValue);
                            $("#genre").empty();
                            $("#genre").append(
                                $("<option>").text(`select a ${nestValue} `)
                            );
                            break;
                        case 1:
                            $.each(nestValue, function(nameKey, nameValue) {
                                console.log(nameKey, nameValue);

                                $("#genre").append(
                                    $("<option>").val(nameValue).text(nameValue)
                                );
                            });
                            break;
                    }
                });
            }
        });
    });

    // $("#clear").click(() => {
    //     form.reset();
    //   });
});//end of doc