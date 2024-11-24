// Soal 1
function hitungLingkaran(){
    var radius = document.getElementById("radius").value;
    if (radius > 0){
        var luas = 3.14 * radius * radius;
        var keliling = 2 * 3.14 * radius;
        document.getElementById("lingkaranOutput").
        innerText = "luas : " + luas + "cm², keliling : "
        + keliling + "cm²";
    }else {
        document.getElementById("lingkaranOutput")
        innerText = "Masukkan jari-jari yang valid!";
    }
}

// soal 2
function hitungDuit(){
    var rupiah = document.getElementById("rupiah").value;
    if (rupiah > 0){
        var kurs = 15870
        var dollar = rupiah / kurs;
        document.getElementById("hasilDuit").innerText =
        "Nilai : $" + dollar.toFixed(2);
    }else {
        document.getElementById("hasilDuit").innerText =
        "Masukkan Nilai yang Valid !!"
    }
}

//soal 3
function HitungPerjumlahan(){
    var biL2 = parsefloat(
        document.getElementById
        ("biL2").value) || 0;
    var biL2 = parsefloat(
        document.getElementById
        ("biL2").value) || 0;
    var jumlah = biL1 + biL2;
    document.getElementById(
        "hasiljumlah")
        .innerText ="Jumlah: "
        + jumlah.tofixed(2);    
}