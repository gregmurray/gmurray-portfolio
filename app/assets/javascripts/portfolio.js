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
	  
	  // Navbar Padding
	  $('#main_navbar').removeClass("navbar_padded");
	  
	  // Hide skills list  
	  $('#skills_mobile_list').show();
	  //$('#projects_banner').innerHTML="JavaScript";
	  // on index page pnly
	  if( $('#projects_banner').length )         // use this if you are using class to check
	  {
	      document.getElementById("projects_banner").innerHTML = "{ PROJECTS }";
	  }
	  
	  
	  

  } 
  else 
  {
	  $('#banner_small').hide();
	  $('#banner_large').show();
	  
	  // Resize logo
	  $('#portfolio_logo').removeClass("small_logo");
	  $('#portfolio_logo').addClass("large_logo");
	  
	  // Navbar PAdding
	  $('#main_navbar').addClass("navbar_padded");
	  
	  $('#skills_mobile_list').hide();
	  if( $('#projects_banner').length )         // use this if you are using class to check
	  {
	  	  document.getElementById("projects_banner").innerHTML = "{ RECENT PROJECTS }";
	  }
	  
	  
	  
  }
  
  if ($(this).width() < 500) {
	  
	  if( $('.mobile_screenshot').length )         // use this if you are using class to check
	  {
		  $('.mobile_screenshot').removeClass("mobile_screenshot_small");
		  $('.mobile_screenshot').addClass("mobile_screenshot_large");
	  }
  } 
  else 
  {
	  if( $('.mobile_screenshot').length )         // use this if you are using class to check
	  {
		  $('.mobile_screenshot').removeClass("mobile_screenshot_large");
		  $('.mobile_screenshot').addClass("mobile_screenshot_small");
	  }
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
	  
	  // Navbar Padding
  	  $('#main_navbar').removeClass("navbar_padded");
	  
  	  $('#skills_mobile_list').show();
	  if( $('#projects_banner').length )         // use this if you are using class to check
	  {
	  		document.getElementById("projects_banner").innerHTML = "{ PROJECTS }";
	  }
    } 
    else 
    {
  	  $('#banner_small').hide();
  	  $('#banner_large').show();
	  
	  
	  // Resize logo
	  $('#portfolio_logo').removeClass("small_logo");
	  $('#portfolio_logo').addClass("large_logo");
	  
	  // Navbar Padding
  	  $('#main_navbar').addClass("navbar_padded");
	  
  	  $('#skills_mobile_list').hide();
	  if( $('#projects_banner').length )         // use this if you are using class to check
	  {
	  		document.getElementById("projects_banner").innerHTML = "{ RECENT PROJECTS }";
	   }

    }
	
    if ($(this).width() < 670) {
	  if( $('.mobile_screenshot').length )         // use this if you are using class to check
	  {
		  $('.mobile_screenshot').removeClass("mobile_screenshot_small");
		  $('.mobile_screenshot').addClass("mobile_screenshot_large");
	  }
    } 
    else 
    {
    	  if( $('.mobile_screenshot').length )         // use this if you are using class to check
    	  {
    		  $('.mobile_screenshot').removeClass("mobile_screenshot_large");
    		  $('.mobile_screenshot').addClass("mobile_screenshot_small");
    	  }
    }

});