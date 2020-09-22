var but = document.querySelectorAll("button");
var vid = document.querySelector("video");

but.forEach(prsd);
function prsd(item, index) {
    item.addEventListener("click",function(){
    var i = index;
    vid.audioTracks[i].enabled = true;
    vid.audioTracks[!i].enabled = false;
    })
}

var slid = document.querySelectorAll("[type=range]");
var ipnm = document.querySelectorAll("[type=number]");

slid.forEach(slide);
function slide(item, index) {
    item.addEventListener("input",function(){
    var i = index;
    ipnm[i].value = this.value;
    })
}
