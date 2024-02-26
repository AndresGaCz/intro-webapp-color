$(document).ready(function(){
    updateColor();

    // Actualizar el color cuando se mueven los controles deslizantes
    $('input[type="range"]').change(function(){
        updateColor();
    });

    // Actualizar el color cuando se cambian los valores de entrada
    $('input[type="number"]').change(function(){
        updateColor();
    });

    // Actualizar el color cuando se selecciona un color en el input de tipo "color"
    $('#colorPicker').change(function(){
        var color = $(this).val();

        // Obtener los valores RGB del color seleccionado
        var red = parseInt(color.substring(1, 3), 16);
        var green = parseInt(color.substring(3, 5), 16);
        var blue = parseInt(color.substring(5, 7), 16);

        // Actualizar los campos de entrada de rojo, verde y azul
        $('#redInput').val(red);
        $('#greenInput').val(green);
        $('#blueInput').val(blue);

        updateColor();
    });

    function updateColor() {
        var red = parseInt($('#redInput').val());
        var green = parseInt($('#greenInput').val());
        var blue = parseInt($('#blueInput').val());

        // Asegurarse de que los valores estén dentro del rango
        red = Math.min(255, Math.max(0, red));
        green = Math.min(255, Math.max(0, green));
        blue = Math.min(255, Math.max(0, blue));

        // Actualizar los controles deslizantes
        $('#redRange').val(red);
        $('#greenRange').val(green);
        $('#blueRange').val(blue);

        var rgbColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
        var hexColor = rgbToHex(red, green, blue);

        $('#colorDisplay').css('background-color', rgbColor);
        $('#hexCode').val(hexColor);
    }

    // Convertir RGB a Hexadecimal
    function rgbToHex(r, g, b) {
        return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
    }

    function componentToHex(c) {
        var hex = c.toString(16);
        return hex.length == 1 ? '0' + hex : hex;
    }
});
