var handleDataTableRowReorder = function() {
	"use strict";

    if ($('.data-table').length !== 0) {
        $('.data-table').DataTable({
           rowReorder: {
            selector: ':last-child',
            snapX: 10

        },
        paging: false,
        searching:false,
        ordering:false,
        info: false,
        scrollY: "400px",
        scrollCollapse: true,
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