$(document).ready(function() {

    // Modal Types
    // ----------------------------------------------

    $('#sweet-success').on('click', function() {
        swal({
            title: 'Success!',
            type: 'success',
            confirmButtonClass: 'btn btn-lg btn-success',
            buttonsStyling: false
        })
    });

    $('#sweet-error').on('click', function() {
        swal({
            title: 'Error!',
            type: 'error',
            confirmButtonClass: 'btn btn-lg btn-danger',
            buttonsStyling: false
        })
    });

    $('#sweet-warning').on('click', function() {
        swal({
            title: 'Warning!',
            type: 'warning',
            confirmButtonClass: 'btn btn-lg btn-warning',
            buttonsStyling: false
        })
    });

    $('#sweet-info').on('click', function() {
        swal({
            title: 'Info!',
            type: 'info',
            confirmButtonClass: 'btn btn-lg btn-info',
            buttonsStyling: false
        })
    });

    $('#sweet-question').on('click', function() {
        swal({
            title: 'Question!',
            type: 'question',
            confirmButtonClass: 'btn btn-lg btn-purple',
            buttonsStyling: false
        })
    });

    // Input Types
    // ----------------------------------------------

    $('#sweet-text').on('click', function() {
        swal({
            title: 'Input something',
            input: 'text',
            showCancelButton: true,
            inputValidator: function(value) {
                return new Promise(function(resolve, reject) {
                    if (value) {
                        resolve()
                    } else {
                        reject('You need to write something!')
                    }
                })
            }
        }).then(function(result) {
            swal({
                type: 'success',
                html: 'You entered: ' + result
            })
        })
    });


    $('#sweet-email').on('click', function() {
        swal({
            title: 'Input email address',
            input: 'email'
        }).then(function(email) {
            swal({
                type: 'success',
                html: 'Entered email: ' + email
            })
        })
    });

    $('#sweet-password').on('click', function() {
        swal({
            title: 'Enter your password',
            input: 'password',
            inputAttributes: {
                'maxlength': 10,
                'autocapitalize': 'off',
                'autocorrect': 'off'
            }
        }).then(function(password) {
            if (password) {
                swal({
                    type: 'success',
                    html: 'Entered password: ' + password
                })
            }
        })
    });

    $('#sweet-textarea').on('click', function() {
        swal({
            input: 'textarea',
            showCancelButton: true
        }).then(function(text) {
            if (text) {
                swal(text)
            }
        })
    });

    $('#sweet-select').on('click', function() {
        swal({
            title: 'Select Ukraine',
            input: 'select',
            inputOptions: {
                'SRB': 'Serbia',
                'UKR': 'Ukraine',
                'HRV': 'Croatia'
            },
            inputPlaceholder: 'Select country',
            showCancelButton: true,
            inputValidator: function(value) {
                return new Promise(function(resolve, reject) {
                    if (value === 'UKR') {
                        resolve()
                    } else {
                        reject('You need to select Ukraine :)')
                    }
                })
            }
        }).then(function(result) {
            swal({
                type: 'success',
                html: 'You selected: ' + result
            })
        })
    });

    $('#sweet-radio').on('click', function() {
        var inputOptions = new Promise(function(resolve) {
            setTimeout(function() {
                resolve({
                    '#ff0000': 'Red',
                    '#00ff00': 'Green',
                    '#0000ff': 'Blue'
                })
            }, 2000)
        })

        swal({
            title: 'Select color',
            input: 'radio',
            inputOptions: inputOptions,
            inputValidator: function(result) {
                return new Promise(function(resolve, reject) {
                    if (result) {
                        resolve()
                    } else {
                        reject('You need to select something!')
                    }
                })
            }
        }).then(function(result) {
            swal({
                type: 'success',
                html: 'You selected: ' + result
            })
        })
    });

    $('#sweet-checkbox').on('click', function() {
        swal({
            title: 'Terms and conditions',
            input: 'checkbox',
            inputValue: 1,
            inputPlaceholder: 'I agree with the terms and conditions',
            confirmButtonText: 'Continue',
            inputValidator: function(result) {
                return new Promise(function(resolve, reject) {
                    if (result) {
                        resolve()
                    } else {
                        reject('You need to agree with T&C')
                    }
                })
            }
        }).then(function(result) {
            swal({
                type: 'success',
                text: 'You agreed with T&C :)'
            })
        })
    });

    $('#sweet-file').on('click', function() {
        swal({
            title: 'Select image',
            input: 'file',
            inputAttributes: {
                accept: 'image/*'
            }
        }).then(function(file) {
            var reader = new FileReader
            reader.onload = function(e) {
                swal({
                    imageUrl: e.target.result
                })
            }
            reader.readAsDataURL(file)
        })
    });

    $('#sweet-range').on('click', function() {
        swal({
            title: 'How old are you?',
            type: 'question',
            input: 'range',
            inputAttributes: {
                min: 8,
                max: 120,
                step: 1
            },
            inputValue: 25
        })
    });

    $('#sweet-multiple-inputs').on('click', function() {
        swal({
            title: 'Multiple inputs',
            html: '<input id="swal-input1" class="swal2-input">' +
                '<input id="swal-input2" class="swal2-input">',
            preConfirm: function() {
                return new Promise(function(resolve) {
                    resolve([
                        $('#swal-input1').val(),
                        $('#swal-input2').val()
                    ])
                })
            },
            onOpen: function() {
                $('#swal-input1').focus()
            }
        }).then(function(result) {
            swal(JSON.stringify(result))
        }).catch(swal.noop)
    });

    // More Examples
    // ----------------------------------------------

    $('#sweet-basic').on('click', function() {
        swal('Any fool can use a computer')
    });

    $('#sweet-text-under').on('click', function() {
        swal(
            'The Internet?',
            'That thing is still around?',
            'question'
        )
    });

    $('#sweet-success-message').on('click', function() {
        swal(
            'Good job!',
            'You clicked the button!',
            'success'
        )
    });

    $('#sweet-timer').on('click', function() {
        swal({
            title: 'Auto close alert!',
            text: 'I will close in 2 seconds.',
            timer: 2000
        }).then(
            function() {},
            // handling the promise rejection
            function(dismiss) {
                if (dismiss === 'timer') {
                    console.log('I was closed by the timer')
                }
            }
        )
    });

    $('#sweet-custom-html').on('click', function() {
        swal({
            title: '<i>HTML</i> <u>example</u>',
            type: 'info',
            html: 'You can use <b>bold text</b>, ' +
                '<a href="https://www.google.com" target="_blank">links</a> ' +
                'and other HTML tags',
            showCloseButton: true,
            showCancelButton: true,
            confirmButtonText: '<i class="ti-thumb-up"></i> Great!',
            cancelButtonText: '<i class="ti-thumb-down"></i>'
        })
    });

    $('#sweet-animation').on('click', function() {
        swal({
            title: 'jQuery HTML example',
            html: $('<div>')
                .addClass('some-class')
                .text('jQuery is everywhere.'),
            animation: false,
            customClass: 'animated tada'
        })
    });

    $('#sweet-confirm').on('click', function() {
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(function() {
            swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        })
    });

    $('#sweet-cancel').on('click', function() {
        swal({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            confirmButtonClass: 'btn btn-lg btn-success mr-4',
            cancelButtonClass: 'btn btn-lg btn-danger',
            buttonsStyling: false
        }).then(function() {
            swal(
                'Deleted!',
                'Your file has been deleted.',
                'success'
            )
        }, function(dismiss) {
            // dismiss can be 'cancel', 'overlay',
            // 'close', and 'timer'
            if (dismiss === 'cancel') {
                swal(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    });

    $('#sweet-custom-image').on('click', function() {
        swal({
            title: 'Sweet!',
            text: 'Modal with a custom image.',
            imageUrl: '../build/images/backgrounds/640x480_01.jpg',
            imageWidth: 267,
            imageHeight: 200,
            animation: false
        })
    });

    $('#sweet-custom-width').on('click', function() {
        swal({
            title: 'Custom width, padding, background.',
            width: 600,
            padding: 100,
            background: '#FFF url(../build/images/backgrounds/640x480_01.jpg)'
        })
    });

    $('#sweet-ajax').on('click', function() {
        swal({
            title: 'Submit email to run ajax request',
            input: 'email',
            showCancelButton: true,
            confirmButtonText: 'Submit',
            showLoaderOnConfirm: true,
            preConfirm: function(email) {
                return new Promise(function(resolve, reject) {
                    setTimeout(function() {
                        if (email === 'taken@example.com') {
                            reject('This email is already taken.')
                        } else {
                            resolve()
                        }
                    }, 2000)
                })
            },
            allowOutsideClick: false
        }).then(function(email) {
            swal({
                type: 'success',
                title: 'Ajax request finished!',
                html: 'Submitted email: ' + email
            })
        })
    });

    $('#sweet-queue').on('click', function() {
        swal.setDefaults({
            input: 'text',
            confirmButtonText: 'Next &rarr;',
            showCancelButton: true,
            animation: false,
            progressSteps: ['1', '2', '3']
        })

        var steps = [{
                title: 'Question 1',
                text: 'Chaining swal2 modals is easy'
            },
            'Question 2',
            'Question 3'
        ]

        swal.queue(steps).then(function(result) {
            swal.resetDefaults()
            swal({
                title: 'All done!',
                html: 'Your answers: <pre>' +
                    JSON.stringify(result) +
                    '</pre>',
                confirmButtonText: 'Lovely!',
                showCancelButton: false
            })
        }, function() {
            swal.resetDefaults()
        })
    });

    $('#sweet-dynamic-queue').on('click', function() {
        swal.queue([{
            title: 'Your public IP',
            confirmButtonText: 'Show my public IP',
            text: 'Your public IP will be received ' +
                'via AJAX request',
            showLoaderOnConfirm: true,
            preConfirm: function() {
                return new Promise(function(resolve) {
                    $.get('https://api.ipify.org?format=json')
                        .done(function(data) {
                            swal.insertQueueStep(data.ip)
                            resolve()
                        })
                })
            }
        }])
    });
});