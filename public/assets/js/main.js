 $(document).ready(function(){
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  $(".jobs__menu").click(function(){
    if($(this).hasClass("animated")){
      $(".sidebar").css("left", "0");
        if (w > 600){
        $(this).css("left","360px").removeClass("animated").find("i").css("transform", "rotate(180deg)");
        }else{
          $(this).css({"left":"90%"}).removeClass("animated").find("i").css("transform", "rotate(180deg)");
    }
    }else{
      // $("body").css("overflow-x", "visible");
      $(".sidebar").css("left", "-100%");
      // $(".jobs").css({"position": "relative", "left": "0px"});
      $(this).css("left","15px").addClass("animated").find("i").css("transform", "rotate(0)");  
    }
  });
});
