document.querySelector("form").addEventListener("submit", todoApp);
let taskArr=[];
function todoApp(event){
    event.preventDefault();
    let taskName= document.querySelector("#task").value;
    let priority= document.querySelector("#priority").value;
    let taskObj={
        task:taskName,
        prior:priority,
    };
    taskArr.push(taskObj);
    displayTable(taskArr);
}
function displayTable(taskArr){
    document.querySelector ("tbody").innerHTML = "";
    //console.log(taskArr.length); 
    taskArr.forEach(function (elem) { 
        let row = document.createElement("tr"); 
        let coll = document.createElement("td"); 
        coll.innerText = elem.task; 
        let col2 = document.createElement("td"); 
        col2.innerText = elem.prior; 
        if (elem.prior == "High") { 
            col2.style.backgroundColor="red"; 
        } else { 
            col2.style.backgroundColor = "green"; 
        } 
        let col3 = document.createElement("td"); 
        col3.innerText = "Delete"; 
        col3.addEventListener("click", function (event){ 
            event.target.parentNode.remove(); 
        }); 
        col3.style.color="red"; 
        row.append(coll, col2, col3);
        document.querySelector("tbody").append(row);
        });

}