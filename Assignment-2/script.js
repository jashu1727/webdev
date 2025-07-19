    function randomcolor() {
        var letters = '0123456789ABCDEF';
        var color = '#';

        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }

        return color;
    }
    var messages = [
    "Click me!",
    "Nice!",
    "Again!",
    "Fast!",
    "Boom!",
    "Try again!",
    "Great!",
    "Catch me!"
];
function randommessage() {
    return messages[Math.floor(Math.random() * messages.length)];
}


    function show() {
        var left = Math.floor(Math.random() * 1001);
        var top = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
        var size = Math.floor(Math.random() * (300 - 50 + 1)) + 50;
        document.getElementById("box").style.display="block";
        document.getElementById("box").style.backgroundColor=randomcolor();
        document.getElementById("box").style.marginLeft=left+"px";
        document.getElementById("box").style.marginTop=top+"px";
        document.getElementById("box").style.width=size+"px";
        document.getElementById("box").style.height=size+"px";
        document.getElementById("box").innerHTML=randommessage();


        
        start = new Date().getTime();
    }
    var start = new Date().getTime();

    document.getElementById("box").onclick = function() {
        document.getElementById("box").style.display="none";
        var end = new Date().getTime();
        var time = (end-start)/1000;
        alert("Your reaction time: " + time + " seconds"); 
        setTimeout(show, Math.random() * 1000 + 1000);
        
    };
