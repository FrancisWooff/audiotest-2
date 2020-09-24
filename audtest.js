var but = document.querySelectorAll("button");
var vid = document.querySelector("video");
var trx = vid.audioTracks;
console.log(vid);
console.log(trx);

but.forEach(prsd);
function prsd(item, index) {
    var x = index;

    item.addEventListener("click",function(){
    
    var i;
    for (i = 0; i < but.length; i++){
    but[i].style.border = "none";
    trx[i].enabled = false;
    }
    
    but[x].style.border = "2px solid red";
    trx[x].enabled = true;
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
