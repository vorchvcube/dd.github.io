
$(function() {
    console.log($("#name").val())
    $( ".send" ).click(function() {
        $.ajax({
            url: "./send.php", // Куда отправляем данные (обработчик)
            type: "POST", // Тип запроса
            dataType: "json",
            data: {
                "name": $("#Name").val(), // Имя
                "email": $("#Email").val(), // E-mail
                "message": $("#phone").val() // Сообщение
            },
            success: function(data) {

                console.log(data)

            }
        });
    });
});
