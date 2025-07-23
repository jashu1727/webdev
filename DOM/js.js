document.getElementById("button").onclick = function () {
    var store=document.getElementById("input").value;
    document.getElementById("head").innerText= "Hello,"+store;
}

document.getElementById("box-1").onclick = function(){
        this.style.backgroundColor = "red";
        setTimeout(() => {
                this.style.backgroundColor="white"},3000)
}

document.getElementById("box-2").onclick = function(){
        this.style.backgroundColor = "blue";
        setTimeout(() => {
                this.style.backgroundColor="white"},3000)
}

document.getElementById("box-3").onclick = function(){
        this.style.backgroundColor = "green";
        setTimeout(() => {
                this.style.backgroundColor="white"},3000)
}

document.getElementById("box-4").onclick = function(){
        this.style.backgroundColor = "yellow";
        setTimeout(() => {
                this.style.backgroundColor="white"},3000)
}
