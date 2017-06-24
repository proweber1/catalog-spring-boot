$(document).ready(function() {

    // Bootstrap DateTimePicker
    // --------------------------------------------------

    $('#minimum-dtpicker').datetimepicker({
        locale: 'en-gb',
        icons: {
            time: 'ti-time',
            date: 'ti-calendar',
            up: 'ti-arrow-up',
            down: 'ti-arrow-down',
            previous: 'ti-arrow-left',
            next: 'ti-arrow-right',
            today: 'ti-target',
            clear: 'ti-trash',
            close: 'ti-close'
        }
    });

    $('#custom-dtpicker').datetimepicker({
        locale: 'en-gb',
        format: 'LT',
        icons: {
            time: 'ti-time',
            date: 'ti-calendar',
            up: 'ti-arrow-up',
            down: 'ti-arrow-down',
            previous: 'ti-arrow-left',
            next: 'ti-arrow-right',
            today: 'ti-target',
            clear: 'ti-trash',
            close: 'ti-close'
        }
    });

    $('#view-mode-dtpicker').datetimepicker({
        locale: 'en-gb',
        viewMode: 'years',
        icons: {
            time: 'ti-time',
            date: 'ti-calendar',
            up: 'ti-arrow-up',
            down: 'ti-arrow-down',
            previous: 'ti-arrow-left',
            next: 'ti-arrow-right',
            today: 'ti-target',
            clear: 'ti-trash',
            close: 'ti-close'
        }
    });

    $('#min-view-mode-dtpicker').datetimepicker({
        locale: 'en-gb',
        viewMode: 'years',
        format: 'MM/YYYY',
        icons: {
            time: 'ti-time',
            date: 'ti-calendar',
            up: 'ti-arrow-up',
            down: 'ti-arrow-down',
            previous: 'ti-arrow-left',
            next: 'ti-arrow-right',
            today: 'ti-target',
            clear: 'ti-trash',
            close: 'ti-close'
        }
    });

    // Bootstrap Date Range Picker
    // --------------------------------------------------

    $('#date-range-picker').daterangepicker({
        buttonClasses: 'btn',
        applyClass: 'btn-success mr-1',
        cancelClass: 'btn-secondary'
    });

    $('#date-time-picker').daterangepicker({
        timePicker: true,
        timePickerIncrement: 30,
        locale: {
            format: 'MM/DD/YYYY h:mm A'
        },
        buttonClasses: 'btn',
        applyClass: 'btn-success mr-1',
        cancelClass: 'btn-secondary'
    });

    $('#single-date-picker').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true
    }, function(start, end, label) {
        var years = moment().diff(start, 'years');
        alert('You are ' + years + ' years old.');
    });

    $('#predefined-ranges-picker').daterangepicker({
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
        $('#predefined-ranges-picker span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
    });
    $('#predefined-ranges-picker span').html(moment().subtract(29, 'days').format('MMMM D, YYYY') + ' - ' + moment().format('MMMM D, YYYY'));

    // Multi Select
    // --------------------------------------------------

    $('#basic-ms').multiSelect();

    $('#pre-selected-ms').multiSelect();

    // Form Wizard
    // --------------------------------------------------

    $('#form-horizontal').steps({
        headerTag: 'h4',
        bodyTag: 'fieldset',
        transitionEffect: 'slide'
    });

    $('#form-vertical').steps({
        headerTag: 'h4',
        bodyTag: 'fieldset',
        transitionEffect: 'slide',
        stepsOrientation: 'vertical'
    });

    $('#form-tabs').steps({
        headerTag: 'h4',
        bodyTag: 'fieldset',
        transitionEffect: 'slideLeft',
        enableFinishButton: false,
        enablePagination: false,
        enableAllSteps: true,
        titleTemplate: '#title#',
        cssClass: 'tabcontrol'
    });

    // DataTables
    // --------------------------------------------------

    $('#example-6').DataTable({
        select: true
    });

    // FullCalendar
    // --------------------------------------------------

    $('#basic-fc').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,basicWeek,basicDay'
        },
        buttonIcons: {
            prev: ' ti-arrow-left',
            next: ' ti-arrow-right'
        },
        defaultDate: '2017-03-15',
        navLinks: true, // can click day/week names to navigate views
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        events: [{
            title: 'All Day Event',
            start: '2017-03-18',
            color: '#5D67ED',
            textColor: '#FFF'
        }, {
            title: 'Long Event',
            start: '2017-03-07',
            end: '2017-03-10',
            color: '#46D7EA',
            textColor: '#FFF'
        }, {
            title: 'Repeating Event',
            start: '2017-03-28T16:00:00',
            color: '#00E09D',
            textColor: '#FFF'
        }, {
            title: 'Repeating Event',
            start: '2017-03-16T16:00:00',
            color: '#5EEB5B',
            textColor: '#FFF'
        }, {
            title: 'Conference',
            start: '2017-03-11',
            end: '2017-03-13',
            color: '#A65EFF',
            textColor: '#FFF'
        }, {
            title: 'Meeting',
            start: '2017-03-12T10:30:00',
            end: '2017-03-12T12:30:00',
            color: '#5EEB5B',
            textColor: '#FFF'
        }, {
            title: 'Lunch',
            start: '2017-03-12T12:00:00',
            color: '#FF5EB9',
            textColor: '#FFF'
        }, {
            title: 'Meeting',
            start: '2017-03-12T14:30:00',
            color: '#5EEB5B',
            textColor: '#FFF'
        }, {
            title: 'Happy Hour',
            start: '2017-03-12T17:30:00',
            color: '#FF915E',
            textColor: '#FFF'
        }, {
            title: 'Dinner',
            start: '2017-03-12T20:00:00',
            color: '#5D67ED',
            textColor: '#FFF'
        }, {
            title: 'Birthday Party',
            start: '2017-03-13T07:00:00',
            color: '#F45562',
            textColor: '#FFF'
        }, {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2017-03-28',
            color: '#F45562',
            textColor: '#FFF'
        }]
    });

});