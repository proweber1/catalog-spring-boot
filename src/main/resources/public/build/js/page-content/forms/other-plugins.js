$(document).ready(function() {

    // Bootstrap Maxlength
    // --------------------------------------------------

    $('#default-ml').maxlength({
        warningClass: 'badge badge-warning',
        limitReachedClass: 'badge badge-danger'
    });
    $('#threshold-ml').maxlength({
        threshold: 20,
        warningClass: 'badge badge-warning',
        limitReachedClass: 'badge badge-danger'
    });
    $('#few-ml').maxlength({
        alwaysShow: true,
        threshold: 10,
        warningClass: 'badge badge-warning',
        limitReachedClass: 'badge badge-danger'
    });
    $('#all-ml').maxlength({
        alwaysShow: true,
        threshold: 10,
        warningClass: 'badge badge-success',
        limitReachedClass: 'badge badge-danger',
        separator: ' of ',
        preText: 'You have ',
        postText: ' chars remaining.',
        validate: true
    });
    $('#textarea-ml').maxlength({
        alwaysShow: true,
        warningClass: 'badge badge-warning',
        limitReachedClass: 'badge badge-danger'
    });
    $('#position-ml').maxlength({
        alwaysShow: true,
        placement: 'centered-right',
        warningClass: 'badge badge-warning',
        limitReachedClass: 'badge badge-danger'
    });

    // Bootstrap TouchSpin
    // --------------------------------------------------

    $('#postfix-ts').TouchSpin({
        min: 0,
        max: 100,
        step: 0.1,
        decimals: 2,
        boostat: 5,
        maxboostedstep: 10,
        postfix: '%',
        buttondown_class: 'btn btn-secondary',
        buttonup_class: 'btn btn-secondary'
    });

    $('#prefix-ts').TouchSpin({
        min: -1000000000,
        max: 1000000000,
        stepinterval: 50,
        maxboostedstep: 10000000,
        prefix: '$',
        buttondown_class: 'btn btn-secondary',
        buttonup_class: 'btn btn-secondary'
    });

    $('#empty-ts').TouchSpin({
        buttondown_class: 'btn btn-secondary',
        buttonup_class: 'btn btn-secondary'
    });

    $('#initval-ts').TouchSpin({
        initval: 40,
        buttondown_class: 'btn btn-secondary',
        buttonup_class: 'btn btn-secondary'
    });

    $('#explicitly-ts').TouchSpin({
        initval: 40,
        buttondown_class: 'btn btn-secondary',
        buttonup_class: 'btn btn-secondary'
    });

    $('#small-ts').TouchSpin({
        postfix: 'a button',
        buttondown_class: 'btn btn-secondary',
        buttonup_class: 'btn btn-secondary'
    });

    $('#large-ts').TouchSpin({
        postfix: 'a button',
        buttondown_class: 'btn btn-secondary',
        buttonup_class: 'btn btn-secondary'
    });

    $('#group-ts').TouchSpin({
        buttondown_class: 'btn btn-secondary',
        buttonup_class: 'btn btn-secondary',
        prefix: 'pre',
        postfix: 'post'
    });

    // Bootstrap Tags Input
    // --------------------------------------------------

    $('#basic-ti').tagsinput({
        tagClass: 'badge badge-info'
    });

    $('#multi-ti').tagsinput({
        tagClass: 'badge badge-info'
    });

    var citynames = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('name'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: {
            url: '../build/data/citynames.json',
            filter: function(list) {
                return $.map(list, function(cityname) {
                    return {
                        name: cityname
                    };
                });
            }
        }
    });
    citynames.initialize();

    $('#typeahead-ti').tagsinput({
        tagClass: 'badge badge-info',
        typeaheadjs: {
            name: 'citynames',
            displayKey: 'name',
            valueKey: 'name',
            source: citynames.ttAdapter()
        }
    });

    var cities = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: '../build/data/cities.json'
    });
    cities.initialize();

    var elt = $('#object-ti');
    elt.tagsinput({
        tagClass: 'badge badge-info',
        itemValue: 'value',
        itemText: 'text',
        typeaheadjs: {
            name: 'cities',
            displayKey: 'text',
            source: cities.ttAdapter()
        }
    });
    elt.tagsinput('add', {
        "value": 1,
        "text": "Amsterdam",
        "continent": "Europe"
    });
    elt.tagsinput('add', {
        "value": 4,
        "text": "Washington",
        "continent": "America"
    });
    elt.tagsinput('add', {
        "value": 7,
        "text": "Sydney",
        "continent": "Australia"
    });
    elt.tagsinput('add', {
        "value": 10,
        "text": "Beijing",
        "continent": "Asia"
    });
    elt.tagsinput('add', {
        "value": 13,
        "text": "Cairo",
        "continent": "Africa"
    });


    var cities = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace('text'),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        prefetch: '../build/data/cities.json'
    });
    cities.initialize();

    var elt = $('#categorizing-ti');
    elt.tagsinput({
        tagClass: function(item) {
            switch (item.continent) {
                case 'Europe':
                    return 'badge badge-primary';
                case 'America':
                    return 'badge badge-danger badge-important';
                case 'Australia':
                    return 'badge badge-success';
                case 'Africa':
                    return 'badge badge-default';
                case 'Asia':
                    return 'badge badge-warning';
                default:
                    return 'badge badge-default';
            }
        },
        itemValue: 'value',
        itemText: 'text',
        typeaheadjs: {
            name: 'cities',
            displayKey: 'text',
            source: cities.ttAdapter()
        }
    });
    elt.tagsinput('add', {
        'value': 1,
        'text': 'Amsterdam',
        'continent': 'Europe'
    });
    elt.tagsinput('add', {
        'value': 4,
        'text': 'Washington',
        'continent': 'America'
    });
    elt.tagsinput('add', {
        'value': 7,
        'text': 'Sydney',
        'continent': 'Australia'
    });
    elt.tagsinput('add', {
        'value': 10,
        'text': 'Beijing',
        'continent': 'Asia'
    });
    elt.tagsinput('add', {
        'value': 13,
        'text': 'Cairo',
        'continent': 'Africa'
    });

    // Bootstrap Context Menu
    // ------------------------------------------------

    $.contextMenu({
        selector: '#basic-menu',
        callback: function(key, options) {
            var m = 'clicked: ' + key;
            window.console && console.log(m) || alert(m);
        },
        items: {
            'edit': {
                name: 'Edit',
                icon: ' ti-pencil'
            },
            'delete': {
                name: 'Delete',
                icon: ' ti-close'
            }
        }
    });

});