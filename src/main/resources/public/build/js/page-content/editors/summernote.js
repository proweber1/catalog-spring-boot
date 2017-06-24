$(document).ready(function() {

    // Summernote
    // --------------------------------------------------

    $('#standardMode').summernote({
        fontNames: ['Source Sans Pro', 'Kalam', 'Arial', 'Helvetica', 'Tahoma', 'Times New Roman', 'Verdana']
    });

    $('#airMode').summernote({
        airMode: true
    });

    $('#fullExample').summernote({
        fontNames: ['Source Sans Pro', 'Kalam', 'Arial', 'Helvetica', 'Tahoma', 'Times New Roman', 'Verdana'],
        height: 200,
        toolbar: [
            ['Paragraph', ['style', 'ol', 'ul', 'paragraph', 'height']],
            ['Font', ['fontname', 'fontsize', 'color', 'bold', 'italic', 'underline', 'strikethrough', 'superscript', 'subscript', 'clear']],
            ['Insert', ['picture', 'link', 'video', 'table', 'hr']],
            ['Misc', ['fullscreen', 'codeview', 'undo', 'redo', 'help']]
        ]
    });
});

var edit = function() {
    $('#clickToEdit').summernote({
        fontNames: ['Source Sans Pro', 'Kalam', 'Arial', 'Helvetica', 'Tahoma', 'Times New Roman', 'Verdana'],
        focus: true
    });
};

var save = function() {
    var makrup = $('#clickToEdit').summernote('code');
    $('#clickToEdit').summernote('destroy');
};