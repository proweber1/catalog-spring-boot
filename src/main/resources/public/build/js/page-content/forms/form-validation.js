$(document).ready(function() {

    $('#frmHorizontalStandard').validate({
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-danger');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-danger');
        },
        errorElement: 'div',
        errorClass: 'form-control-feedback',
        errorPlacement: function(error, element) {
            $(error).appendTo($(element).closest('.col-sm-8'));
        }
    });

    $('#frmHorizontalSummary').validate({
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-danger');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-danger');
        },
        errorContainer: $('#horizontalSummaryErrors'),
        errorLabelContainer: $('ul', '#horizontalSummaryErrors'),
        wrapper: 'li',
        errorElement: 'p'
    });

    $('#frmVerticalStandard').validate({
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-danger');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-danger');
        },
        errorElement: 'div',
        errorClass: 'form-control-feedback',
        errorPlacement: function(error, element) {
            $(error).appendTo($(element).closest('.form-group'));
        }
    });

    $('#frmVerticalSummary').validate({
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-danger');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-danger');
        },
        errorContainer: $('#verticalSummaryErrors'),
        errorLabelContainer: $('ul', '#verticalSummaryErrors'),
        wrapper: 'li',
        errorElement: 'p'
    });

});