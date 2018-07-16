$(document).ready(function() {

    var counter = 0;
    var num = (Math.floor((Math.random() * 10) + 26)*1000);

    $("#page").prepend(
      "<button onclick='window.Grooveshark.play()' id='timer'>Start Game </button>" +
          "<button onclick='window.Grooveshark.togglePlayPause()' id='playpause'>Play/Pause </button>");


    $("#timer").click( function() {
        counter++;
        setInterval(function(){
        $("#playpause").trigger("click");
        }, num);
    });

});
