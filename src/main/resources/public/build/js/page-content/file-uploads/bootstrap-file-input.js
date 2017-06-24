$(document).ready(function() {

    // Bootstrap File Input
    // --------------------------------------------------

    $('#input-1').fileinput({
        theme: 'fa'
    });

    $('#input-2').fileinput({
        theme: 'fa'
    });

    $('#input-3').fileinput({
        theme: 'fa'
    });

    $('#input-4').fileinput({
        theme: 'fa'
    });

    $('#input-5').fileinput({
        showCaption: false,
        theme: 'fa'
    });

    $('#input-6').fileinput({
        showUpload: false,
        maxFileCount: 10,
        mainClass: 'input-group-lg',
        theme: 'fa'
    });

    $('#input-7').fileinput({
        theme: 'fa'
    });

    $('#input-8').fileinput({
        initialPreview: [
            '../build/images/backgrounds/640x480_01.jpg',
            '../build/images/backgrounds/640x480_02.jpg'
        ],
        initialPreviewAsData: true,
        initialPreviewConfig: [{
            caption: "Moon.jpg",
            size: 930321,
            width: "120px",
            key: 1
        }, {
            caption: "Earth.jpg",
            size: 1218822,
            width: "120px",
            key: 2
        }],
        deleteUrl: "/site/file-delete",
        overwriteInitial: false,
        maxFileSize: 100,
        initialCaption: "The Moon and the Earth",
        theme: 'fa'
    });

    $('#input-9').fileinput({
        initialPreview: [
            '../build/images/backgrounds/640x480_01.jpg',
            '../build/images/backgrounds/640x480_02.jpg'
        ],
        initialPreviewAsData: true,
        initialPreviewConfig: [{
            caption: "Moon.jpg",
            size: 930321,
            width: "120px",
            key: 1,
            showDelete: false
        }, {
            caption: "Earth.jpg",
            size: 1218822,
            width: "120px",
            key: 2,
            showZoom: false
        }],
        deleteUrl: "/site/file-delete",
        overwriteInitial: true,
        initialCaption: "The Moon and the Earth",
        theme: 'fa'
    });

    $('#input-10').fileinput({
        browseClass: "btn btn-primary btn-block",
        showCaption: false,
        showRemove: false,
        showUpload: false,
        theme: 'fa'
    });

    $('#input-11').fileinput({
        previewFileType: "image",
        browseClass: "btn btn-success",
        browseLabel: "Pick Image",
        browseIcon: "<i class=\"ti-image\"></i> ",
        removeClass: "btn btn-danger",
        removeLabel: "Delete",
        removeIcon: "<i class=\"ti-trash\"></i> ",
        uploadClass: "btn btn-info",
        uploadLabel: "Upload",
        uploadIcon: "<i class=\"ti-upload\"></i> ",
        previewZoomButtonIcons: {
            prev: '<i class="ti-angle-left"></i>',
            next: '<i class="ti-angle-right"></i>',
            toggleheader: '<i class="ti-split-v"></i>',
            fullscreen: '<i class="ti-fullscreen"></i>',
            borderless: '<i class="ti-new-window"></i>',
            close: '<i class="ti-close"></i>'
        },
        fileActionSettings: {
            zoomIcon: '<i class="ti-zoom-in"></i>',
            indicatorNew: '<i class="ti-hand-point-down text-warning"></i>',
            indicatorSuccess: '<i class="ti-check file-icon-large text-success"></i>',
            indicatorError: '<i class="ti-close text-danger"></i>',
            indicatorLoading: '<i class="ti-hand-point-up text-muted"></i>',
        }
    });

    $('#input-12').fileinput({
        previewFileType: "text",
        allowedFileExtensions: ["txt", "md", "ini", "text"],
        previewClass: "bg-info-light",
        theme: 'fa'
    });

    $('#input-13').fileinput({
        showUpload: false,
        layoutTemplates: {
            main1: "{preview}\n" +
                "<div class=\'input-group {class}\'>\n" +
                "   <div class=\'input-group-btn\'>\n" +
                "       {browse}\n" +
                "       {upload}\n" +
                "       {remove}\n" +
                "   </div>\n" +
                "   {caption}\n" +
                "</div>"
        },
        theme: 'fa'
    });

    $('#input-14').fileinput({
        theme: 'fa'
    });

    $(".btn-modify").on("click", function() {
        var $btn = $(this),
            $input = $("#input-14");
        if ($btn.text() == "Modify") {
            $("#input-14").fileinput("disable").fileinput("refresh", {
                showUpload: false
            });
            $btn.html("Revert");
            alert("Hurray! I have disabled the input and hidden the upload button.");
        } else {
            $("#input-14").fileinput("enable").fileinput("refresh", {
                showUpload: true
            });
            $btn.html("Modify");
            alert("Hurray! I have reverted back the input to enabled with the upload button.");
        }
    });

    $('#input-15').fileinput({
        maxFileCount: 10,
        allowedFileTypes: ["image", "video"],
        theme: 'fa'
    });

    $('#input-16').fileinput({
        maxFileCount: 10,
        allowedFileExtensions: ["jpg", "gif", "png", "txt"],
        theme: 'fa'
    });

    $('#input-17').fileinput({
        showPreview: false,
        allowedFileExtensions: ["zip", "rar", "gz", "tgz"],
        elErrorContainer: "#errorBlock",
        theme: 'fa'
    });

    $('#input-18').fileinput({
        uploadUrl: '/file-upload-batch/2',
        maxFilePreviewSize: 10240,
        theme: 'fa'
    });

});