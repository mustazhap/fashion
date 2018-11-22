 $(document).ready(function(){
  $(".header__menu").on("click", function (event) {
    if($(".block1").css("left") === "-405px"){
      $(".block1").css({"top": "0", "left": "-0"});
      $("body").css("overflow", "auto"); 
      $(".block1").removeClass("menu_active");

    }
    else{
      $("body").css("overflow", "hidden");      
      $(".block1").css({"top": "100px", "left": "-405px"});
      $(".block1").addClass("menu_active");
    }
  });

  $(".menu__close").on("click", function (event) {
      $("body").css("overflow", "auto");      
      $(".block1").css({"top": "0", "left": "-0"});
      $(".block1").removeClass("menu_active");
  });

  $(".block1").on("click", function (event) {
    if($(".block1").css("left") === "-405px"){
      $("body").css("overflow", "auto");      
      $(".block1").css({"top": "0", "left": "-0"});
      $(".block1").removeClass("menu_active");
  }
});


  
  $(".mob-menu").on("click", function (event) {
    if($(".menu").css("right") === "-1000px"){
      $(".menu").css({"right": "-0"});
      $("body").css("overflow", "hidden");
      $(".icon-menu").css("display", "none");
      $(".icon-close").css("display", "block");


    }
    else{
      $(".menu").css({"right": "-1000px"});
      $("body").css("overflow", "auto");
      $(".icon-close").css("display", "none");
      $(".icon-menu").css("display", "block");
    }
  });
});
