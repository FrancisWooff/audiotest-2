window.onVidyardAPI = (vidyardEmbed) => {
vidyardEmbed.api.addReadyListener((_, player) => {

var but = document.querySelectorAll("button");
var vid = VidyardV4.players[0];

but.forEach(prsd);
function prsd(item, index) {
    item.addEventListener("click",function(){
    var i = index;
    vid.setAudioTrack(i);
    })
}
})};

var slid = document.querySelectorAll("[type=range]");
var ipnm = document.querySelectorAll("[type=number]");

slid.forEach(slide);
function slide(item, index) {
    item.addEventListener("input",function(){
    var i = index;
    ipnm[i].value = this.value;
    })
}
