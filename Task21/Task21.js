// task-1
// console.log('My name is Kenan');

// task-2
// let user_name = 'Kenan'
// console.log(user_name)

// task-3
// person
// $add

// task-4
// let book_price =  750
// let book_amount = 14
// let total_price = book_price * book_amount
// console.log(total_price)

// task-5
// let kmh_speed = 75;
// let ms_speed = kmh_speed * 1000 / 3600
// console.log(ms_speed)

// task-6
// let age = Number(prompt('Doğum Tarixinizi Girin'))
// let day = (2024 - age) * 365
// alert(day)

// task-7
// let num = 14
// let calc = (num ** 5) / 3
// console.log(calc)

// task-8
// let  first_name = prompt("sizin adınız:")
// let last_name = prompt("sizin soy adınız:")
// alert('Sizin adınız:' + " " + first_name + " " + last_name + " Tanışlığımıza çox şadam!")

// task-9
// let first_name = "Murad"
// let last_name = "Orucov"
// alert("Sizi bir daha görməyimizə şadıq:" + " " + first_name + " " +last_name)

// task-10

// let user_name = prompt("Aınızı daxil edin:")
// alert(user_name.length)

// task-11

// let user_name = "Jamila"
// let surname = "Kamilova"
// let full_name = user_name + " " + surname
// console.log(full_name.charAt(0))
// console.log(full_name.charAt(6))

// task-12

// let user_name = prompt("Adinizi daxil edin:")
// let surname = prompt("soyadinizi daxil edin:")
// let full_name = surname + "\r\n" + user_name
// console.log(full_name)

// task-13
// let user_name = prompt("Salam (adInız)!")
// alert("Salam " + user_name + "!")

// task-14
// let num_1 = Number(prompt('1-ci Rəqəmi daxil edin'))
// let num_2 = Number(prompt('2-ci Rəqəmi daxil edin'))
// console.log((num_1 + num_2) + "\r\n"+( num_1 - num_2) +"\r\n"+ (num_1 * num_2) +"\r\n" + (num_1 / num_2))

// task-15
// let num_1 = 12345 ;
// let num_2 = 98765 ;
// let total = String((num_1 * num_2 ));
// console.log(total.charAt(5))

// task-16
// "" + 1 + 0 = "1"
// "" - 1 + 0 = -1
// "true" - false =NaN
// 6 / "3" = 2
// 4 + 5 + "px" = 9px
// "$" + 4 +5 = $45
// "4" - 2 = 2
//  "4px" - 2 + "px" = Nanpx
//  7 / 0 = infinity
//  "-9" + 5 = -95
//  "-9" - 5 = -14
// null + 1 = 1
// undefined + 1 =NaN

// task-17

// let num_1 = Number(prompt("dörd rəqəmli ədəd daxil et:"))
// let num_2 = Number(prompt("dörd rəqəmli ədəd daxil et:"))
// let total = num_1 + num_2
// console.log(total)

// taks-18

// let user_name = prompt("Adınızı daxil edin:")
// let last_name = prompt("Soy adınızı daxil edin:")
// alert("Salam " + user_name + "!")

// task-19

// let price = prompt("Qiyməti daxil edin (539.90):")
// let slice = price.split(".")
// let manat = slice[0]
// let qepik = slice[1]
// console.log(`${manat} manat ${qepik} qepik`)

// task-20

// let price = Number(prompt("Maaşınızı daxil edin:"))
// alert("Vergisiz maaşınız:" + ( price + (price * 13 / 100) ) )

// task-21
// let user_name = prompt("Ad,Soyad,Ata adı daxil edin:");
// let full_name = user_name.split(" ");
// let user = (full_name[0]);
// let surname = (full_name[1][0]);
// let parent = (full_name[2][0]);
// console.log(`${user} ${surname}.${parent}.`);

//task-22
// let price = Number(prompt("Məbləği  daxil edin"));
// let faiz = Number(prompt("Faizi  daxil edin"));
// let date = Number(prompt("Müddəti  daxil edin"));
// let total_price = (price*faiz)/100 ;
// let qazanc = (total_price*date) + price;
// alert(`qazancınız: ${qazanc}`);

//task-23
// let value = 10
// console.log(value<11);
// console.log(value<=10);
// console.log(value<20);
// console.log(value<11);
// console.log(value<19);

// let value = 20
// console.log(value<11);
// console.log(value<=10);
// console.log(value<20);
// console.log(value<11);
// console.log(value<19);



// task-24
// let age = prompt("yaşınızı daxil edin:")
// if(age<18){
//     alert("Access denied")
// }else{
//     alert("Access granted")
// }

//task-25

// let value = prompt("3 dənə 2 rəqəmli ədəd daxil edin:").split(" ")
// let num_1= value[0]
// let num_2= value[1]
// let num_3= value[2]

// if(num_1<num_2 && num_2<num_3 || num_1>num_2 && num_2>num_3){
//     alert(num_2)
// }else if (num_1>num_3 && num_2>num_3 || num_1<num_3 && num_2>num_3){
//     alert(num_3)
// }else if (num_1>num_2 && num_1<num_3 || num_1<num_2 && num_1>num_3){
//     alert(num_1)
// }






//task-26

// let year = +prompt("il daxil edin :")
// if(year%4==0){
//     alert("Bu il uzun ildir")
// }else{
//     alert("Bu il qısa ildir")
// }








//task-27
// let id = prompt("enter product id:");
// switch (id) {
//   case "1":
//     alert("Available 10 pcs.");
//     break;

//   case "2":
//     alert("Available 256 pcs.");
//     break;
//   case "3":
//     alert("Available 53 pcs.");
//     break;
//   case "4":
//     alert("There are 3 available.");
//     break;
//   default:
//     alert("Out of stock");
//     break;
// }

// task-28
// let gender = prompt("Cinsiyyətinizi daxil edin (M/F) :")
// if(gender=="M"){
//     alert("Male")
// }
// else if(gender=="F"){
//     alert("Female")
// }
// else{
//     alert("Cinsiyyətinizi düzgün qeyd edin")
// }

//task-29
// let id = prompt("Ay-ı daxil edin:");
// switch (id) {
//   case "1":
//     console.log("Yanvar");
//     break;

//   case "2":
//     console.log("Fevral");
//     break;
//   case "3":
//     console.log("Mart");
//     break;
//   case "4":
//     console.log("Aprel");
//     break;
//   case "5":
//     console.log("May");
//     break;
//     case "6":
//     console.log("Iyun");
//     break;
//     case "7":
//     console.log("Iyul");
//     break;
//     case "8":
//     console.log("Avqust");
//     break;
//     case "9":
//     console.log("Sentyabr");
//     break;
//     case "10":
//     console.log("Oktyabr");
//     break;
//     case "11":
//     console.log("Noyabr");
//     break;
//     case "12":
//     console.log("Dekabr");
//     break;
//     default:
//         alert("Düzgün seçim edin")
// }

//task-30

// let date = prompt("Tarixi daxil edin(2009.12.19):").split(".");
// let year = date[0];
// let month = date[1];
// let day = date[2];

// switch (month) {
//   case "1":
//     alert(`${day} Yanvar ${year}`);
//     break;
//   case "2":
//     alert(`${day} Fevral ${year}`);
//     break;
//   case "3":
//     alert(`${day} Mart ${year}`);
//     break;
//   case "4":
//     alert(`${day} Aprel ${year}`);
//     break;
//   case "5":
//     alert(`${day} May ${year}`);
//     break;
//   case "6":
//     alert(`${day} Iyun ${year}`);
//     break;
//   case "7":
//     alert(`${day} Iyul ${year}`);
//     break;
//   case "8":
//     alert(`${day} Avqust ${year}`);
//     break;
//   case "9":
//     alert(`${day} Sentyabr ${year}`);
//     break;
//   case "10":
//     alert(`${day} Oktyabr ${year}`);
//     break;
//   case "11":
//     alert(`${day} Noyabr ${year}`);
//     break;
//   case "12":
//     alert(`${day} Dekabr ${year}`);
//     break;
//   default:
//     alert("doğru seçim edin");
// }