 $(document).ready(function(){
  var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

  // Menu
  $(".jobs__menu").click(function(){
    if($(this).hasClass("animated")){
      $(".sidebar").css("left", "0");
        if (w > 600){
        $(this).css("left","360px").removeClass("animated").find("i").css("transform", "rotate(180deg)");
        }else{
            $(this).css({"left":"90%"}).removeClass("animated").find("i").css("transform", "rotate(180deg)");
            $("body").css("overflow","hidden");
        }
    }else{
      // $("body").css("overflow-x", "visible");
      $(".sidebar").css("left", "-100%");
      $("body").css("overflow","auto");
      // $(".jobs").css({"position": "relative", "left": "0px"});
      $(this).css("left","15px").addClass("animated").find("i").css("transform", "rotate(0)");  
    }
  });
// 


// Select menu

$('select').each(function(){
  var $this = $(this), numberOfOptions = $(this).children('option').length;

  $this.addClass('select-hidden'); 
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select-styled"></div>');

  var $styledSelect = $this.next('div.select-styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
      'class': 'select-options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
      $('<li />', {
          text: $this.children('option').eq(i).text(),
          rel: $this.children('option').eq(i).val()
      }).appendTo($list);
  }

  var $listItems = $list.children('li');

  $styledSelect.click(function(e) {
      e.stopPropagation();
      $('div.select-styled.active').not(this).each(function(){
          $(this).removeClass('active').next('ul.select-options').hide();
      });
      $(this).toggleClass('active').next('ul.select-options').toggle();
  });

  $listItems.click(function(e) {
      e.stopPropagation();
      $styledSelect.text($(this).text()).removeClass('active');
      $this.val($(this).attr('rel'));
      $list.hide();
      //console.log($this.val());
  });

  $(document).click(function() {
      $styledSelect.removeClass('active');
      $list.hide();
  });

});

// 


// Textarea
$(".textarea").click(function(event){
    if($(".contact__mail").css("right") == "10px"){
        event.stopPropagation();
        $(".contact__mail").css({"opacity":"0", "visibility":"hidden"});
    }
    $(document).click(function() {
        $(".contact__mail").css({"opacity":"1", "visibility":"visible"});
    });
})
});