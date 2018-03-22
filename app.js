$(window).scroll(function(i){
        window.requestAnimationFrame(()=> {
            $('.banner-text').css({'opacity':(200-$(window).scrollTop() )/100});
        })

    })



$(document).ready(function(){
  if ($(window).width() < 768) {
      $(".my-nav").css("background" , "black");
      $("#logo").css({"transition": "opacity 1.5s", "opacity": "1"})
  }

  $(window).resize(function() {
      if ($(window).width() < 768) {
            $(".my-nav").css("background" , "black");
            $("#logo").css("opacity", "1")
      }
      else {
          $(".my-nav").css("background" , "transparent");
          $("#logo").css("opacity", "0")
      }
  });

  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 150 && $(window).width() > 768) {
	    $(".my-nav").css("background" , "black");
        $("#logo").css({"transition": "opacity 1.5s", "opacity": "1"})
	  }

	  else if (scroll <= 150 && $(window).width() > 768){
		  $(".my-nav").css("background" , "transparent");
          $("#logo").css({"transition": "opacity .5s", "opacity": "0"})
	  }
  })


})

/*flip for portfolio*/

$(document).ready(function() {
  $('.holder').click(function() {
    $(this).toggleClass('show_info')
  });
});
