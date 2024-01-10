//  Karşılaştırma operatörleri

//  ==      Değerlerin birbirine eşit olma koşuluna bakar
//  ===     Değerlerin ve veri tipinin eşit olma koşuluna bakar
//  !=      Değerlerin eşit olmama koşuluna bakar
//  !==     Değerlerin ve veri tipinin eşit olmama koşuluna bakar
//  >       Büyüktür - küçüktür falan filan
//  <       Büyüktür - küçüktür falan filan
//  >=      Büyük veya eşit - küçük veya eşit falan filan
//  <=      Büyük veya eşit - küçük veya eşit falan filanq

let js = "Java"


// console.log(2 == 2);
// console.log(js == "Java");
// console.log("js" == "Java");

// console.log(2 == "2");
// console.log(2 === "2");

// console.log(!(2 == 2));     /* Veya */      console.log(2 != 2);
// console.log(!(2 != 2));     // Bu şekilde True sonucu verir


// And Operatörü

// console.log( (2 == 2) && ("ibo" == "ibo") );
// console.log( (2 == 4) && ("ibo" == "ibo") );


// or operatörü 

// console.log( (2 == 4) || ("Samet" == "Samet") );
// console.log( (2 == 4) || ("Samet" == "Memet") );



// if operatörleri

/* 
const error = true;

if (error == false) {
    console.log("Hata oluşmadi");
}

else {
    console.log("Hata oluştu");
}
*/

/* 
const process = "2";        // Veri tipini ve değerini göre eşitlik 

if (process === "1") {
    console.log("işlem 1");
}

else if (process === "2") {
    console.log("işlem 2");
}

else if (process === "3") {
    console.log("işlem 3");
}

else if (process === "4") {
    console.log("işlem 4");
}

else {
    console.log("Hatali giriş");
}
*/


//      İki seçenek için kısa kullanımlar

const number = 120;

if (number == 100) {
    console.log("Sayi 100'e eşit");
}

else {
    console.log("Sayi 100'e eşit değil");
}

if (number == 100) console.log("Sayi 100'e eşit");
else console.log("Sayi 100'e eşit değil");


console.log(number === 100 ? "Sayi 100' eşit" : "Sayi 100'e eşit değil");