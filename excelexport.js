function createExcelFile(data, fileName) {
    var wb = XLSX.utils.book_new();
    var ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

    var excelData = XLSX.write(wb, { bookType: "xlsx", type: "base64" });

    var dataUri = "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64," + excelData;

    var link = document.createElement("a");
    link.href = dataUri;
    link.download = fileName + ".xlsx";
    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);
}


function excelClicked() {
    var strRecords = localStorage.getItem("saved_records");
    if (strRecords == null) {
        alert("Kayıt bulunamadı");
    }
    var recordsFromStorage = JSON.parse(strRecords);

    var allRows = [
        ["MÜŞTERİ SAYISI","İşlem tarihi","TEMSİLCİ KODU","CH.KOD","FİRMA ÜNVANI","Cep","KONAKLAMA - GÜNÜBİRLİK","1.İSİM SOY İSİM","DOĞUM TARİHİ","2.İSİM SOY İSİM","DOĞUM T.","3.İSİM SOY İSİM","DOĞUM TARİHİ","4.İSİM SOY İSİM","DOĞUM TARİHİ","5.İSİM SOY İSİM","DOĞUM TARİHİ","ODA TİPİ","Oda sayısı","Giriş T.","Çıkış T.","Ulaşım","Geliş Tarihi","Havayolu","Yön","Kalkış Saati","Varış Saati","Dönüş Tarihi","Havayolu","Yön","Kalkış Saati","AÇIKLAMA"]
    ];

    for (var i = 0; i < recordsFromStorage.length; i++) {
        var row = recordsFromStorage[i];
        row.unshift(i + 1);
        allRows.push(row);
    }
    createExcelFile(allRows, "Rezervasyonlar")
}