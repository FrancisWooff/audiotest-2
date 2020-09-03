window.onVidyardAPI = (vidyardEmbed) => {
vidyardEmbed.api.addReadyListener((_, player) => {

var but = document.getElementsByTagName("button");
var vid = VidyardV4.players[0];
//add an extra function per added channel on your test page as necessary, increment the 2 numbers in brackets (n.b. as this numvering begins with 0 it will be 1 less than your slider label)
but[0].onclick = function() {
vid.setAudioTrack(0);
}
but[1].onclick = function() {
vid.setAudioTrack(1);
}
but[2].onclick = function() {
vid.setAudioTrack(2);
}
})};

var slid = document.querySelectorAll("[type=range]");
var val = document.querySelectorAll("[type=number]");
//add an extra function per added channel on your test page as necessary, increment the 2 numbers in square brackets (n.b. as this numvering begins with 0 it will be 1 less than your slider label)
slid[0].oninput = function() {
  val[0].value = this.value;
}
slid[1].oninput = function() {
  val[1].value = this.value;
}
slid[2].oninput = function() {
  val[2].value = this.value;
}
