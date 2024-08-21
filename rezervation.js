var opDate = document.getElementById("operation-date");
opDate.valueAsDate = new Date();


var respCode = document.getElementById("responsible-code");

var chCode = document.getElementById("ch-code");

var firmaUnvan = document.getElementById("firma-unvan");

var phoneNumber = document.getElementById("phone-number");



var visitorInputs = [];

for (var i = 1; i <= 5; i++) {
    var nameInput = document.getElementById("name-surname-" + i);
    var birthInput = document.getElementById("birth-date-" + i);
    visitorInputs.push([nameInput, birthInput]);
}

// var roomTypeValue = document.querySelector('input[name="oda-tipi"]:checked').value;

var roomCount = document.getElementById("room-count");

var entryDate = document.getElementById("date-entry");

var exitDate = document.getElementById("date-exit");

document.querySelectorAll('input[name="ulasim-tipi"]').forEach((radio) => {
    radio.addEventListener('change', (event) => {
        // Get the value of the selected radio button
        const selectedValue = event.target.value;
        
        if (selectedValue == "KENDİ" && document.querySelector("#flight-info").className.includes("show")) {
            document.getElementById("flight-info-link").click();
        }else if (selectedValue == "UÇAK" && !document.querySelector("#flight-info").className.includes("show")) {
            document.getElementById("flight-info-link").click();
        }
    });
});

var fGelisTarihi = document.getElementById("gelis-tarihi");
var fHavayoluGelis = document.getElementById("havayolu-gelis"); 
var fYonGelis = document.getElementById("ucak-yon-gelis");
var fKalkisSaatGelis = document.getElementById("kalkis-saat-gelis");
var fVarisSaat = document.getElementById("varis-saat");
var fDonusTarihi = document.getElementById("donus-tarihi");
var fHavayoluDonus = document.getElementById("havayolu-donus");
var fYonDonus = document.getElementById("ucak-yon-donus");
var fKalkisSaatDonus = document.getElementById("kalkis-saat-donus");

var notesArea = document.getElementById("rezervation-notes");


function getAllColumnsAsList() {
    var columns = [];
    columns.push(opDate.value);
    columns.push(respCode.value);
    columns.push(chCode.value);
    columns.push(firmaUnvan.value);
    columns.push(phoneNumber.value);
    columns.push(document.querySelector('input[name="optradio"]:checked').value);


    for (var i = 0; i < 5; i++) {
        columns.push(visitorInputs[i][0].value);
        columns.push(visitorInputs[i][1].value);
    }

    columns.push(document.querySelector('input[name="oda-tipi"]:checked').value);
    columns.push(roomCount.value);
    columns.push(entryDate.value);
    columns.push(exitDate.value);
    columns.push(document.querySelector('input[name="ulasim-tipi"]:checked').value);
    columns.push(fGelisTarihi.value);
    columns.push(fHavayoluGelis.value);
    columns.push(fYonGelis.value);
    columns.push(fKalkisSaatGelis.value);
    columns.push(fVarisSaat.value);
    columns.push(fDonusTarihi.value);
    columns.push(fHavayoluDonus.value);
    columns.push(fYonDonus.value);
    columns.push(fKalkisSaatDonus.value);
    columns.push(notesArea.value);

    return columns;
}


function saveClicked(){
    var savedRow = getAllColumnsAsList();
    var strRecords = localStorage.getItem("saved_records");
    if (strRecords == null) {
        strRecords = JSON.stringify([]);
    }
    var recordsFromStorage = JSON.parse(strRecords);
    recordsFromStorage.push(savedRow);
    var strNewRecords = JSON.stringify(recordsFromStorage);
    localStorage.setItem("saved_records", strNewRecords);

    window.location.href = "completed.html";
}