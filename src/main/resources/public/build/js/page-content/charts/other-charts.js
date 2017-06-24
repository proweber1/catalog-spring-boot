$(document).ready(function() {

    // Easy Pie Chart
    // --------------------------------------------------

    $('#esp-1').easyPieChart({
        barColor: '#5D67ED',
        trackColor: '#E6E6E6',
        scaleColor: false,
        scaleLength: 0,
        lineCap: 'round',
        lineWidth: 10,
        size: 140
    });

    $('#esp-2').easyPieChart({
        barColor: '#5D67ED',
        trackColor: '#E6E6E6',
        scaleColor: false,
        scaleLength: 0,
        lineCap: 'round',
        lineWidth: 10,
        size: 140,
        onStep: function(from, to, percent) {
            $(this.el).find('.percent').text(Math.round(percent));
        }
    });

    $('#esp-3').easyPieChart({
        barColor: '#5D67ED',
        trackColor: '#E6E6E6',
        scaleColor: '#5D67ED',
        scaleLength: 10,
        lineCap: 'round',
        lineWidth: 10,
        size: 140
    });

    // Sparkline Charts
    // --------------------------------------------------

    drawMouseSpeedDemo();

    $('#sp-line').sparkline([8, 4, 0, 0, 0, 0, 1, 4, 4, 10, 10, 10, 10, 0, 0, 0, 4, 6, 5, 9, 10], {
        type: 'line',
        width: '200',
        height: '200',
        lineColor: '#5D67ED',
        fillColor: 'rgba(93, 103, 237, 0.2)',
        lineWidth: '2',
        spotColor: '#5D67ED',
        minSpotColor: '#E5343D',
        maxSpotColor: '#17A88B',
        highlightLineColor: '#FFB61E',
        highlightSpotColor: '#FFB61E',
        spotRadius: 3
    });

    $('#sp-bar').sparkline([10, 8, 9, 3, 5, 8], {
        type: 'bar',
        height: '200',
        barWidth: '30',
        barSpacing: 3,
        barColor: '#5D67ED'
    });

    $('#sp-negative').sparkline([-3, 1, 2, 0, 3, -1], {
        type: 'bar',
        height: '200',
        barWidth: '30',
        barSpacing: 3,
        barColor: '#5D67ED',
        negBarColor: '#E6E6E6'
    });

    $('#sp-stacked-bar').sparkline([
        [0, 2],
        [2, 4],
        [4, 2],
        [4, 1],
        [3, 2],
        [1, 3]
    ], {
        type: 'bar',
        height: '200',
        barWidth: '30',
        barSpacing: 3,
        stackedBarColor: ['#5D67ED', '#535170']
    });

    $('#sp-composite-1').sparkline([8, 4, 0, 0, 0, 0, 1, 4, 4, 10, 10, 10, 10, 0, 0, 0, 4, 6, 5, 9, 10], {
        type: 'line',
        width: '200',
        height: '200',
        lineColor: '#5D67ED',
        fillColor: false,
        lineWidth: '2',
        spotColor: '#5D67ED',
        minSpotColor: '#E5343D',
        maxSpotColor: '#17A88B',
        highlightLineColor: '#FFB61E',
        highlightSpotColor: '#FFB61E',
        spotRadius: 3,
        changeRangeMin: 0,
        chartRangeMax: 10
    });

    $('#sp-composite-1').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
        type: 'line',
        composite: true,
        width: '200',
        height: '200',
        lineColor: '#5D67ED',
        fillColor: false,
        lineWidth: '2',
        spotColor: '#5D67ED',
        minSpotColor: '#E5343D',
        maxSpotColor: '#17A88B',
        highlightLineColor: '#FFB61E',
        highlightSpotColor: '#FFB61E',
        spotRadius: 3,
        changeRangeMin: 0,
        chartRangeMax: 10
    });

    $('#sp-composite-2').sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4], {
        type: 'bar',
        height: '200',
        barWidth: '30',
        barSpacing: 3,
        barColor: 'rgba(6, 103, 214, 0.2)'
    });

    $('#sp-composite-2').sparkline([4, 1, 5, 7, 9, 9, 8, 7, 6, 6, 4, 7, 8, 4, 3, 2, 2, 5, 6, 7], {
        type: 'line',
        composite: true,
        width: '200',
        height: '200',
        lineColor: '#5D67ED',
        fillColor: false,
        lineWidth: '2',
        spotColor: '#5D67ED',
        minSpotColor: '#E5343D',
        maxSpotColor: '#17A88B',
        highlightLineColor: '#FFB61E',
        highlightSpotColor: '#FFB61E',
        spotRadius: 3
    });

    $('#sp-discrete-1').sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4, 4, 5, 6, 7, 6, 6, 2, 4, 5], {
        type: 'discrete',
        height: '200',
        width: '200',
        lineColor: '#5D67ED'
    });

    $('#sp-discrete-2').sparkline([4, 6, 7, 7, 4, 3, 2, 1, 4], {
        type: 'discrete',
        height: '200',
        width: '200',
        lineColor: '#5D67ED',
        thresholdColor: '#535170',
        thresholdValue: 4
    });

    $('#sp-tristate').sparkline([1, 1, 0, 1, -1, -1, 1, -1, 0, 0, 1, 1], {
        type: 'tristate',
        height: '200',
        barWidth: '15',
        barSpacing: 3,
        posBarColor: '#5D67ED',
        negBarColor: '#535170',
        zeroBarColor: '#E6E6E6'
    });

    $('#sp-box').sparkline([4, 27, 34, 52, 54, 59, 61, 68, 78, 82, 85, 87, 91, 93, 100], {
        type: 'box',
        height: '50',
        width: '200',
        boxLineColor: '#5D67ED',
        boxFillColor: 'rgba(93, 103, 237, 0.2)',
        whiskerColor: '#5D67ED',
        medianColor: '#5D67ED'
    });

    $('#sp-pie-1').sparkline([20, 50, 80], {
        type: 'pie',
        height: '200',
        width: '200',
        sliceColors: ['#E6E6E6', '#535170', '#5D67ED']
    });

    $('#sp-pie-2').sparkline([20, 50, 80], {
        type: 'pie',
        height: '200',
        width: '200',
        sliceColors: ['#E6E6E6', '#535170', '#5D67ED'],
        borderWidth: 5,
        borderColor: 'rgba(52, 152, 219, 0.5)'
    });

    $('#sp-bullet-1').sparkline([10, 12, 12, 9, 7], {
        type: 'bullet',
        height: '50',
        width: '200',
        targetColor: '#5D67ED',
        performanceColor: '#535170',
        rangeColors: ['#E6E6E6', '#bdc3c7', '#95a5a6']
    });

    $('#sp-bullet-2').sparkline([10, 12, 14, 9, 7], {
        type: 'bullet',
        height: '50',
        width: '200',
        targetColor: '#5D67ED',
        performanceColor: '#535170',
        rangeColors: ['#E6E6E6', '#bdc3c7', '#95a5a6']
    });
});

function drawMouseSpeedDemo() {
    var mrefreshinterval = 500;
    var lastmousex = -1;
    var lastmousey = -1;
    var lastmousetime;
    var mousetravel = 0;
    var mpoints = [];
    var mpoints_max = 30;
    $('html').mousemove(function(e) {
        var mousex = e.pageX;
        var mousey = e.pageY;
        if (lastmousex > -1) {
            mousetravel += Math.max(Math.abs(mousex - lastmousex), Math.abs(mousey - lastmousey));
        }
        lastmousex = mousex;
        lastmousey = mousey;
    });
    var mdraw = function() {
        var md = new Date();
        var timenow = md.getTime();
        if (lastmousetime && lastmousetime != timenow) {
            var pps = Math.round(mousetravel / (timenow - lastmousetime) * 1000);
            mpoints.push(pps);
            if (mpoints.length > mpoints_max) {
                mpoints.splice(0, 1);
            }
            mousetravel = 0;
            $('#sp-live').sparkline(mpoints, {
                tooltipSuffix: ' pixels per second',
                type: 'line',
                width: '200',
                height: '200',
                chartRangeMax: 50,
                lineColor: '#5D67ED',
                fillColor: 'rgba(93, 103, 237, 0.2)',
                lineWidth: '2',
                spotColor: '#5D67ED',
                minSpotColor: '#E5343D',
                maxSpotColor: '#17A88B',
                highlightLineColor: '#FFB61E',
                highlightSpotColor: '#FFB61E',
                spotRadius: 3
            });
        }
        lastmousetime = timenow;
        setTimeout(mdraw, mrefreshinterval);
    };
    setTimeout(mdraw, mrefreshinterval);
}