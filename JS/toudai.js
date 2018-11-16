var $parent=$(".container:last")
$parent.children(".baikuang:nth-child(2n+1)").css({"opacity":"0","transform":"translateX(500px)"})
$parent.children(".baikuang:nth-child(2n)").css({"opacity":"0","transform":"translateX(-500px)"})
setInterval(function(){
    if($("html").scrollTop()>50){
        $parent.children(".baikuang:eq(0)").css({"opacity":"1","transform":"translateX(0px)","transition":"all 1s linear"})
    }
    if($("html").scrollTop()>600){
        $parent.children(".baikuang:eq(1)").css({"opacity":"1","transform":"translateX(0px)","transition":"all 1s linear"})
    }
    if($("html").scrollTop()>1200){
        $parent.children(".baikuang:eq(2)").css({"opacity":"1","transform":"translateX(0px)","transition":"all 1s linear"})
    }
    if($("html").scrollTop()>1800){
        $parent.children(".baikuang:eq(3)").css({"opacity":"1","transform":"translateX(0px)","transition":"all 1s linear"})
    }
},20)
