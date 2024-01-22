// const user = {
//     name:"Kenan",
//     gendar:"Male",
//     birtday:"12.07.2005",
//     age : "19",
//     setAge: function (newAge) {
//         this.age = newAge
//     }, 
//     getYearsBeforeRetirement: function () {
//         return 65 - this.age
//     }
// }

// user.setAge(20)
// console.log(user.getYearsBeforeRetirement());
// const client = {
//     fullName: "Aliyev Kenan",
//     creditLimit: 2500,
//     balanc: 500,
//     precentOfMinPayment: 15,
//     getBalanc() {
//         if (this.balanc >= 0) {
//             return `Balansiniz ${this.balanc} AZN`
//         } else {
//             return `borcunuz ${(-1) * this.balanc} AZN`
//         }
//     },

//     getMinPaymant() {
//         if (this.balanc >= 0) {
//             return `Sizin borcunuz yoxdur`
//         } else {
//             let minPay = (-1) * this.balanc * this.precentOfMinPayment / 100;
//             return `Minimum ödənişiniz ${minPay} AZN`
//         }
//     },
//     withdraw (param) {
//         if (param <= this.balanc){
//             this.balanc -= param
//         } else{
//             let totalbalance = this.balance + this.creditLimit 
//             if (param >= this.balanc){
//                 param -= this.balanc
//                 this.creditLimit -= param
//                 this.balanc = -param
//             } else{
//                 return `Max kredit liminitiz ${this.creditLimit} `
//             }

//         }
//     }
// }
// console.log(client.getBalanc());
// client.withdraw(+prompt())
// console.log(client.withdraw());
// console.log(client.getMinPaymant())



