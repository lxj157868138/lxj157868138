var reg=document.getElementById("reg");
var button=document.getElementsByTagName("button");
var noReg=button[2]
var hadReg=button[4]
var Limg1=document.getElementById("left").children[0]
var Limg2=document.getElementById("left").children[1]
var Rimg1=document.getElementById("right").children[0]
var Rimg2=document.getElementById("right").children[1]

var login=document.getElementById("login")
noReg.onclick=function(){
    login.style="transform: rotate3d(0,1,0,180deg);opacity:0;z-index:-1";
    reg.style="transform: rotate3d(0,1,0,360deg);opacity:0.9;z-index:1";
    Limg1.style="transform: translateX(-500px);opacity:0";
    Limg2.style="transform: translateX(0px);opacity:1";
    Rimg1.style="transform: translateX(500px);opacity:0";
    Rimg2.style="transform: translateX(0px);opacity:1";
}
hadReg.onclick=function(){
    reg.style="transform: rotate3d(0,1,0,180deg);opacity:0;z-index:-1";
    login.style="transform: rotate3d(0,1,0,360deg);opacity:1;z-index:1";
    Limg1.style="transform: translateX(0px)";
    Limg2.style="transform: translateX(-500px)";
    Rimg1.style="transform: translateX(0px)";
    Rimg2.style="transform: translateX(500px)";

}

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
