var handleDataTableRowReorder = function() {
	"use strict";

    if ($('.data-table').length !== 0) {
      var table = $('.data-table').DataTable({
         rowReorder: {
          selector: ':last-child',
          snapX: 10

	      },
	      paging: false,
	      searching:false,
	      ordering:false,
	      info: false,
	      scrollY: "600px",
	      scrollCollapse: true,
    	});
			table.on( 'row-reorder', function ( e, diff, edit ) {
	        var result = 'Reorder started on row: '+edit.triggerRow.data()[1]+'<br>';

	        for ( var i=0, ien=diff.length ; i<ien ; i++ ) {
	            var rowData = table.row( diff[i].node ).data();

	            result += rowData[1]+' updated to be in position '+
	                diff[i].newData+' (was '+diff[i].oldData+')<br>';
	        }

	        console.log( 'Event result:<br>'+result );
	    } );

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
