$(document).ready(function() {

    var $svg = $('svg').drawsvg();

    $svg.drawsvg('animate');

    setInterval(function() {
        $svg.drawsvg('animate');
    }, 5000);

});