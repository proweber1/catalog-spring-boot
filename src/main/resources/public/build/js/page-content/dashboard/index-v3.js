$(document).ready(function() {

    // Bootstrap Date Range Picker
    // --------------------------------------------------

    $('#daterangepicker').daterangepicker({
        ranges: {
            'Today': [moment(), moment()],
            'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
            'Last 7 Days': [moment().subtract('days', 6), moment()],
            'Last 30 Days': [moment().subtract('days', 29), moment()],
            'This Month': [moment().startOf('month'), moment().endOf('month')],
            'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
        },
        opens: 'left',
        startDate: moment().subtract(29, 'days'),
        endDate: moment(),
        buttonClasses: 'btn',
        applyClass: 'btn-success mr-1',
        cancelClass: 'btn-secondary'
    }, function(start, end, label) {
        $('#daterangepicker span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    });
    $('#daterangepicker span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));

    // Sales Analytics
    // --------------------------------------------------

    var dataStore1 = [
        [0, 693],
        [1, 593],
        [2, 600],
        [3, 720],
        [4, 670],
        [5, 602],
        [6, 554]
    ];
    var dataStore2 = [
        [0, 400],
        [1, 542],
        [2, 350],
        [3, 608],
        [4, 450],
        [5, 580],
        [6, 289]
    ];
    var dataStore3 = [
        [0, 280],
        [1, 293],
        [2, 400],
        [3, 320],
        [4, 470],
        [5, 302],
        [6, 254]
    ];
    var tickSale = [
        [0, '2010'],
        [1, '2011'],
        [2, '2012'],
        [3, '2013'],
        [4, '2014'],
        [5, '2015'],
        [6, '2016']
    ];
    var datasetSale = [{
        label: 'Store 1',
        data: dataStore1,
        color: '#535170',
        bars: {
            order: 1
        }
    }, {
        label: 'Store 2',
        data: dataStore2,
        color: '#00E09D',
        bars: {
            order: 2
        }
    }, {
        label: 'Store 3',
        data: dataStore3,
        color: '#5D67ED',
        bars: {
            order: 3
        }
    }];
    var optionsSale = {
        series: {
            bars: {
                show: true,
                fill: 1,
                align: 'center',
                barWidth: 0.03,
                lineWidth: 4
            }
        },
        grid: {
            borderWidth: 0,
            hoverable: true,
            labelMargin: 20
        },
        xaxis: {
            tickColor: '#F5F5F5',
            ticks: tickSale,
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
            content: '%s: %y sales',
            defaultTheme: false
        },
        legend: {
            show: true,
            container: $('#flot-sale-legend'),
            noColumns: 3,
            labelBoxBorderColor: '#FFF',
            margin: 0
        }
    };
    $.plot($('#flot-sale'), datasetSale, optionsSale);

    // Total Users
    // --------------------------------------------------

    var dataUser = [
        [0, 60],
        [1, 58],
        [2, 93],
        [3, 41],
        [4, 40],
        [5, 93],
        [6, 69],
        [7, 49],
        [8, 87],
        [9, 44],
        [10, 130],
        [11, 49]
    ];
    var datasetUser = [{
        label: 'Total Users',
        data: dataUser,
        color: '#46D7EA'
    }];
    var optionsUser = {
        series: {
            bars: {
                show: true,
                fill: 1,
                align: 'center',
                barWidth: 0.3,
                lineWidth: 0
            }
        },
        grid: {
            hoverable: false,
            borderWidth: 0
        },
        xaxis: {
            show: false
        },
        yaxis: {
            show: false
        },
        tooltip: {
            show: false
        },
        legend: {
            show: false
        }
    };
    $.plot($('#flot-user'), datasetUser, optionsUser);

    // Total Products
    // --------------------------------------------------

    var dataProduct = [
        [0, 1040],
        [1, 1133],
        [2, 1234],
        [3, 1448],
        [4, 1198],
        [5, 918],
        [6, 583],
        [7, 842],
        [8, 540],
        [9, 665],
        [10, 1195],
        [11, 930]
    ];
    var datasetProduct = [{
        label: 'Total Products',
        data: dataProduct,
        color: '#FF5EB9'
    }];
    var optionsProduct = {
        series: {
            bars: {
                show: true,
                fill: 1,
                align: 'center',
                barWidth: 0.3,
                lineWidth: 0
            }
        },
        grid: {
            hoverable: false,
            borderWidth: 0
        },
        xaxis: {
            show: false
        },
        yaxis: {
            show: false
        },
        tooltip: {
            show: false
        },
        legend: {
            show: false
        }
    };
    $.plot($('#flot-product'), datasetProduct, optionsProduct);

    // Total Visitors
    // --------------------------------------------------

    var dataVisitor = [
        [0, 739],
        [1, 567],
        [2, 326],
        [3, 964],
        [4, 769],
        [5, 655],
        [6, 453],
        [7, 567],
        [8, 876],
        [9, 645],
        [10, 348],
        [11, 902]
    ];
    var datasetVisitor = [{
        label: 'Total Visitors',
        data: dataVisitor,
        color: '#A65EFF'
    }];
    var optionsVisitor = {
        series: {
            bars: {
                show: true,
                fill: 1,
                align: 'center',
                barWidth: 0.3,
                lineWidth: 0
            }
        },
        grid: {
            hoverable: false,
            borderWidth: 0
        },
        xaxis: {
            show: false
        },
        yaxis: {
            show: false
        },
        tooltip: {
            show: false
        },
        legend: {
            show: false
        }
    };
    $.plot($('#flot-visitor'), datasetVisitor, optionsVisitor);

    // Total Orders
    // --------------------------------------------------

    var dataOrder = [
        [0, 580],
        [1, 174],
        [2, 467],
        [3, 829],
        [4, 489],
        [5, 360],
        [6, 380],
        [7, 907],
        [8, 549],
        [9, 765],
        [10, 479],
        [11, 830]
    ];
    var datasetOrder = [{
        label: 'Total Orders',
        data: dataOrder,
        color: '#0ED349'
    }];
    var optionsOrder = {
        series: {
            bars: {
                show: true,
                fill: 1,
                align: 'center',
                barWidth: 0.3,
                lineWidth: 0
            }
        },
        grid: {
            hoverable: false,
            borderWidth: 0
        },
        xaxis: {
            show: false
        },
        yaxis: {
            show: false
        },
        tooltip: {
            show: false
        },
        legend: {
            show: false
        }
    };
    $.plot($('#flot-order'), datasetOrder, optionsOrder);

    // Total Revenue
    // --------------------------------------------------

    var dataRevenue = [
        [0, 850708],
        [1, 1620627],
        [2, 820627],
        [3, 2021182],
        [4, 1333599],
        [5, 2587866],
        [6, 1164625]
    ];
    var datasetRevenue = [{
        label: 'Total Revenue',
        data: dataRevenue,
        color: '#FFF',
        lines: {
            show: true,
            fill: 0.2,
            lineWidth: 0
        }
    }];
    var optionsRevenue = {
        series: {
            curvedLines: {
                active: true,
                apply: true,
                monotonicFit: true
            },
            shadowSize: 0
        },
        grid: {
            hoverable: false,
            borderWidth: 0
        },
        xaxis: {
            show: false
        },
        yaxis: {
            show: false
        },
        tooltip: {
            show: false
        },
        legend: {
            show: false
        }
    };
    $.plot($('#flot-revenue'), datasetRevenue, optionsRevenue);

    // World Map
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
        backgroundColor: 'transparent',
        zoomOnScroll: false,
        zoomButtons: false,
        focusOn: {
            x: 1,
            y: 1,
            scale: 2
        },
        regionStyle: {
            initial: {
                fill: '#FFF',
                'fill-opacity': 0.2
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

    //  Latest Orders
    // --------------------------------------------------

    var table = $('#order-table').DataTable({
        lengthChange: false,
        paging: false,
        info: false,
        colReorder: true,
        language: {
            'search': '',
            'searchPlaceholder': 'Search records'
        },
        buttons: {
            buttons: [{
                extend: 'copy',
                className: 'btn-raised btn-primary'
            }, {
                extend: 'excel',
                className: 'btn-raised btn-primary'
            }, {
                extend: 'pdf',
                className: 'btn-raised btn-primary'
            }, {
                extend: 'print',
                className: 'btn-raised btn-primary'
            }]
        }
    });
    table.buttons().container().appendTo('#order-table_wrapper .col-md-6:eq(0)');

    $('<div class=\'flotTip\'></div>').appendTo('body').css({
        'position': 'absolute',
        'display': 'none'
    });

});