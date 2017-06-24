$(document).ready(function() {

    // Line
    // --------------------------------------------------

    new Chart(document.getElementById('line'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Chrome',
                data: [650, 110, 417, 495, 887, 564, 258],
                lineTension: 0,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 2,
                borderColor: 'rgba(0, 224, 157, 1)',
                pointBorderColor: 'rgba(0, 224, 157, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(0, 224, 157, 1)'
            }, {
                label: 'Firefox',
                data: [150, 502, 220, 821, 233, 408, 364],
                lineTension: 0,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 2,
                borderColor: 'rgba(93, 103, 237, 1)',
                pointBorderColor: 'rgba(93, 103, 237, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(93, 103, 237, 1)'
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    },
                }]
            },
            animation: {
                duration: 600
            },
            responsive: true
        }
    });

    // Stacked Line
    // --------------------------------------------------

    new Chart(document.getElementById('stacked-line'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Chrome',
                data: [650, 110, 417, 495, 887, 564, 258],
                lineTension: 0,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 2,
                borderColor: 'rgba(0, 224, 157, 1)',
                pointBorderColor: 'rgba(0, 224, 157, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(0, 224, 157, 1)'
            }, {
                label: 'Firefox',
                data: [150, 502, 220, 821, 233, 408, 364],
                lineTension: 0,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 2,
                borderColor: 'rgba(93, 103, 237, 1)',
                pointBorderColor: 'rgba(93, 103, 237, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(93, 103, 237, 1)'
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    }
                }],
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    },
                }]
            },
            animation: {
                duration: 600
            },
            responsive: true
        }
    });

    // Stepped Line
    // --------------------------------------------------

    new Chart(document.getElementById('stepped-line'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Chrome',
                data: [650, 110, 417, 495, 887, 564, 258],
                lineTension: 0,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 2,
                borderColor: 'rgba(0, 224, 157, 1)',
                pointBorderColor: 'rgba(0, 224, 157, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(0, 224, 157, 1)',
                steppedLine: true
            }, {
                label: 'Firefox',
                data: [150, 502, 220, 821, 233, 408, 364],
                lineTension: 0,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 2,
                borderColor: 'rgba(93, 103, 237, 1)',
                pointBorderColor: 'rgba(93, 103, 237, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(93, 103, 237, 1)',
                steppedLine: true
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    },
                }]
            },
            animation: {
                duration: 600
            },
            responsive: true
        }
    });

    // Stacked Step Line
    // --------------------------------------------------

    new Chart(document.getElementById('stacked-step-line'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Chrome',
                data: [650, 110, 417, 495, 887, 564, 258],
                lineTension: 0,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 2,
                borderColor: 'rgba(0, 224, 157, 1)',
                pointBorderColor: 'rgba(0, 224, 157, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(0, 224, 157, 1)',
                steppedLine: true
            }, {
                label: 'Firefox',
                data: [150, 502, 220, 821, 233, 408, 364],
                lineTension: 0,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 2,
                borderColor: 'rgba(93, 103, 237, 1)',
                pointBorderColor: 'rgba(93, 103, 237, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(93, 103, 237, 1)',
                steppedLine: true
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    }
                }],
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    },
                }]
            },
            animation: {
                duration: 600
            },
            responsive: true
        }
    });

    // Area
    // --------------------------------------------------

    new Chart(document.getElementById('area'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Chrome',
                data: [650, 110, 417, 495, 887, 564, 258],
                backgroundColor: 'rgba(0, 224, 157, 0.2)',
                borderWidth: 2,
                borderColor: 'rgba(0, 224, 157, 1)',
                pointBorderColor: 'rgba(0, 224, 157, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(0, 224, 157, 1)'
            }, {
                label: 'Firefox',
                data: [150, 502, 220, 821, 233, 408, 364],
                backgroundColor: 'rgba(93, 103, 237, 0.2)',
                borderWidth: 2,
                borderColor: 'rgba(93, 103, 237, 1)',
                pointBorderColor: 'rgba(93, 103, 237, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(93, 103, 237, 1)'
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    },
                }]
            },
            animation: {
                duration: 600
            },
            responsive: true
        }
    });

    // Stacked Area
    // --------------------------------------------------

    new Chart(document.getElementById('stacked-area'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Chrome',
                data: [650, 110, 417, 495, 887, 564, 258],
                backgroundColor: 'rgba(0, 224, 157, 0.2)',
                borderWidth: 2,
                borderColor: 'rgba(0, 224, 157, 1)',
                pointBorderColor: 'rgba(0, 224, 157, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(0, 224, 157, 1)'
            }, {
                label: 'Firefox',
                data: [150, 502, 220, 821, 233, 408, 364],
                backgroundColor: 'rgba(93, 103, 237, 0.2)',
                borderWidth: 2,
                borderColor: 'rgba(93, 103, 237, 1)',
                pointBorderColor: 'rgba(93, 103, 237, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(93, 103, 237, 1)'
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    }
                }],
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    },
                }]
            },
            animation: {
                duration: 600
            },
            responsive: true
        }
    });

    // Stepped Area
    // --------------------------------------------------

    new Chart(document.getElementById('stepped-area'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Chrome',
                data: [650, 110, 417, 495, 887, 564, 258],
                backgroundColor: 'rgba(0, 224, 157, 0.2)',
                borderWidth: 2,
                borderColor: 'rgba(0, 224, 157, 1)',
                pointBorderColor: 'rgba(0, 224, 157, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(0, 224, 157, 1)',
                steppedLine: true
            }, {
                label: 'Firefox',
                data: [150, 502, 220, 821, 233, 408, 364],
                backgroundColor: 'rgba(93, 103, 237, 0.2)',
                borderWidth: 2,
                borderColor: 'rgba(93, 103, 237, 1)',
                pointBorderColor: 'rgba(93, 103, 237, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(93, 103, 237, 1)',
                steppedLine: true
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    },
                }]
            },
            animation: {
                duration: 600
            },
            responsive: true
        }
    });

    // Stacked Step Area
    // --------------------------------------------------

    new Chart(document.getElementById('stacked-step-area'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Chrome',
                data: [650, 110, 417, 495, 887, 564, 258],
                backgroundColor: 'rgba(0, 224, 157, 0.2)',
                borderWidth: 2,
                borderColor: 'rgba(0, 224, 157, 1)',
                pointBorderColor: 'rgba(0, 224, 157, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(0, 224, 157, 1)',
                steppedLine: true
            }, {
                label: 'Firefox',
                data: [150, 502, 220, 821, 233, 408, 364],
                backgroundColor: 'rgba(93, 103, 237, 0.2)',
                borderWidth: 2,
                borderColor: 'rgba(93, 103, 237, 1)',
                pointBorderColor: 'rgba(93, 103, 237, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(93, 103, 237, 1)',
                steppedLine: true
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    }
                }],
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    },
                }]
            },
            animation: {
                duration: 600
            },
            responsive: true
        }
    });

    // Bar
    // --------------------------------------------------

    new Chart(document.getElementById('bar'), {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Chrome',
                data: [650, 110, 417, 495, 887, 564, 258],
                backgroundColor: 'rgba(0, 224, 157, 0.2)',
                borderWidth: 2,
                borderColor: 'rgba(0, 224, 157, 1)',
                hoverBackgroundColor: 'rgba(0, 224, 157, 1)'
            }, {
                label: 'Firefox',
                data: [150, 502, 220, 821, 233, 408, 364],
                backgroundColor: 'rgba(93, 103, 237, 0.2)',
                borderWidth: 2,
                borderColor: 'rgba(93, 103, 237, 1)',
                hoverBackgroundColor: 'rgba(93, 103, 237, 1)'
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    },
                }]
            },
            animation: {
                duration: 600
            },
            responsive: true
        }
    });

    // Stacked Bar
    // --------------------------------------------------

    new Chart(document.getElementById('stacked-bar'), {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Chrome',
                data: [650, 110, 417, 495, 887, 564, 258],
                backgroundColor: 'rgba(0, 224, 157, 0.2)',
                borderWidth: 2,
                borderColor: 'rgba(0, 224, 157, 1)',
                hoverBackgroundColor: 'rgba(0, 224, 157, 1)'
            }, {
                label: 'Firefox',
                data: [150, 502, 220, 821, 233, 408, 364],
                backgroundColor: 'rgba(93, 103, 237, 0.2)',
                borderWidth: 2,
                borderColor: 'rgba(93, 103, 237, 1)',
                hoverBackgroundColor: 'rgba(93, 103, 237, 1)'
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    }
                }],
                yAxes: [{
                    stacked: true,
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    },
                }]
            },
            animation: {
                duration: 600
            },
            responsive: true
        }
    });

    // Horizontal Bar
    // --------------------------------------------------

    new Chart(document.getElementById('horizontal-bar'), {
        type: 'horizontalBar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Chrome',
                data: [650, 110, 417, 495, 887, 564, 258],
                backgroundColor: 'rgba(0, 224, 157, 0.2)',
                borderWidth: 2,
                borderColor: 'rgba(0, 224, 157, 1)',
                hoverBackgroundColor: 'rgba(0, 224, 157, 1)'
            }, {
                label: 'Firefox',
                data: [150, 502, 220, 821, 233, 408, 364],
                backgroundColor: 'rgba(93, 103, 237, 0.2)',
                borderWidth: 2,
                borderColor: 'rgba(93, 103, 237, 1)',
                hoverBackgroundColor: 'rgba(93, 103, 237, 1)'
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    },
                }]
            },
            animation: {
                duration: 600
            },
            responsive: true
        }
    });

    // Horizontal Stacked Bar
    // --------------------------------------------------

    new Chart(document.getElementById('horizontal-stacked-bar'), {
        type: 'horizontalBar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
            datasets: [{
                label: 'Chrome',
                data: [650, 110, 417, 495, 887, 564, 258],
                backgroundColor: 'rgba(0, 224, 157, 0.2)',
                borderWidth: 2,
                borderColor: 'rgba(0, 224, 157, 1)',
                hoverBackgroundColor: 'rgba(0, 224, 157, 1)'
            }, {
                label: 'Firefox',
                data: [150, 502, 220, 821, 233, 408, 364],
                backgroundColor: 'rgba(93, 103, 237, 0.2)',
                borderWidth: 2,
                borderColor: 'rgba(93, 103, 237, 1)',
                hoverBackgroundColor: 'rgba(93, 103, 237, 1)'
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    stacked: true,
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    },
                }]
            },
            animation: {
                duration: 600
            },
            responsive: true
        }
    });

    // Radar Line
    // --------------------------------------------------

    new Chart(document.getElementById('radar-line'), {
        type: 'radar',
        data: {
            labels: ['Google', 'Apple', 'Samsung', 'Sony', 'HTC', 'LG', 'Other'],
            datasets: [{
                label: '2017',
                data: [650, 110, 417, 495, 887, 564, 258],
                lineTension: 0,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 2,
                borderColor: 'rgba(0, 224, 157, 1)',
                pointBorderColor: 'rgba(0, 224, 157, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(0, 224, 157, 1)'
            }, {
                label: '2016',
                data: [150, 502, 220, 821, 233, 408, 364],
                lineTension: 0,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 2,
                borderColor: 'rgba(93, 103, 237, 1)',
                pointBorderColor: 'rgba(93, 103, 237, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(93, 103, 237, 1)'
            }]
        },
        options: {
            scale: {
                ticks: {
                    fontFamily: 'Source Sans Pro',
                    fontColor: '#9A9A9A',
                    fontSize: 12
                }
            },
            animation: {
                duration: 600
            },
            responsive: true
        }
    });

    // Smooth Radar Line
    // --------------------------------------------------

    new Chart(document.getElementById('smooth-radar-line'), {
        type: 'radar',
        data: {
            labels: ['Google', 'Apple', 'Samsung', 'Sony', 'HTC', 'LG', 'Other'],
            datasets: [{
                label: '2017',
                data: [650, 110, 417, 495, 887, 564, 258],
                lineTension: 0.3,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 2,
                borderColor: 'rgba(0, 224, 157, 1)',
                pointBorderColor: 'rgba(0, 224, 157, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(0, 224, 157, 1)'
            }, {
                label: '2016',
                data: [150, 502, 220, 821, 233, 408, 364],
                lineTension: 0.3,
                backgroundColor: 'rgba(0, 0, 0, 0)',
                borderWidth: 2,
                borderColor: 'rgba(93, 103, 237, 1)',
                pointBorderColor: 'rgba(93, 103, 237, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(93, 103, 237, 1)'
            }]
        },
        options: {
            scale: {
                ticks: {
                    fontFamily: 'Source Sans Pro',
                    fontColor: '#9A9A9A',
                    fontSize: 12
                }
            },
            animation: {
                duration: 600
            },
            responsive: true
        }
    });

    // Radar Area
    // --------------------------------------------------

    new Chart(document.getElementById('radar-area'), {
        type: 'radar',
        data: {
            labels: ['Google', 'Apple', 'Samsung', 'Sony', 'HTC', 'LG', 'Other'],
            datasets: [{
                label: '2017',
                data: [650, 110, 417, 495, 887, 564, 258],
                lineTension: 0,
                backgroundColor: 'rgba(0, 224, 157, 0.2)',
                borderWidth: 2,
                borderColor: 'rgba(0, 224, 157, 1)',
                pointBorderColor: 'rgba(0, 224, 157, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(0, 224, 157, 1)'
            }, {
                label: '2016',
                data: [150, 502, 220, 821, 233, 408, 364],
                lineTension: 0,
                backgroundColor: 'rgba(93, 103, 237, 0.2)',
                borderWidth: 2,
                borderColor: 'rgba(93, 103, 237, 1)',
                pointBorderColor: 'rgba(93, 103, 237, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(93, 103, 237, 1)'
            }]
        },
        options: {
            scale: {
                ticks: {
                    fontFamily: 'Source Sans Pro',
                    fontColor: '#9A9A9A',
                    fontSize: 12
                }
            },
            animation: {
                duration: 600
            },
            responsive: true
        }
    });

    // Smooth Radar Area
    // --------------------------------------------------

    new Chart(document.getElementById('smooth-radar-area'), {
        type: 'radar',
        data: {
            labels: ['Google', 'Apple', 'Samsung', 'Sony', 'HTC', 'LG', 'Other'],
            datasets: [{
                label: '2017',
                data: [650, 110, 417, 495, 887, 564, 258],
                lineTension: 0.3,
                backgroundColor: 'rgba(0, 224, 157, 0.2)',
                borderWidth: 2,
                borderColor: 'rgba(0, 224, 157, 1)',
                pointBorderColor: 'rgba(0, 224, 157, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(0, 224, 157, 1)'
            }, {
                label: '2016',
                data: [150, 502, 220, 821, 233, 408, 364],
                lineTension: 0.3,
                backgroundColor: 'rgba(93, 103, 237, 0.2)',
                borderWidth: 2,
                borderColor: 'rgba(93, 103, 237, 1)',
                pointBorderColor: 'rgba(93, 103, 237, 1)',
                pointBackgroundColor: 'rgba(255, 255, 255, 1)',
                pointBorderWidth: 2,
                pointRadius: 6,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: 'rgba(93, 103, 237, 1)'
            }]
        },
        options: {
            scale: {
                ticks: {
                    fontFamily: 'Source Sans Pro',
                    fontColor: '#9A9A9A',
                    fontSize: 12
                }
            },
            animation: {
                duration: 600
            },
            responsive: true
        }
    });

    // Polar Line
    // --------------------------------------------------

    new Chart(document.getElementById('polar-line'), {
        type: 'polarArea',
        data: {
            labels: ['Google', 'Apple', 'Samsung', 'Sony', 'LG'],
            datasets: [{
                data: [11, 16, 7, 3, 14],
                backgroundColor: ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0)'],
                borderColor: ['rgba(93, 103, 237, 1)', 'rgba(0, 224, 157, 1)', 'rgba(166, 94, 255, 1)', 'rgba(255, 145, 94, 1)', 'rgba(244, 85, 98, 1)'],
                borderWidth: 2,
                hoverBackgroundColor: ['rgba(93, 103, 237, 1)', 'rgba(0, 224, 157, 1)', 'rgba(166, 94, 255, 1)', 'rgba(255, 145, 94, 1)', 'rgba(244, 85, 98, 1)'],
                label: 'My dataset'
            }]
        },
        options: {
            scale: {
                ticks: {
                    fontFamily: 'Source Sans Pro',
                    fontColor: '#9A9A9A',
                    fontSize: 12
                }
            },
            animation: {
                duration: 600
            },
            responsive: true
        }
    });

    // Polar Area
    // --------------------------------------------------

    new Chart(document.getElementById('polar-area'), {
        type: 'polarArea',
        data: {
            labels: ['Google', 'Apple', 'Samsung', 'Sony', 'LG'],
            datasets: [{
                data: [11, 16, 7, 3, 14],
                backgroundColor: ['rgba(93, 103, 237, 0.2)', 'rgba(0, 224, 157, 0.2)', 'rgba(166, 94, 255, 0.2)', 'rgba(255, 145, 94, 0.2)', 'rgba(244, 85, 98, 0.2)'],
                borderColor: ['rgba(93, 103, 237, 1)', 'rgba(0, 224, 157, 1)', 'rgba(166, 94, 255, 1)', 'rgba(255, 145, 94, 1)', 'rgba(244, 85, 98, 1)'],
                borderWidth: 2,
                hoverBackgroundColor: ['rgba(93, 103, 237, 1)', 'rgba(0, 224, 157, 1)', 'rgba(166, 94, 255, 1)', 'rgba(255, 145, 94, 1)', 'rgba(244, 85, 98, 1)'],
                label: 'My dataset'
            }]
        },
        options: {
            scale: {
                ticks: {
                    fontFamily: 'Source Sans Pro',
                    fontColor: '#9A9A9A',
                    fontSize: 12
                }
            },
            animation: {
                duration: 600
            },
            responsive: true
        }
    });

    // Pie
    // --------------------------------------------------

    new Chart(document.getElementById('pie'), {
        type: 'pie',
        data: {
            labels: ['Google', 'Apple', 'Sony'],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: ['rgba(93, 103, 237, 1)', 'rgba(0, 224, 157, 1)', 'rgba(255, 145, 94, 1)'],
                borderColor: ['rgba(93, 103, 237, 1)', 'rgba(0, 224, 157, 1)', 'rgba(255, 145, 94, 1)'],
                borderWidth: 2,
                hoverBackgroundColor: ['rgba(93, 103, 237, 1)', 'rgba(0, 224, 157, 1)', 'rgba(255, 145, 94, 1)']
            }]
        },
    });

    // Donut
    // --------------------------------------------------

    new Chart(document.getElementById('donut'), {
        type: 'doughnut',
        data: {
            labels: ['Google', 'Apple', 'Sony'],
            datasets: [{
                data: [300, 50, 100],
                backgroundColor: ['rgba(93, 103, 237, 1)', 'rgba(0, 224, 157, 1)', 'rgba(255, 145, 94, 1)'],
                borderColor: ['rgba(93, 103, 237, 1)', 'rgba(0, 224, 157, 1)', 'rgba(255, 145, 94, 1)'],
                borderWidth: 2,
                hoverBackgroundColor: ['rgba(93, 103, 237, 1)', 'rgba(0, 224, 157, 1)', 'rgba(255, 145, 94, 1)']
            }]
        },
    });

    // Bubble
    // --------------------------------------------------

    new Chart(document.getElementById('bubble'), {
        type: 'bubble',
        data: {
            datasets: [{
                label: 'Google',
                data: [{
                    x: 20,
                    y: 30,
                    r: 35
                }],
                backgroundColor: 'rgba(93, 103, 237, 0.2)',
                borderColor: 'rgba(93, 103, 237, 1)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(93, 103, 237, 1)'
            }, {
                label: 'Apple',
                data: [{
                    x: 40,
                    y: 10,
                    r: 30
                }],
                backgroundColor: 'rgba(0, 224, 157, 0.2)',
                borderColor: 'rgba(0, 224, 157, 1)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(0, 224, 157, 1)'
            }, {
                label: 'Sony',
                data: [{
                    x: 70,
                    y: 50,
                    r: 20
                }],
                backgroundColor: 'rgba(166, 94, 255, 0.2)',
                borderColor: 'rgba(166, 94, 255, 1)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(166, 94, 255, 1)'
            }, {
                label: 'Samsung',
                data: [{
                    x: 80,
                    y: 60,
                    r: 15
                }],
                backgroundColor: 'rgba(255, 145, 94, 0.2)',
                borderColor: 'rgba(255, 145, 94, 1)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(255, 145, 94, 1)'
            }, {
                label: 'LG',
                data: [{
                    x: 90,
                    y: 20,
                    r: 10
                }],
                backgroundColor: 'rgba(244, 85, 98, 0.2)',
                borderColor: 'rgba(244, 85, 98, 1)',
                borderWidth: 2,
                hoverBackgroundColor: 'rgba(244, 85, 98, 1)'
            }]
        },
        options: {
            scales: {
                xAxes: [{
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        min: 0,
                        max: 100,
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    }
                }],
                yAxes: [{
                    gridLines: {
                        color: '#F5F5F5',
                        tickMarkLength: 15,
                        zeroLineColor: '#F5F5F5'
                    },
                    ticks: {
                        min: 0,
                        max: 100,
                        fontFamily: 'Source Sans Pro',
                        fontColor: '#9A9A9A',
                        fontSize: 12
                    },
                }]
            },
            animation: {
                duration: 600
            },
            responsive: true
        }
    });

});