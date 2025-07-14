function saveObj() {
    var a = {
        name: "shrey",
        gender: "male",
        age: 30,
        city: "surat",
        mobile: "7016831017"
    };
    var myData = JSON.stringify(a);
    localStorage.setItem("userdata", myData);
}

function saveData() {
    localStorage.setItem("name", "shrey");
    localStorage.setItem("city", "surat");
    document.getElementById("name").innerHTML = "DataSave";
}

function fetchData(key) {
    var a = localStorage.getItem("name");
    console.log( "my name is "+a);
    document.getElementById("name").innerHTML = "name is " +a;
}

function getObjData() {
    var a = localStorage.getItem("userdata");
    var myData = JSON.parse(a);
    document.getElementById("name").innerHTML = myData.name;
    console.log(myData);
}

function removeData(key) {
   localStorage.removeItem("name");
   localStorage.removeItem("city");
   document.getElementById("name").innerHTML = "DataRemoved";
}

function removeAll() {
    localStorage.clear();
}
