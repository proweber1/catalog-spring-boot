$(document).ready(function() {

    $('#example-1').DataTable();

    var table = $('#example-2').DataTable({
        lengthChange: false,
        buttons: {
            buttons: [{
                extend: 'copy',
                className: 'btn-raised btn-primary'
            }, {
                extend: 'excel',
                className: 'btn-raised btn-primary'
            }, {
                extend: 'pdf',
                className: 'btn-raised btn-primary'
            }, {
                extend: 'print',
                className: 'btn-raised btn-primary'
            }]
        }
    });

    table.buttons().container().appendTo('#example-2_wrapper .col-md-6:eq(0)');

    $('#example-3').DataTable({
        colReorder: true
    });

    $('#example-5').DataTable({
        keys: true
    });

    $('#example-6').DataTable({
        select: true
    });

    $('#example-7').DataTable();

    $('#example-8').DataTable({
        scrollX: true,
        scrollCollapse: true,
        fixedColumns: true
    });

    $('#example-9').DataTable({
        fixedHeader: true
    });

    //  Latest Orders
    // --------------------------------------------------

    var table = $('#order-table').DataTable({
        lengthChange: false,
        paging: false,
        info: false,
        colReorder: true,
        language: {
            'search': '',
            'searchPlaceholder': 'Search records'
        },
        buttons: {
            buttons: [{
                extend: 'copy',
                className: 'btn-raised btn-primary'
            }, {
                extend: 'excel',
                className: 'btn-raised btn-primary'
            }, {
                extend: 'pdf',
                className: 'btn-raised btn-primary'
            }, {
                extend: 'print',
                className: 'btn-raised btn-primary'
            }]
        }
    });
    table.buttons().container().appendTo('#order-table_wrapper .col-md-6:eq(0)');
});