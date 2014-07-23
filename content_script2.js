$(document).ready(function() {

    var counter = 0;
    var num = (Math.floor((Math.random() * 10) + 26)*1000);
    var num2 = (Math.floor((Math.random() * 5) + 1)*1000);
    var players = 5;
    var play = false;

    $("#page").prepend(
      "<button onclick='window.Grooveshark.togglePlayPause()' id='timer'>Start Game" + counter + "</button>" +
          "<button onclick='window.Grooveshark.togglePlayPause()' id='playpause'>Play/Pause </button>");



    $("#timer").click(function () {
    //while(players !=1) {
        players = players - 1;
        $("#timer").html("Start Game " + counter);
        if (play === false) {
            counter++;
            setTimeout(function () {
                $("#playpause").trigger("click");
                var play = true;

            }, 10000);
        }
        if (play === true) {
            setTimeout(function () {
                $("#playpause").trigger("click");
                var play = false;
            }, 3000);
        }
    //}
});



});


