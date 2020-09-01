window.onVidyardAPI = (vidyardEmbed) => {
vidyardEmbed.api.addReadyListener((_, player) => {

var buta = document.getElementById("abut");
var butb = document.getElementById("bbut");
var butc = document.getElementById("cbut");
var vid = VidyardV4.players[0];

buta.onclick = function() {
vid.setAudioTrack(0);
console.log("trk 1");
}
butb.onclick = function() {
vid.setAudioTrack(1);
console.log("trk 2");
}
butc.onclick = function() {
vid.setAudioTrack(2);
console.log("trk 3");
}
})};

var slida = document.getElementById("aslid");
var opa = document.getElementById("la");
slida.oninput = function() {
  opa.value = this.value;
}
var slidb = document.getElementById("bslid");
var opb = document.getElementById("lb");
slidb.oninput = function() {
  opb.value = this.value;
}
var slidc = document.getElementById("cslid");
var opc = document.getElementById("lc");
slidc.oninput = function() {
  opc.value = this.value;
}