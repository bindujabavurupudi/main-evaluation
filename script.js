var vehicles = []
var content = document.getElementById("content");
document.getElementById("addBtn").addEventListener("click", function(){
    var reg = document.getElementById("reg").value;
    var cat = document.getElementById("cat").value;
    var driver = document.getElementById("driver").value;
    var avail = document.getElementById("avail").value;
    if(!reg || !cat || !driver){
        alert("All fields are required");
        return;
    }
    var obj = {
        reg: reg,
        cat: cat,
        driver: driver,
        avail: avail, 
        img: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/5e80fcb6-3f8e-480c-945b-30a5359eb40e/JNmYjkVr3WOjsrbu.png"

    };
    vehicles.push(obj);
    render(vehicles);
    document.getElementById("reg").value = "";
    document.getElementById("cat").value = "";
    document.getElementById("driver").value = "";

});


function render(list){
    content.innerHTML = "";
    list.forEach(function (v, index){
        var card = document.createElement("div");
        card.className = "card";
        var img = document.createElement("img")
        img.src = v.img;
        var r= document.createElement("p");
        r.innerText = "Reg No: "+v.reg;
        var c = document.createElement("p");
        c.innerText = "Category: " + v.cat;

        var d = document.createElement("p");
        c.innerText = "Driver: " + v.driver;

        var a = document.createElement("p");
        c.innerText = "Status: " + v.avail;

        document.createElement("button");
        btn1.innerText = "Update Driver";

        btn1.addEventListener("click", function(){
            var newName = prompt("Enter new driver name: ");
            if(newName && newName.trim() != ""){
                v.driver = newName;
                render(vehicles);
            }
            else{
                alert("Driver name cannot be empty");
            }
        });
        var  btn2 = document.createElement("button");
        btn2.innerText = "Change Availability";
        btn2.addEventListener('click', function(){
            v.avail = (v.avail === "Available") ?
            "Unavailable" : "Available";
            render(vehicles);
        });

        var btn3 = document.createElement("button");
        btn3.innerText = "Delete";

        btn3.addEventListener("click", function(){
            if(confirm("Delete this vehicle?")){
                vehicles.splice(index, 1);
                render(vehicles);
            }
        });

        card.append(img, r, c, d, a, btn1, btn2, btn3);
        content.append(card);
    });
}

document.getElementById("filterCat").addEventListener("change", applyFilter);
document.getElementById("filterAvail").addEventListener("change", applyFilter);


