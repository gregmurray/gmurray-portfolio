(function($){

	
	$.fn.make_bill_large = function(){

			// Hide the front facing model
	        $('#bottom_bubble').removeClass('small_bill');
	        $('#bottom_bubble').addClass('large_bill');
			$('#toggle_bill').attr('onclick', "$().make_bill_small();")
			// alert("Your bill should now be llarge.");
			
	}
	
	$.fn.make_bill_small = function(){

			// Hide the front facing model
	        $('#bottom_bubble').removeClass('large_bill');
	        $('#bottom_bubble').addClass('small_bill');
			$('#toggle_bill').attr('onclick', "$().make_bill_large();")
	}
	
	
		
	
	
})(jQuery);


$(document).ready(function () {
	$('#toggle_bill').mouseover(function(){
		// Hide the front facing model
        $('#bottom_bubble').removeClass('small_bill');
        $('#bottom_bubble').addClass('large_bill');
		$('#toggle_bill').attr('onclick', "$().make_bill_small();")
	});
	
	$('#toggle_bill').mouseout(function(){
		// Hide the front facing model
        $('#bottom_bubble').removeClass('large_bill');
        $('#bottom_bubble').addClass('small_bill');
		$('#toggle_bill').attr('onclick', "$().make_bill_large();")
	});
});