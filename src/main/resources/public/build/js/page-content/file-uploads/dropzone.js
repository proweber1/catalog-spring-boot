$(document).ready(function() {

    // DropzoneJS
    // --------------------------------------------------

    Dropzone.options.myAwesomeDropzone = false;
    Dropzone.autoDiscover = false;

    $('#single-dropzone').dropzone({
        url: '/upload',
        paramName: 'file',
        maxFilesize: 2,
        maxThumbnailFilesize: 0.5,
        maxFiles: 1,
        dictDefaultMessage: '<i class=\'dz-icon ti-file\'></i>Drop file here to upload',
        init: function() {
            this.on('addedfile', function(file) {
                if (this.fileTracker) {
                    this.removeFile(this.fileTracker);
                }
                this.fileTracker = file;
            });
        }
    });

    $('#multiple-dropzone').dropzone({
        url: '/upload',
        paramName: 'file',
        maxFilesize: 2,
        maxThumbnailFilesize: 0.5,
        dictDefaultMessage: '<i class=\'dz-icon ti-files\'></i>Drop files here to upload'
    });

    $('#type-dropzone').dropzone({
        url: '/upload',
        paramName: 'file',
        acceptedFiles: 'image/*',
        maxFilesize: 2,
        maxThumbnailFilesize: 0.5,
        dictDefaultMessage: '<i class=\'dz-icon ti-image\'></i>Drop image files here to upload'
    });

    $('#limit-dropzone').dropzone({
        url: '/upload',
        paramName: 'file',
        maxFilesize: 2,
        maxThumbnailFilesize: 0.5,
        maxFiles: 3,
        dictDefaultMessage: '<i class=\'dz-icon ti-file\'></i>Drop files here to upload'
    });

    $('#message-dropzone').dropzone({
        url: '/upload',
        paramName: 'file',
        acceptedFiles: '.txt',
        maxFilesize: 2,
        maxThumbnailFilesize: 0.5,
        dictDefaultMessage: '<i class=\'dz-icon ti-file\'></i>Drop text files here to upload'
    });

});