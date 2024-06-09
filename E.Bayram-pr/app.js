let vize1 = Number(prompt("Vize 1 notunuzu girin : "));
let vize2 = Number(prompt("Vize 2 notunuzu girin : "));

let final = Number(prompt("Final notunuzu giriniz : "));

let ortalama = (vize1*0.3) + (vize2*0.3) + (final*0.4);

if(ortalama>=60){
    alert("Dersden gecdiniz tebrikler :))"+ ortalama);
    console.log("Dersden gecdiniz tebrikler :))" );
}else{
    alert("Kaldiniz, gecmish olsun :(" + ortalama);
    console.log("Kaldiniz, gecmish olsun :(");
}
