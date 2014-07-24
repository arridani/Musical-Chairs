var input = document.getElementById("userInput").value;
var counter = 0;
var num = (Math.floor((Math.random() * 10) + 26)*1000);
var num2 = (Math.floor((Math.random() * 5) + 1)*1000);
var players = 5;


$(document).ready(function() {


    $("#page").prepend(
    "<div id='intro'> </div>" + "<input type='text' id='userInput'>" + "<input type='submit' value='submit' id='submit'> " +"</br>" +
    "<input type='checkbox' name='settings' id='blind'> Play Blind </input>" + "</br>" +
    "<input type='checkbox' name='settings' id='friend'> Sit on a Friend</input>" + "</br>" +
    "<input type='checkbox' name='settings' id='reverse'> Reverse flow </input>" +"</br>" +
    "<button id='start'>Start</button>" +
    "<button onclick='window.Grooveshark.play()' id='play'>Play" + counter + "</button>" +
    "<button onclick='window.Grooveshark.pause()' id='pause'>Pause" + counter + "</button>"

    );




    document.getElementById("intro").innerHTML = "Welcome to Musical Chairs!";

    $("#submit").click(function () {
        alert(input);
    });

    $("#start").click(function () {
         //for (var i = 0; i < players; i++) {
              console.log("About to hit pause");
              setTimeout(function () { $("#pause").trigger("click"); }, 3000);
              console.log("About to hit play");
              setTimeout(function () { $("#play").trigger("click"); }, 5000);
          //}
    });


});


