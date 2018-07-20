$(document).ready(function(){
    if ($(window).width() > 1279){
        $(".btn-menu").click(function () {  
            if($("nav").css("display") == "none"){   
                $("nav").css("display", "block");
                $("content").css("left", "240px");
            } else {  
                $("nav").css("display", "none");
                $("content").css("left", "0");  
            }  
        });
    }else{
        $(".btn-menu").click(function () {  
            if($("nav").css("display") == "none"){   
                $("nav").css("display", "block");
            } else {  
                $("nav").css("display", "none");
            }  
        });
    }
    
    $(".btn-video").click(function () {  
        if($(".menu-video").css("display") == "none"){   
            $(".menu-video").css("display", "block");
        } else {  
            $(".menu-video").css("display", "none");
        }  
    });
});




