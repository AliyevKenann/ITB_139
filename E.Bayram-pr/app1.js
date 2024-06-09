let ad = prompt("Isiminizi giriniz :");
let tckn = prompt("TCKN giriniz :");

kontrolEt(ad,tckn);
// kontrolEt2(ad,tckn);

function kontrolEt(ad,tckn){

    if(ad!=""){
        if(tckn.length ==11){
            alert("Isim ve tckn problemsiz girildi");
            // console.log("Isim ve tckn problemsiz girildi");
        }else{
            alert("Lutfen tc nizi 11 karakter olarak giriniz");
            // console.log("Lutfen tc nizi 11 karakter olarak giriniz");
        }
    }else{
        alert("Lutfen isim alinini bosh birakmayin!!!");
        // console.log("Lutfen isim alinini bosh birakmayin!!!");
    }
}

function kontrolEt2(ad,tckn) {
    if(ad==""){
    console.log("Lutfen isim alinini bosh birakmayin!!!");
    return;
    }
    if(tckn.length!=11){
        console.log("Lutfen tc nizi 11 karakter olarak giriniz");
        return;
    }

    console.log("Isim ve tckn problemsiz girildi");

}