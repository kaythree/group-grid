var grid = angular.module("gridModule",["kendo.directives"]);
angular.module("AngularModule",["gridModule","accordionApp"]);
var accordian = angular.module("accordionApp",[]);

accordian.controller("GGController" , function($scope){
	$scope.init = function () {
		$('.sd-block').click(function(){
		   	if(! $(this).hasClass('active') ){
		   		$('.sd-block').removeClass('active');
		   		$(this).addClass('active');
		   		if( $(this).hasClass('summary') ) {
			    	$("#gg-grid").removeClass("mytask").addClass("summary");
			    }
			    else if ($(this).hasClass('mytask') ) {
			    	$("#gg-grid").removeClass("summary").addClass("mytask");
			    }
		 	}
		});
	}
});

grid.controller("mytaskGridCtrl", function($scope){
	$scope.checkboxCode = "<input type='checkbox' class='chk-box' checked>";
	$scope.closeIconCode    = "<span class='close-icon'>X</span";
	$scope.mainGridOptions = {
		dataSource: [ 
					{ 
						Groups: "Group 1",
					 	view: "" ,
					 	edit :"",
					 	create :"",
					 	reject :"",
					 	approve :"",
					 	close:""
					},
					{ 
						Groups: "Group 2",
					 	view: "" ,
					 	edit :"",
					 	create :"",
					 	reject :"",
					 	approve :"",
					 	close:""
					},
					{ 
						Groups: "Group 3",
					 	view: "" ,
					 	edit :"",
					 	create :"",
					 	reject :"",
					 	approve :"",
					 	close:""
					},
					{ 
						Groups: "Group 4",
					 	view: "" ,
					 	edit :"",
					 	create :"",
					 	reject :"",
					 	approve :"",
					 	close:""
					}
				   ],

		height: 180,
		sortable: true,
		selectable: "row",
		scrollable: false,
		columnMenu: {
			columns: false,
			sortable: true
		},
		filterable: {
			extra: false,
			mode: "menu"
        },
		pageable: {
			refresh: false,
			pageSizes: true,
			buttonCount: 2,
			pageSize: 5,
			info: true,
			messages: {
			  display: " {5}"
			}
		},
		dataBound: function() {
			this.expandRow(this.tbody.find("tr.k-master-row").first());
		},
		columns: [{
			field: "Groups",
			title: "Groups",
			width: 450
		},  {
			field: "view",
			title: "Views",
			template:kendo.template($scope.checkboxCode),
			width: 100
		},
		{
			field: "edit",
			title: "Edit",
			template:kendo.template($scope.checkboxCode),
			width: 100
		},
		{
			field: "create",
			title: "Create",
			template:kendo.template($scope.checkboxCode),
			width: 100
		},
		{
			field: "reject",
			title: "Reject",
			template:kendo.template($scope.checkboxCode),
			width: 100
		},
		{
			field: "approve",
			title: "Approve",
			template:kendo.template($scope.checkboxCode),
			width: 100
		},
		{
			field: "",
			title: "",
			template:kendo.template($scope.closeIconCode),
			width: 50
		}],
		dataBinding: function(e) {
			var $pagerRefresh = $('.k-pager-refresh').clone();
			var $grid = $('#gg-grid.mytask');
			//$('.k-pager-refresh').remove();
			$grid.find('.k-grid-header tr th:first-child').prepend($pagerRefresh);

			$grid.find('.k-pager-wrap').wrapInner('<div class="k-pager-innerwrap"></div>');

			$grid.on('click','.scheck',function(){
				if( this.checked ){
					$(this).closest('tr').addClass('active');
					$('.approval-buttons').addClass('active');
				} else {
					$(this).closest('tr').removeClass('active');
					if( $('.scheck:checked').length == 0 ) {
						$('.approval-buttons').removeClass('active');
					}
				}
			})
		}
	};
});
