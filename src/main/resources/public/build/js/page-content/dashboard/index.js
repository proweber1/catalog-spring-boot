$(document).ready(function() {

    // Visitors Analytics
    // --------------------------------------------------

    var dataReturningVisitor = [
        [0, 65070],
        [1, 11025],
        [2, 41701],
        [3, 49549],
        [4, 88760],
        [5, 56477],
        [6, 25801]
    ];
    var dataNewVisitor = [
        [0, 15070],
        [1, 50250],
        [2, 22062],
        [3, 82118],
        [4, 23359],
        [5, 40878],
        [6, 36462]
    ];
    var xticksVisitor = [
        [0, 'Mon'],
        [1, 'Tue'],
        [2, 'Wed'],
        [3, 'Thu'],
        [4, 'Fri'],
        [5, 'Sat'],
        [6, 'Sun']
    ];
    var datasetVisitor = [{
        label: 'Returning visitors',
        data: dataReturningVisitor,
        color: '#5D67ED'
    }, {
        label: 'New visitors',
        data: dataNewVisitor,
        color: '#00E09D'
    }];
    var optionsVisitor = {
        series: {
            lines: {
                show: true,
                fill: 0.2,
            },
            points: {
                show: true,
                radius: 6
            },
            shadowSize: 0
        },
        grid: {
            borderWidth: 0,
            hoverable: true,
            labelMargin: 20
        },
        xaxis: {
            tickColor: '#F5F5F5',
            ticks: xticksVisitor,
            font: {
                color: '#9A9A9A',
                size: 12
            }
        },
        yaxis: {
            tickColor: '#F5F5F5',
            tickSize: 50000,
            font: {
                color: '#9A9A9A',
                size: 12
            },
            tickFormatter: function(val, axis) {
                if (val > 0) {
                    return (val / 1000).toFixed(axis.tickDecimals) + 'K';
                } else {
                    return (val / 1000).toFixed(axis.tickDecimals);
                }
            }
        },
        tooltip: {
            show: false
        },
        legend: {
            show: false
        }
    };
    $.plot($('#flot-visitor'), datasetVisitor, optionsVisitor);
    $('#flot-visitor').bind('plothover', function(event, pos, item) {
        if (item) {
            $('.flotTip').text(item.series.label + ': ' + item.datapoint[1].toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')).css({
                top: item.pageY + 20,
                left: item.pageX - 50
            }).show();
        } else {
            $('.flotTip').hide();
        }
    });

    // Referral Sources
    // --------------------------------------------------

    var dataSource = [{
        label: 'Google +',
        data: [
            [0, 438]
        ],
        color: '#F45562'
    }, {
        label: 'Facebook',
        data: [
            [1, 342]
        ],
        color: '#5D67ED'
    }, {
        label: 'Twitter',
        data: [
            [2, 849]
        ],
        color: '#46D7EA'
    }, {
        label: 'WhatsApp',
        data: [
            [3, 594]
        ],
        color: '#00E09D'
    }];
    var tickSource = [
        [0, 'Google +'],
        [1, 'Facebook'],
        [2, 'Twitter'],
        [3, 'WhatsApp']
    ];
    var optionsSource = {
        series: {
            bars: {
                show: true,
                fill: 1,
                align: 'center',
                barWidth: 0.5,
                lineWidth: 0
            }
        },
        grid: {
            borderWidth: 0,
            hoverable: true,
            labelMargin: 20
        },
        xaxis: {
            tickColor: '#F5F5F5',
            ticks: tickSource,
            font: {
                color: '#9A9A9A',
                size: 12
            }
        },
        yaxis: {
            tickColor: '#F5F5F5',
            tickSize: 200,
            font: {
                color: '#9A9A9A',
                size: 12
            }
        },
        tooltip: {
            show: true,
            content: '%s: %y',
            defaultTheme: false
        },
        legend: {
            show: false
        }
    };
    $.plot($('#flot-source'), dataSource, optionsSource);

    // Total Revenue
    // --------------------------------------------------

    var dataRevenue = [
        [0, 650708],
        [1, 2320030],
        [2, 1402507],
        [3, 2887603],
        [4, 1946237],
        [5, 3646237],
        [6, 2646237],
        [7, 4646237]
    ];
    var xticksVisitor = [
        [0, 'Jan'],
        [1, 'Feb'],
        [2, 'Mar'],
        [3, 'Apr'],
        [4, 'May'],
        [5, 'Jun'],
        [6, 'Jul'],
        [7, 'Aug']
    ];
    var datasetRevenue = [{
        label: 'Revenue',
        data: dataRevenue,
        color: '#535170',
        lines: {
            show: true,
            fill: 0.2,
            lineWidth: 2
        },
        curvedLines: {
            apply: true,
            monotonicFit: true
        }
    }, {
        data: dataRevenue,
        color: '#535170',
        lines: {
            show: true,
            lineWidth: 0
        }
    }];
    var optionsRevenue = {
        series: {
            curvedLines: {
                active: true
            },
            shadowSize: 0
        },
        grid: {
            borderWidth: 0,
            hoverable: true,
            labelMargin: 15
        },
        xaxis: {
            ticks: xticksVisitor,
            tickColor: '#F5F5F5',
            font: {
                color: '#9A9A9A',
                size: 12
            }
        },
        yaxis: {
            tickColor: '#F5F5F5',
            tickSize: 1000000,
            font: {
                color: '#9A9A9A',
                size: 12
            },
            tickFormatter: function(val, axis) {
                if (val > 0) {
                    return (val / 1000000).toFixed(axis.tickDecimals) + ' M';
                } else {
                    return (val / 1000000).toFixed(axis.tickDecimals);
                }
            }
        },
        tooltip: {
            show: false
        },
        legend: {
            show: false
        }
    };
    $.plot($('#flot-revenue'), datasetRevenue, optionsRevenue);
    $('#flot-revenue').bind('plothover', function(event, pos, item) {
        if (item) {
            $('.flotTip').text('Revenue: $' + item.datapoint[1].toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')).css({
                top: item.pageY + 15,
                left: item.pageX + 10
            }).show();
        } else {
            $('.flotTip').hide();
        }
    });

    // Latest Projects
    // --------------------------------------------------

    $('#esp-alpha').easyPieChart({
        barColor: '#5D67ED',
        trackColor: '#E6E6E6',
        scaleColor: false,
        scaleLength: 0,
        lineCap: 'round',
        lineWidth: 8,
        size: 200,
        animate: {
            duration: 2000,
            enabled: true
        }
    });

    $('#esp-omega').easyPieChart({
        barColor: '#00E09D',
        trackColor: '#E6E6E6',
        scaleColor: false,
        scaleLength: 0,
        lineCap: 'round',
        lineWidth: 8,
        size: 150,
        animate: {
            duration: 2000,
            enabled: true
        }
    });

    $('#esp-sigma').easyPieChart({
        barColor: '#A65EFF',
        trackColor: '#E6E6E6',
        scaleColor: false,
        scaleLength: 0,
        lineCap: 'round',
        lineWidth: 8,
        size: 100,
        animate: {
            duration: 2000,
            enabled: true
        }
    });

    // Global Analytics
    // --------------------------------------------------

    var dataEarnings = {
        'AU': 12190,
        'AR': 3510,
        'BR': 2023,
        'CA': 1563,
        'CN': 5745,
        'FR': 2555,
        'DE': 3305,
        'JP': 5390,
        'RU': 2476,
        'US': 14624
    };
    var dataMapMarker = [{
        latLng: [41.90, 12.45],
        name: 'Vatican City',
        earnings: '500'
    }, {
        latLng: [43.73, 7.41],
        name: 'Monaco',
        earnings: '32'
    }, {
        latLng: [-0.52, 166.93],
        name: 'Nauru',
        earnings: '432'
    }, {
        latLng: [-8.51, 179.21],
        name: 'Tuvalu',
        earnings: '321'
    }, {
        latLng: [43.93, 12.46],
        name: 'San Marino',
        earnings: '510'
    }, {
        latLng: [47.14, 9.52],
        name: 'Liechtenstein',
        earnings: '130'
    }, {
        latLng: [7.11, 171.06],
        name: 'Marshall Islands',
        earnings: '234'
    }, {
        latLng: [17.3, -62.73],
        name: 'Saint Kitts and Nevis',
        earnings: '329'
    }, {
        latLng: [3.2, 73.22],
        name: 'Maldives',
        earnings: '120'
    }, {
        latLng: [35.88, 14.5],
        name: 'Malta',
        earnings: '435'
    }, {
        latLng: [12.05, -61.75],
        name: 'Grenada',
        earnings: '321'
    }, {
        latLng: [13.16, -61.23],
        name: 'Saint Vincent and the Grenadines',
        earnings: '110'
    }, {
        latLng: [13.16, -59.55],
        name: 'Barbados',
        earnings: '90'
    }, {
        latLng: [17.11, -61.85],
        name: 'Antigua and Barbuda',
        earnings: '230'
    }, {
        latLng: [-4.61, 55.45],
        name: 'Seychelles',
        earnings: '200'
    }, {
        latLng: [7.35, 134.46],
        name: 'Palau',
        earnings: '320'
    }, {
        latLng: [42.5, 1.51],
        name: 'Andorra',
        earnings: '123'
    }, {
        latLng: [14.01, -60.98],
        name: 'Saint Lucia',
        earnings: '500'
    }, {
        latLng: [6.91, 158.18],
        name: 'Federated States of Micronesia',
        earnings: '310'
    }, {
        latLng: [1.3, 103.8],
        name: 'Singapore',
        earnings: '23'
    }, {
        latLng: [1.46, 173.03],
        name: 'Kiribati',
        earnings: '58'
    }, {
        latLng: [-21.13, -175.2],
        name: 'Tonga',
        earnings: '90'
    }, {
        latLng: [15.3, -61.38],
        name: 'Dominica',
        earnings: '239'
    }, {
        latLng: [-20.2, 57.5],
        name: 'Mauritius',
        earnings: '100'
    }, {
        latLng: [26.02, 50.55],
        name: 'Bahrain',
        earnings: '225'
    }, {
        latLng: [0.33, 6.73],
        name: 'São Tomé and Príncipe',
        earnings: '150'
    }];
    $('#world-map').vectorMap({
        map: 'world_mill',
        backgroundColor: 'rgba(0,0,0,0)',
        zoomOnScroll: false,
        regionStyle: {
            initial: {
                fill: '#535170',
                "fill-opacity": 0.2,
                stroke: '#535170',
                'stroke-width': 1
            }
        },
        markers: dataMapMarker,
        markerStyle: {
            initial: {
                fill: '#F45562',
                stroke: '#F45562',
                'stroke-width': 10,
                'stroke-opacity': 0.2,
                r: 5
            },
            hover: {
                stroke: '#F45562',
                'stroke-width': 10,
                'stroke-opacity': 0.5,
                cursor: 'pointer'
            }
        },
        onRegionTipShow: function(e, el, code) {
            if (dataEarnings.hasOwnProperty(code)) {
                el.html(el.html() + ': $' + dataEarnings[code].toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
            }
        },
        onMarkerTipShow: function(e, el, code) {
            el.html(el.html() + ': $' + dataMapMarker[code].earnings);
        }
    });

    $('<div class=\'flotTip\'></div>').appendTo('body').css({
        'position': 'absolute',
        'display': 'none'
    });

});