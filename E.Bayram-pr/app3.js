//Paramentleri metot tanimlamak

// function yazdir(ad,soyad){
//     // debugger
//     console.log(ad + " " + soyad);
// }

// // debugger
// yazdir("Temkin","Aliyev");
// yazdir("Kenan","Aliyev");
// yazdir("Ilham","Aliyev");

// function cube(sayi){
//     console.log(sayi*sayi*sayi);
// }
// cube(5);

 let yas = Number(prompt("Yashinizi yazin"));

 function kontrolEt(yas){
    if (yas>=18){
        console.log("Suruculik vesiqesi alabilersiz!!");
    }else{
        console.log("Suruculik vesiqesi alabilmersiz!!!");
    }
 }
kontrolEt(yas);
