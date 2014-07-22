$(document).ready(function() {

    var counter = 0;

    $("#page").prepend(
      "<button onclick='window.Grooveshark.togglePlayPause()' id='pl'>Play/Pause " + counter + "</button>" +
      "<button onclick='window.Grooveshark.togglePlayPause()' id='timer'>Try it" + "</button>");

    $("#pl").click( function() {
        counter++;
        $("#pl").html("Play/Pause " + counter);
    });
    $("#timer").click( function() {counter++;setInterval(function(){alert("Hello");}, 3000);
    });

});

