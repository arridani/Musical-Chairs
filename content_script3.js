$(document).ready(function() {

    var counter = 0;
    var num = (Math.floor((Math.random() * 10) + 26)*1000);
    var num2 = (Math.floor((Math.random() * 5) + 1)*1000);
    var players = 5;
    var play = false;

    $("#page").prepend(
      "<button onclick='window.Grooveshark.play()' id='play'>Play" + counter + "</button>" +
      "<button onclick='window.Grooveshark.pause()' id='pause'>Pause </button>");



    $("#play").click(function () {
 //for (var i = 0; i < players; i++) {
        $("#play").html("Play" + counter);
        $("#pause").html("Pause" + counter);
        counter++;

        setTimeout(function () { $("#play").trigger("click");}, 3000);
        setTimeout(function () { $("#pause").trigger("click");}, 5000);
     //}
});



});


