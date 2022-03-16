document.getElementById("border-add").addEventListener("click", function(){
    const borderColor = document.getElementById("friend-container");
    borderColor.style.border = "2px solid red";
    borderColor.style.padding = "20px";
});


document.getElementById("background-color").addEventListener("click", function(){
    const friends = document.getElementsByClassName("friends");
    for(const friend of friends){
        friend.style.backgroundColor = "pink";
        friend.style.padding = "10px";
        friend.style.margin = "10px";
    }
});

document.getElementById("add-friend").addEventListener("click", function(){
    const addFrind = document.getElementById("friend-container");
    const friendDiv = document.createElement("div");
    friendDiv.classList.add("friends");
    friendDiv.innerHTML = `
    <h3>Friend 1</h3>
    <p>Lorem ipsum dolor sit amet.</p>
    `
    addFrind.appendChild(friendDiv);
});

