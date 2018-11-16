$(function(){
    setInterval(function(){
        if($("html").scrollTop()>200){
          $("#header").css({"transition":"all 1s","visibility":"hidden","opacity":"0","z-index":"10"})
          
      }else
      $("#header").css({"visibility":"visible","transition":"all 1s","position":"fixed","opacity":"1","z-index":"10"})
        
      },200)





      $(".X").click(function(){
        $("#toudaishierji").css({"height":"0","transition":"all .5s"});
        $("#toudaishierji2").css({"height":"0","transition":"all .5s"});
    })
    $("#toudai_li").mouseenter(function(){
        $("#toudaishierji").css({"height":"660px"});
        $("#toudaishierji2").css({"height":"660px"});
    })
    $("#xiala_li").mouseenter(function(){
        $("#toudaishierji2").css({"height":"660px"});
    })
    setInterval(function(){
        $(".X img").css({"position":"relative","width":"10%"}).animate({top:10}).animate({top:-10})
    },500)
    
      
})