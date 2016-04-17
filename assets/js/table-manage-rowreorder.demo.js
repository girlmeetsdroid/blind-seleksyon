var handleDataTableRowReorder = function() {
	"use strict";

  $("thead").hide();
   $("tfoot").hide();
		var candidateScore = 0;
    var count = $(".data-table tbody tr").length-1;
    $(".data-table tbody tr").each(function(i, tr) {
        $(tr).attr('id', 'id'+i);
        $(tr).prepend('<td>'+parseInt(i+1)+'</td>');

        if (i==count) {
            var table = $('.data-table').DataTable({
             rowReorder: {
              snapX: 10,
              selector: 'tr',
              dataSrc: 0
          },
          paging: false,
          searching:false,
          info: false,
          scrollY: "500px",
          scrollCollapse: true,
          "columnDefs": [
          {
            "targets": [0,1],
            "visible": true
    			}]
        	});
    		}
	});


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
