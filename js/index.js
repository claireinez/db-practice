$('#submit').click(function () {
    var data = {
        id: new Date().getTime(),
        text: $('#input').val()
    };
    $.post( '/addData', JSON.stringify(data), function (returnedData) {
        console.log(JSON.parse(returnedData));
    });
});

