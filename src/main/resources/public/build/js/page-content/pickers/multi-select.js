$(document).ready(function() {

    // Multi Select
    // --------------------------------------------------

    $('#basic-ms').multiSelect();

    $('#pre-selected-ms').multiSelect();

    $('#callbacks-ms').multiSelect({
        afterSelect: function(values) {
            alert('Select value: ' + values);
        },
        afterDeselect: function(values) {
            alert('Deselect value: ' + values);
        }
    });

    $('#keep-order-ms').multiSelect({
        keepOrder: true
    });

    $('#public-methods-ms').multiSelect();
    $('#select-all').click(function() {
        $('#public-methods-ms').multiSelect('select_all');
        return false;
    });
    $('#deselect-all').click(function() {
        $('#public-methods-ms').multiSelect('deselect_all');
        return false;
    });
    $('#select-html5-php').click(function() {
        $('#public-methods-ms').multiSelect('select', ['HTML5', 'PHP']);
        return false;
    });
    $('#deselect-css-javascript').click(function() {
        $('#public-methods-ms').multiSelect('deselect', ['CSS', 'Javascript']);
        return false;
    });
    $('#refresh').on('click', function() {
        $('#public-methods-ms').multiSelect('refresh');
        return false;
    });
    $('#add-option').on('click', function() {
        $('#public-methods-ms').multiSelect('addOption', {
            value: 'Pascal',
            text: 'Pascal',
            index: 0
        });
        return false;
    });

    $('#optgroup-ms').multiSelect({
        selectableOptgroup: true
    });

    $('#disabled-attribute-ms').multiSelect();

    $('#searchable-ms').multiSelect({
        selectableHeader: '<label>Non-selected</label><input type=\'text\' class=\'search-input form-control mb-6\' autocomplete=\'off\' placeholder=\'try \'HTML\'\'>',
        selectionHeader: '<label>Selected</label><input type=\'text\' class=\'search-input form-control mb-6\' autocomplete=\'off\' placeholder=\'try \'CSS\'\'>',
        afterInit: function(ms) {
            var that = this,
                $selectableSearch = that.$selectableUl.prev(),
                $selectionSearch = that.$selectionUl.prev(),
                selectableSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selectable:not(.ms-selected)',
                selectionSearchString = '#' + that.$container.attr('id') + ' .ms-elem-selection.ms-selected';

            that.qs1 = $selectableSearch.quicksearch(selectableSearchString).on('keydown', function(e) {
                if (e.which === 40) {
                    that.$selectableUl.focus();
                    return false;
                }
            });

            that.qs2 = $selectionSearch.quicksearch(selectionSearchString).on('keydown', function(e) {
                if (e.which == 40) {
                    that.$selectionUl.focus();
                    return false;
                }
            });
        },
        afterSelect: function() {
            this.qs1.cache();
            this.qs2.cache();
        },
        afterDeselect: function() {
            this.qs1.cache();
            this.qs2.cache();
        }
    });
});