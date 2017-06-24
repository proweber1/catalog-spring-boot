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
            },
            points: {
                show: true,
                radius: 6
            },
            shadowSize: 5
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
            tickLength: 0,
            tickSize: 20000,
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
            show: true,
            position: 'ne',
            noColumns: 1,
            labelBoxBorderColor: '#FFF',
            margin: [10, 0]
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

    // Weather Carousel
    // --------------------------------------------------

    $('#weather-carousel').slick({
        slidesToShow: 3,
        slidesToScroll: 2,
        dots: true,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000
    });

    // New Orders by Device
    // --------------------------------------------------

    var datasetOrder = [{
        label: 'Laptop',
        data: 24325,
        color: '#A65EFF'
    }, {
        label: 'Tablet',
        data: 16257,
        color: '#00E09D'
    }, {
        label: 'Mobile',
        data: 10314,
        color: '#46D7EA'
    }, {
        label: 'Other',
        data: 14930,
        color: '#FF5EB9'
    }];
    var optionsOrder = {
        series: {
            pie: {
                show: true,
                stroke: {
                    width: 0
                },
                innerRadius: 0.5,
                label: {
                    show: false
                },
                highlight: {
                    opacity: 0.3
                }
            }
        },
        grid: {
            hoverable: true
        },
        tooltip: {
            show: true,
            content: '%s: %p.0%',
            defaultTheme: false
        },
        legend: {
            show: false
        }
    };
    $.plot($('#flot-order'), datasetOrder, optionsOrder);

    // New Comments
    // --------------------------------------------------

    var dataComment = [
        [0, 15],
        [1, 162],
        [2, 82],
        [3, 252],
        [4, 133],
        [5, 308],
        [6, 206],
        [7, 408]
    ];
    var datasetComment = [{
        label: 'New Comments',
        data: dataComment,
        color: '#F45562',
        lines: {
            show: true
        },
        curvedLines: {
            apply: true,
            monotonicFit: true
        }
    }, {
        data: dataComment,
        color: '#F45562',
        lines: {
            show: false
        },
        points: {
            show: true
        }
    }];
    var optionsComment = {
        series: {
            curvedLines: {
                active: true
            },
            shadowSize: 0
        },
        grid: {
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
    $.plot($('#flot-comment'), datasetComment, optionsComment);

    // New Feedbacks
    // --------------------------------------------------

    var dataFeedback = [
        [0, 15],
        [1, 162],
        [2, 82],
        [3, 252],
        [4, 133],
        [5, 308],
        [6, 206],
        [7, 408]
    ];
    var datasetFeedback = [{
        label: 'New Feedbacks',
        data: dataFeedback,
        color: '#535170',
        lines: {
            show: true
        },
        curvedLines: {
            apply: true,
            monotonicFit: true
        }
    }, {
        data: dataFeedback,
        color: '#535170',
        lines: {
            show: false
        },
        points: {
            show: true
        }
    }];
    var optionsFeedback = {
        series: {
            curvedLines: {
                active: true
            },
            shadowSize: 0
        },
        grid: {
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
    $.plot($('#flot-feedback'), datasetFeedback, optionsFeedback);

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

    // Server Load
    // --------------------------------------------------

    var dataServer = [
        [0, 567],
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
        [11, 783],
        [12, 357],
        [13, 985],
        [14, 370]
    ];
    var datasetServer = [{
        label: 'Server load',
        data: dataServer,
        color: '#FFF',
    }];
    var optionsServer = {
        series: {
            bars: {
                show: true,
                fill: 0.2,
                align: 'center',
                barWidth: 0.5,
                lineWidth: 0
            }
        },
        grid: {
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
    $.plot($('#flot-server'), datasetServer, optionsServer);

    // Current Website Visitors
    // --------------------------------------------------

    var dataCurrentVisitor = [
        [0, 764],
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
        [11, 854],
        [12, 580],
        [13, 876],
        [14, 1190]
    ];
    var datasetCurrentVisitor = [{
        label: 'Current Website Visitors',
        data: dataCurrentVisitor,
        color: '#FFF',
        lines: {
            show: true,
            fill: 0.2,
            lineWidth: 0
        }
    }];
    var optionsCurrentVisitor = {
        series: {
            curvedLines: {
                apply: true,
                monotonicFit: true,
                active: true
            },
            shadowSize: 0
        },
        grid: {
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
    $.plot($('#flot-current-visitor'), datasetCurrentVisitor, optionsCurrentVisitor);

    $('<div class=\'flotTip\'></div>').appendTo('body').css({
        'position': 'absolute',
        'display': 'none'
    });

});