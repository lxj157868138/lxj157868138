$(function(){
    var fanzhuan1=$("div[class='zhuti container'] div[class='col-md-4 col-sm-12 shiju']:first div[class='card fanzhuan'] ");
    var fanzhuan2=fanzhuan1.parent().next().children("div[class='card fanzhuan']")
    var fanzhuan3=fanzhuan2.parent().next().children("div[class='card fanzhuan']")
    fanzhuan1.hover(
        function(){
        fanzhuan1.css({"transform":"rotate3d(0,1,0,360deg)","box-shadow":"5px 5px 6px #000"});},
        function(){
        fanzhuan1.css({"transform":"","box-shadow":"0px 0px 0px #fff"});}
    )
    fanzhuan2.hover(
        function(){fanzhuan2.css({"transform":"rotate3d(0,1,0,360deg)","box-shadow":"5px 5px 6px #000"});},
        function(){
        fanzhuan2.css({"transform":"","box-shadow":"0px 0px 0px #fff"});}
    )
    fanzhuan3.hover(
        function(){
        fanzhuan3.css({"transform":"rotate3d(0,1,0,360deg)","box-shadow":"5px 5px 6px #000"});},
        function(){
        fanzhuan3.css({"transform":"","box-shadow":"0px 0px 0px #fff"});
    }
    )



    $(".chanpinzhichi ul").on("mouseenter","img",function(){
        $(this).css("transform","rotate(360deg)")
    })
    .on("mouseleave","img",function(){
        $(this).css("transform","rotate(0deg)")
    })
    .on("mouseenter","a",function(){
        $(this).css("font-size","22px")
    })
    .on("mouseleave","a",function(){
        $(this).css("font-size","16px")
    })


    $(`div[class="zhuti container"]`).children(".diejiadakuang").css({"opacity":"0","transform":"translateX(-500px)"})
    $(`div[class="zhuti container"]`).children(".diejiadakuang2").css({"opacity":"0","transform":"translateX(500px)"})
    $(`div[class="zhuti container"]`).children(".git_dakuang").css({"opacity":"0","transform":"translateX(-500px)"})
    $(`div[class="zhuti container"]`).children(".diejiadakuang3").css({"opacity":"0","transform":"translateX(500px)"})


    setInterval(function(){
        if($("html").scrollTop()>1050){
            $(".diejiadakuang").css({"opacity":"1","transform":"translateX(0px)","transition":"all 1s linear"})
        }
        if($("html").scrollTop()>1450){
            $(".diejiadakuang2").css({"opacity":"1","transform":"translateX(0px)","transition":"all 1s linear"})
        }
        if($("html").scrollTop()>2000){
            $(".git_dakuang").css({"opacity":"1","transform":"translateX(0px)","transition":"all 1s linear"})
        }
        if($("html").scrollTop()>2800){
            $(".diejiadakuang3").css({"opacity":"1","transform":"translateX(0px)","transition":"all 1s linear"})
        }
    },1)






})