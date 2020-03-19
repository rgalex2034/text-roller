document.addEventListener("DOMContentLoaded", function(){
    var element = document.getElementById("text-roller");
    var text_roller = new TextRoller(element);
    text_roller.start();
});
