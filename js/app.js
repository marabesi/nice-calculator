
$(".btn").click( function() {
    var value = $(this).val();
    var currentValue = $('#display').val();

    if (value == 'C') {
        $('#display').val('');
    } else if (value == '='){
        $('#display').val(eval(currentValue));
    } else {
        $('#display').val(currentValue + value);
    }
});
