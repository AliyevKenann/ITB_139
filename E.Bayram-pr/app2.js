let fenDogru, fenYanlis = 0;
let puan = 0;
let okulPuan = 0;

let yeniSatir = "\r\n";
let mesaj = "TYT Puan Hesaplama uygulamasi hosgeldiniz!" + yeniSatir
    + "1-Puan hesapla" + yeniSatir
    + "2-Cikis yap";

// alert(mesaj);

let secim = prompt(mesaj);

switch (secim) {
    case "1":

        okulPuani = Number(prompt("Okul puanizi giriniz"));
        turkceDogru = Number(prompt("Turkce dogru sayisi"));
        turkceYanlis = Number(prompt("Turkce yanlis sayisi"));

        matematikDogru = Number(prompt("Matematik dogru sayisi"));
        matematikYanlis = Number(prompt("Matematik yanlis sayisi"));

        sosyalDogru = Number(prompt("Sosyal dogru sayisi"));
        sosyalYanlis = Number(prompt("Sosyal yanlis sayisi"));

        fenDogru = Number(prompt("Fen dogru sayisi"));
        fenYanlis = Number(prompt("Fen yanlis sayisi"));

        //30 8/4= 2 yanlis
        let dogruSayisi = turkceDogru + matematikDogru + sosyalDogru + fenDogru;
        let yanlisSayisi = turkceYanlis + matematikYanlis + sosyalYanlis + fenYanlis;
        let kalanDogruSayi = dogruSayisi - (yanlisSayisi / 4);
        puan = (kalanDogruSayi*4) + 100 + okulPuani;
        alert("TYT Puaniniz : " + puan);
        break;


    case "2":
        alert("Uygulamadan cikis yapildi...");

        break;

    default:
        alert("Lutfen gecerli aralikta deger giriniz!");    
        break;
}