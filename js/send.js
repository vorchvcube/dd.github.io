
$(function() {

    $( ".send" ).click(function() {
        console.log($(".name").val())
        $.ajax({
            url: "./send.php", // Куда отправляем данные (обработчик)
            type: "POST", // Тип запроса
            dataType: "json",
            data: {
                "name": $(".name").val(), // Имя
                "email": $(".email").val(), // E-mail
                "phone": $(".phone").val() // Сообщение
            },
            success: function(data) {
                $.toast({
                    text : "Заявка успешно отправлена",
                    showHideTransition : 'slide',  // It can be plain, fade or slide
                    bgColor : 'rgb(255, 207, 0)',              // Background color for toast
                    textColor : '#eee',            // text color
                    allowToastClose : false,       // Show the close button or not
                    hideAfter : 5000,              // `false` to make it sticky or time in miliseconds to hide after
                    stack : 5,                     // `fakse` to show one stack at a time count showing the number of toasts that can be shown at once
                    textAlign : 'left',            // Alignment of text i.e. left, right, center
                    position : 'bottom-left'       // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values to position the toast on page
                })
                console.log(data)

            },
            error: function () {
                $.toast({
                    text : "Ошибка",
                    showHideTransition : 'slide',  // It can be plain, fade or slide
                    bgColor : 'rgb(108,0,3)',              // Background color for toast
                    textColor : '#eee',            // text color
                    allowToastClose : false,       // Show the close button or not
                    hideAfter : 5000,              // `false` to make it sticky or time in miliseconds to hide after
                    stack : 5,                     // `fakse` to show one stack at a time count showing the number of toasts that can be shown at once
                    textAlign : 'left',            // Alignment of text i.e. left, right, center
                    position : 'bottom-left'       // bottom-left or bottom-right or bottom-center or top-left or top-right or top-center or mid-center or an object representing the left, right, top, bottom values to position the toast on page
                })
            }
        });
    });
});
