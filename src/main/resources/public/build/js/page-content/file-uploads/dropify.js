$(document).ready(function() {

    // Initialize
    $('.dropify').dropify();

    // Used events
    var drEvent = $('.dropify-events').dropify();

    drEvent.on('dropify.beforeClear', function(event, element) {
        return confirm('Do you really want to delete \"' + element.file.name + '\" ?');
    });

    drEvent.on('dropify.afterClear', function(event, element) {
        alert('File deleted');
    });

    drEvent.on('dropify.errors', function(event, element) {
        console.log('Has Errors');
    });

    // Translated
    $('.dropify-fr').dropify({
        messages: {
            default: 'Glissez-déposez un fichier ici ou cliquez',
            replace: 'Glissez-déposez un fichier ou cliquez pour remplacer',
            remove: 'Supprimer',
            error: 'Désolé, le fichier trop volumineux'
        }
    });

});