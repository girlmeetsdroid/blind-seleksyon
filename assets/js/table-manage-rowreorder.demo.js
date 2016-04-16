var handleDataTableRowReorder = function() {
	"use strict";

    if ($('#data-table').length !== 0) {
        $('#data-table').DataTable({
            rowReorder: true,
            paging: false,
            searching:false,
            info: false,
            ordering:false,
            "columnDefs": [
            { "width": "10%", "targets": 0 }
            ]
        });
    }
};

var TableManageRowReorder = function () {
	"use strict";
    return {
        //main function
        init: function () {
            handleDataTableRowReorder();
        }
    };
}();