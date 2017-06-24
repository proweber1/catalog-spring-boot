$(document).ready(function() {

    // Basic Views
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

    // List Views
    // --------------------------------------------------

    $('#list-fc').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'listDay,listWeek,month'
        },
        views: {
            listDay: {
                buttonText: 'list day'
            },
            listWeek: {
                buttonText: 'list week'
            }
        },
        buttonIcons: {
            prev: ' ti-arrow-left',
            next: ' ti-arrow-right'
        },
        defaultView: 'listWeek',
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

    // Internationalization
    // --------------------------------------------------

    var initialLocaleCode = 'en';

    $('#internationalization-fc').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listMonth'
        },
        defaultDate: '2017-03-15',
        locale: initialLocaleCode,
        buttonIcons: false, // show the prev/next text
        weekNumbers: true,
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

    // build the locale selector's options
    $.each($.fullCalendar.locales, function(localeCode) {
        $('#locale-selector').append(
            $('<option/>')
            .attr('value', localeCode)
            .prop('selected', localeCode == initialLocaleCode)
            .text(localeCode)
        );
    });

    // when the selected option changes, dynamically change the calendar option
    $('#locale-selector').on('change', function() {
        if (this.value) {
            $('#internationalization-fc').fullCalendar('option', 'locale', this.value);
        }
    });

    // Google Calendar
    // --------------------------------------------------

    $('#google-fc').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,listYear'
        },
        buttonIcons: {
            prev: ' ti-arrow-left',
            next: ' ti-arrow-right'
        },
        eventColor: '#535170',
        eventTextColor: '#FFF',
        displayEventTime: false, // don't show the time column in list view

        // THIS KEY WON'T WORK IN PRODUCTION!!!
        // To make your own Google API key, follow the directions here:
        // http://fullcalendar.io/docs/google_calendar/
        googleCalendarApiKey: 'AIzaSyDcnW6WejpTOCffshGDDb4neIrXVUA1EAE',

        // US Holidays
        events: 'en.usa#holiday@group.v.calendar.google.com',

        eventClick: function(event) {
            // opens events in a popup window
            window.open(event.url, 'gcalevent', 'width=700,height=600');
            return false;
        },

    });

    // Selecting Time Ranges
    // --------------------------------------------------

    $('#time-ranges-fc').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        },
        buttonIcons: {
            prev: ' ti-arrow-left',
            next: ' ti-arrow-right'
        },
        defaultDate: '2017-03-15',
        navLinks: true, // can click day/week names to navigate views
        selectable: true,
        selectHelper: true,
        select: function(start, end) {
            var title = prompt('Event Title:');
            var eventData;
            if (title) {
                eventData = {
                    title: title,
                    start: start,
                    end: end
                };
                $('#time-ranges-fc').fullCalendar('renderEvent', eventData, true); // stick? = true
            }
            $('#time-ranges-fc').fullCalendar('unselect');
        },
        eventColor: '#535170',
        eventTextColor: '#FFF',
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

    // Background Events
    // --------------------------------------------------

    $('#bg-events-fc').fullCalendar({
        header: {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay,listMonth'
        },
        buttonIcons: {
            prev: ' ti-arrow-left',
            next: ' ti-arrow-right'
        },
        defaultDate: '2017-03-15',
        navLinks: true, // can click day/week names to navigate views
        businessHours: true, // display business hours
        editable: true,
        events: [{
                title: 'Business Lunch',
                start: '2017-03-03T13:00:00',
                constraint: 'businessHours',
                color: '#A65EFF',
                textColor: '#FFF'
            }, {
                title: 'Meeting',
                start: '2017-03-13T11:00:00',
                constraint: 'availableForMeeting', // defined below
                color: '#5EEB5B',
                textColor: '#FFF'
            }, {
                title: 'Conference',
                start: '2017-03-18',
                end: '2017-03-20',
                color: '#00E09D',
                textColor: '#FFF'
            }, {
                title: 'Party',
                start: '2017-03-29T20:00:00',
                color: '#F45562',
                textColor: '#FFF'
            },

            // areas where "Meeting" must be dropped
            {
                id: 'availableForMeeting',
                start: '2017-03-11T10:00:00',
                end: '2017-03-11T16:00:00',
                rendering: 'background',
                color: '#FF5EB9',
                textColor: '#FFF'
            }, {
                id: 'availableForMeeting',
                start: '2017-03-13T10:00:00',
                end: '2017-03-13T16:00:00',
                rendering: 'background',
                color: '#80CBC4',
                textColor: '#FFF'
            },

            // red areas where no events can be dropped
            {
                start: '2017-03-24',
                end: '2017-03-28',
                overlap: false,
                rendering: 'background',
                color: '#E8EAF6',
                textColor: '#FFF'
            }, {
                start: '2017-03-06',
                end: '2017-03-08',
                overlap: false,
                rendering: 'background',
                color: '#E8EAF6',
                textColor: '#FFF'
            }
        ]
    });

});