function createCustomElement(){
    let elementType = document.getElementById("elementType").value;
    let content = document.getElementById("elementContent").value;

    document.getElementById("elementContent").value = "";
    let newElement = document.createElement(elementType);

    switch (elementType) {
        case "img":
            newElement.src = "https://wallpapers.com/images/hd/memories-of-tom-and-jerry-aesthetic-collage-ojqgvgs8r1ja37dg.jpg";
            newElement.alt = content;
            newElement.src = content;
            newElement.style.width = "100px";
        default:
            newElement.textContent = content;
    }
    let playground = document.getElementById("element-playground");
    playground.appendChild(newElement);
}

    function clearPlayground() {
        let playground = document.getElementById("element-playground");
        playground.innerHTML = "";
        playground.innerHTML = "<p>Elements will be created here dynamically!</p>";
    }
    function addState() {
       const input = document.getElementById("newState");
       const stateName = input.value.trim();
        if(stateName !== ""){
            const li = document.createElement("li");
            li.textContent = stateName;
            document.getElementById("states-list").appendChild(li);
            input.value = ""; 
        }
        else{
            alert("Please enter a state name.");
        }
 }
    function removeLastState(){
        let stateList = document.getElementById("states-list");
        let lastItem = stateList.lastElementChild;
        if(lastItem){
            lastItem.style.backgroundColor = "white";
            lastItem.style.color = "black";
            setTimeout(function() {
                lastItem.remove();
            }, 250);
        }
        else{
            alert("No states to remove.");
        }
        
    }
    function sortStates() {
        let stateList = document.getElementById("states-list");
        let items = Array.from(stateList.children);
        items.sort(function(item1, item2) {
            return item1.textContent.localeCompare(item2.textContent);
        })
        console.log(items);

        stateList.innerHTML = ""; 
        for(let i = 0; i < items.length; i++) {
            items[i].classList.add("fade-in");
            stateList.appendChild(items[i]);
        }
    }
    function highlightStates(){
        let items = document.querySelectorAll("#states-list li");
        items.forEach(li => {
            li.classList.toggle("highlight");
        })
    }


