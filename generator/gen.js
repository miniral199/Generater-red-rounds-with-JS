var button = document.getElementById("butt");
button.addEventListener("click",MyFunc);
function MyFunc(){
    var i = document.getElementById("genId").value;
    var x = 1;
     while(x<=i){
        var newDiv = document.createElement("div");
        var my_div = document.getElementById("exit"); 
        document.body.insertBefore(newDiv,my_div);
        newDiv.innerHTML = x;
        newDiv.style.width = "100px";
        newDiv.style.height = "100px";
        newDiv.style.backgroundColor = "crimson";
        newDiv.style.borderRadius = "50%";
        newDiv.id = "newElem";
        x++;
    }
}
