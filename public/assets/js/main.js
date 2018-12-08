 $(document).ready(function(){

    //Settings
    var a;
    var blocks = [0,1,2];
    var owl = $('.owl-carousel');
    var siz = $(".block").width();
    for (i = 0; i < blocks.length; ++i) {
        switch (i) {
            case 0:
                $(".dict__col").eq(blocks[i]).css("left", "0");
            break;
            case 1:
            $(".dict__col").eq(blocks[i]).css("left", siz +45 + "px");
            break;
            case 2:
            $(".dict__col").eq(blocks[i]).css("left", (siz+45)*2 +"px");
            break;
        }
    }

    $(".dict__row").css("width", siz*3 + 90 + "px");

    // Burger menu
    var c = true;
    $(".burger" ).click(function(event) {
        $(this).toggleClass("burger_active"); 
        
        if (c){
        $("#burger-menu").css("right", "0");
        c = false;
        $("body").css("overflow", "hidden");
        }else{
        $("#burger-menu").css("right", "-100%");
        c = true;
        $("body").css("overflow", "auto");
        
        }
        event.stopPropagation();
    });
    $(".burger-menu" ).click(function(event) {
       
        
        event.stopPropagation();
    });
   
    // 

    // Animation of blocks and pin
    $(".dict__col").click(function(){
        a = $(this).index();
    
        
       
        if($(".dict__col").eq(blocks[0]).hasClass("pinned") && a !== blocks[0]){
            blocks = jQuery.grep(blocks, function(value) {
                return value != a;
            });
            var b0 = blocks[0];
            blocks = jQuery.grep(blocks, function(value) {
                return value != blocks[0];
            });
            blocks.unshift(a);
            blocks.unshift(b0);
            if($(".dict__col").eq(blocks[2]).hasClass("pinned") || $(".dict__col").eq(blocks[1]).hasClass("pinned")){
                return false;
            }
            else{
                var i;
                for (i = 0; i < blocks.length; ++i) {
                    $(".dict__col").eq(i).removeClass("dict__col-active");
                    $(this).addClass("dict__col-active");
                    owl.trigger('to.owl.carousel', [$(this).index(), 300]);

                    switch (i) {
                        case 0:
                            $(".dict__col").eq(blocks[i]).css("left", "0");
                        break;
                        case 1:
                        $(".dict__col").eq(blocks[i]).css("left", siz+45 + "px");
                        break;
                        case 2:
                        $(".dict__col").eq(blocks[i]).css("left", (siz+45)*2 +"px");
                        break;
                    }
                }
            }
        }if($(".dict__col").eq(blocks[0]).hasClass("pinned") && a === blocks[0]){
            return false;
        }
        
        // Second
        if($(".dict__col").eq(blocks[1]).hasClass("pinned") && a === blocks[2]){
            var tem = blocks[0];
            var tem2 = blocks[2];
            blocks[2] = tem;
            blocks[0] = tem2;

            if($(".dict__col").eq(a).hasClass("pinned")){

                return false;
            }
            else{
                var i;
                for (i = 0; i < blocks.length; ++i) {
                    $(".dict__col").eq(i).removeClass("dict__col-active");
                    $(this).addClass("dict__col-active");
                    owl.trigger('to.owl.carousel', [$(this).index(), 300]);

                    switch (i) {
                        case 0:
                            $(".dict__col").eq(blocks[i]).css("left", "0");
                        break;
                        case 1:
                        $(".dict__col").eq(blocks[i]).css("left", siz+45 + "px");
                        break;
                        case 2:
                        $(".dict__col").eq(blocks[i]).css("left", (siz+45)*2 +"px");
                        break;
                    }
                }
            }
        }
        if($(".dict__col").eq(blocks[2]).hasClass("pinned") && a === blocks[1]){
            var tem = blocks[0];
            var tem2 = blocks[1];
            blocks[1] = tem;
            blocks[0] = tem2;

            if($(".dict__col").eq(a).hasClass("pinned")){
                return false;
            }
            else{
                var i;
                for (i = 0; i < blocks.length; ++i) {
                    $(".dict__col").eq(i).removeClass("dict__col-active");
                    $(this).addClass("dict__col-active");
                    
                        owl.trigger('to.owl.carousel', [$(this).index(), 300]);
                       
                        switch (i) {
                            case 0:
                                $(".dict__col").eq(blocks[i]).css("left", "0");
                            break;
                            case 1:
                            $(".dict__col").eq(blocks[i]).css("left", siz +45+ "px");
                            break;
                            case 2:
                            $(".dict__col").eq(blocks[i]).css("left", (siz+45)*2 +"px");
                            break;
                        }
                }
            }
        }
        if(!$(".dict__col").eq(blocks[2]).hasClass("pinned") && !$(".dict__col").eq(blocks[0]).hasClass("pinned") && !$(".dict__col").eq(blocks[1]).hasClass("pinned")){
            blocks = jQuery.grep(blocks, function(value) {
                return value != a;
            });
            blocks.unshift(a);
            var i;
            for (i = 0; i < blocks.length; ++i) {
                $(".dict__col").eq(i).removeClass("dict__col-active");
                $(this).addClass("dict__col-active");
                owl.trigger('to.owl.carousel', [$(this).index(), 300]);

                switch (i) {
                    case 0:
                        $(".dict__col").eq(blocks[i]).css("left", "0");
                    break;
                    case 1:
                    $(".dict__col").eq(blocks[i]).css("left", siz+45 + "px");
                    break;
                    case 2:
                    $(".dict__col").eq(blocks[i]).css("left", (siz+45)*2 +"px");
                    break;
                }
            }
        }
    });

    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:1
            },
            1000:{
                items:1
            }
        }
    })

    // Кнопка Copy
    $(".copy").click(function(event){
        // Копирование в буфер
        var $temp = $("<input>");
        $("body").append($temp);
        var element = $(this).attr("rel");
        $temp.val($(element).find("textarea").val()).select();
        document.execCommand("copy");
        $temp.remove();

        // Подсказка
        var a = $(this);
        a.find(".copy-message").fadeIn();
        setTimeout(function(){
            a.find(".copy-message").fadeOut();
         }, 1000);
        event.stopPropagation(); 
    })
    // 

     // Кнопка Pin
     $(".pin").click(function(event){
        $($(this).attr("rel")).toggleClass("pinned");
        $(this).toggleClass("pin-active");
        event.stopPropagation(); 
    })
    // 
var sd = true;
    // Кнопка TextSize
    $(".textsize").click(function(event){
        $(this).toggleClass("pin-active");
        if(sd){
        $(this).find(".textsize-pop").show().css("display", "flex");
        sd = false;
        }else{
            $(this).find(".textsize-pop").hide();
            sd = true;
        }
        event.stopPropagation(); 
    });
       
 
    $('.slider').on('change', function () {
        var as = $(".textsize").attr("rel");
        var v = $(this).val();
        $(as).find("textarea").css('font-size', v + 'px')
        // $('span').html(v);
    });
    // 
    var sd = true;
     // Кнопка Share
     $(".share").click(function(event){
        $(this).toggleClass("pin-active");
        
        if(sd){
            $(this).find(".share-pop").show().css("display", "flex");
            sd = false;
            }else{
                $(this).find(".share-pop").hide();
                sd = true;
            }
        event.stopPropagation(); 
    });
    $("body").click(function(){
        $(".share-pop").hide();
        $(".share").removeClass("pin-active");
        $(".textsize-pop").hide();
        $(".textsize").removeClass("pin-active");
        $("#burger-menu").css("right", "-100%");
        c = true;
        $("body").css("overflow", "auto");
    })
 
    // 
    


    // Одинаковые высоты для колонок
    var maxheight = 0;
    $(".dict__transcript").each(function() {
    if($(this).height() > maxheight) { maxheight = $(this).height(); }
    });
    $(".dict__transcript").height(maxheight);

    $(".dict__examples").each(function() {
        if($(this).height() > maxheight) { maxheight = $(this).height(); }
        });
    $(".dict__examples").height(maxheight);

    // Высота для dict__row
    $(".dict__row").css("height", $(".dict__col").height());
    // 


});
