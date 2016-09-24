/**
 * Created by guo on 2016/4/18.
 */
$(document).ready(function () {

    $('.dataTables-example').dataTable({
                                           responsive: true,
                                           "dom": 'T<"clear">lfrtip',
                                           "tableTools": {
                                               // "sSwfPath": "js/plugins/dataTables/swf/copy_csv_xls_pdf.swf",
                                               "sSwfPath": ""
                                           },
                                           "language": {
                                               'lengthMenu': '_MENU_ 条',
                                               "info": "显示 _START_ - _END_, 共 _TOTAL_ 条",
                                               "paginate": {
                                                   "previous": "上一页",
                                                   "next": "下一页"
                                               }
                                           },
                                       });


    /* Init DataTables */
    var oTable = $('#editable').dataTable();

    /* Apply the jEditable handlers to the table */
    oTable.$('td').editable('../example_ajax.php', {
        "indicator" : 'Saving...',
        "tooltip"   : 'Click to edit...',
        'type    ': 'select',
        "callback": function( sValue, y ) {
            var aPos = oTable.fnGetPosition( this );
            oTable.fnUpdate( sValue, aPos[0], aPos[1] );
        },
        "submitdata": function ( value, settings ) {
            return {
                "id": this.parentNode.getAttribute('id'),
                "column": oTable.fnGetPosition( this )[1]
            };
        },
        "width": "90%",
        "height": "100%"
    } );


});


function fnClickAddRow() {
    $('#editable').dataTable().fnAddData([
                                             "Custom row",
                                             "New row",
                                             "New row",
                                             "New row",
                                             "New row"]);

}
