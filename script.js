const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

var overlay = document.querySelector("#overlay")
var iscroll = document.querySelector("#scroll")

overlay.addEventListener("mouseenter",function(){
    iscroll.style.scale = 1
})
overlay.addEventListener("mouseleave",function(){
    iscroll.style.scale = 0
})
overlay.addEventListener("mousemove",function(dets){
    iscroll.style.left = `${dets.x - 45}px`
    iscroll.style.top = `${dets.y - 38}px`
})

