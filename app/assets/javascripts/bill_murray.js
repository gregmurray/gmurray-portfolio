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


// --------------- For Window Sizing i.e. mobile -------

$(window).resize(function() {

  if ($(this).width() < 778) {
	  $('#banner_large').hide();
	  $('#banner_small').show();
  } 
  else 
  {
	  $('#banner_small').hide();
	  $('#banner_large').show();
  }
  
  if ($(this).width() < 670) {
	  // Hide skills list  
	  $('#skills_mobile_list').show();
	  //$('#projects_banner').innerHTML="JavaScript";
	  document.getElementById("projects_banner").innerHTML = "{ PROJECTS }";
  } 
  else 
  {
	  $('#skills_mobile_list').hide();
	  document.getElementById("projects_banner").innerHTML = "{ RECENT PROJECTS }";
  }

});

$(document).ready(function () {

    if ($(this).width() < 778) {
  	  $('#banner_large').hide();
  	  $('#banner_small').show();
    } 
    else 
    {
  	  $('#banner_small').hide();
  	  $('#banner_large').show();
    }
	
    if ($(this).width() < 670) {
  	  // Hide skills list
  	  $('#skills_mobile_list').show();
	  document.getElementById("projects_banner").innerHTML = "{ PROJECTS }";
    } 
    else 
    {
  	  $('#skills_mobile_list').hide();
	  document.getElementById("projects_banner").innerHTML = "{ RECENT PROJECTS }";
    }

});