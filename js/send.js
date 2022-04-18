
$(function() {
    $( ".send" ).click(function() {
        $.ajax({
            url: "./send.php", // Куда отправляем данные (обработчик)
            type: "POST", // Тип запроса
            dataType: "json",
            data: {
                "name": $("#name").val(), // Имя
                "email": $("#email").val(), // E-mail
                "message": $("#phone").val() // Сообщение
            },
            success: function(data) {

                console.log(data)

            }
        });
    });
});
