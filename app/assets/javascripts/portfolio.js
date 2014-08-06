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
	  
	  // Resize logo
	  $('#portfolio_logo').removeClass("large_logo");
	  $('#portfolio_logo').addClass("small_logo");
  } 
  else 
  {
	  $('#banner_small').hide();
	  $('#banner_large').show();
	  
	  // Resize logo
	  $('#portfolio_logo').removeClass("small_logo");
	  $('#portfolio_logo').addClass("large_logo");
  }
  
  if ($(this).width() < 670) {
	  // Hide skills list  
	  $('#skills_mobile_list').show();
	  //$('#projects_banner').innerHTML="JavaScript";
	  document.getElementById("projects_banner").innerHTML = "{ PROJECTS }";

	  $('#main_navbar').removeClass("navbar_padded");
  } 
  else 
  {
	  $('#skills_mobile_list').hide();
	  document.getElementById("projects_banner").innerHTML = "{ RECENT PROJECTS }";
	  

	  $('#main_navbar').addClass("navbar_padded");
  }

});

// $(document).ready(function () {
$(document).on('ready page:load', function () {
	
    if ($(this).width() < 778) {
  	  $('#banner_large').hide();
  	  $('#banner_small').show();
	  
	  
	  // Resize logo
	  $('#portfolio_logo').removeClass("large_logo");
	  $('#portfolio_logo').addClass("small_logo");
	  
    } 
    else 
    {
  	  $('#banner_small').hide();
  	  $('#banner_large').show();
	  
	  
	  // Resize logo
	  $('#portfolio_logo').removeClass("small_logo");
	  $('#portfolio_logo').addClass("large_logo");
    }
	
    if ($(this).width() < 670) {
  	  // Hide skills list
  	  $('#skills_mobile_list').show();
	  
	  
	  document.getElementById("projects_banner").innerHTML = "{ PROJECTS }";
  	  $('#main_navbar').removeClass("navbar_padded");
    } 
    else 
    {
  	  $('#skills_mobile_list').hide();
	  document.getElementById("projects_banner").innerHTML = "{ RECENT PROJECTS }";

  	  $('#main_navbar').addClass("navbar_padded");
    }

});