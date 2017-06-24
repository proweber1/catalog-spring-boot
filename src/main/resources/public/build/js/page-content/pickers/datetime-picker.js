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

    $('#no-icon-dtpicker').datetimepicker({
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

    $('#inline-dtpicker').datetimepicker({
        locale: 'en-gb',
        inline: true,
        sideBySide: true,
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

    $('#bottom-left-dtpicker').datetimepicker({
        locale: 'en-gb',
        widgetPositioning: {
            horizontal: 'left',
            vertical: 'bottom'
        },
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

    $('#bottom-right-dtpicker').datetimepicker({
        locale: 'en-gb',
        widgetPositioning: {
            horizontal: 'right',
            vertical: 'bottom'
        },
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

    $('#top-left-dtpicker').datetimepicker({
        locale: 'en-gb',
        widgetPositioning: {
            horizontal: 'left',
            vertical: 'top'
        },
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

    $('#top-right-dtpicker').datetimepicker({
        locale: 'en-gb',
        widgetPositioning: {
            horizontal: 'right',
            vertical: 'top'
        },
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

    $('#france-dtpicker').datetimepicker({
        locale: 'fr',
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

    $('#russia-dtpicker').datetimepicker({
        locale: 'ru',
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

    $('#japan-dtpicker').datetimepicker({
        locale: 'ja',
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

    $('#vietnam-dtpicker').datetimepicker({
        locale: 'vi',
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

    $('#linked-pickers-1').datetimepicker({
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

    $('#linked-pickers-2').datetimepicker({
        locale: 'en-gb',
        useCurrent: false,
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

    $('#linked-pickers-1').on('dp.change', function(e) {
        $('#linked-pickers-2').data('DateTimePicker').minDate(e.date);
    });

    $('#linked-pickers-2').on('dp.change', function(e) {
        $('#linked-pickers-1').data('DateTimePicker').maxDate(e.date);
    });

    $('#status-dtpicker').datetimepicker({
        locale: 'en-gb',
        defaultDate: '11/1/2013',
        disabledDates: [
            moment('12/25/2013'),
            new Date(2013, 11 - 1, 21),
            '11/22/2013 00:53'
        ],
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

    $('#disabled-days-dtpicker').datetimepicker({
        locale: 'en-gb',
        daysOfWeekDisabled: [0, 6],
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

    $('#custom-toolbar-dtpicker').datetimepicker({
        locale: 'en-gb',
        showTodayButton: true,
        showClear: true,
        showClose: true,
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

    $('#custom-icons-dtpicker').datetimepicker({
        locale: 'en-gb',
        showTodayButton: true,
        showClear: true,
        showClose: true,
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

});