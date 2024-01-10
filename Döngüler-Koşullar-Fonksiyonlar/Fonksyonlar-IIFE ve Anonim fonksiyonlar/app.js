// Fonksiyon Tanımlama 

/* 
function merhaba(name = "Bilgi yok",age = "Bilgi yok") {

    if (typeof name === "undefined") name = "Bilgi yok";

    if (typeof age === "undefined") age = "Bilgi yok";

    console.log(`isim: ${name} \nYaş: ${age}`);

}

merhaba();
merhaba("samet",22);
merhaba("samet"); 
*/


// Return neden kullanılır

/* 
function square(x) {
    return x*x;
    console.log("bu yazi görünmeyecek");        // return fonksiyonu kırar yani devamında gelen komutlar çalışmaz
}                                               // return yazılmazsa eğer değer fonksşyona geri dönmez
                                                // Değer fonksiyonun çağrıldığı yere geri döner
function cube (x) {
    return x*x*x;
}

let a = square(cube(11));

console.log(a);  
*/

/* 
const hello = function(name) {
    console.log("Hello " + name);
}

hello("ibo");
*/



// Immediately Invoked  Function Expression (IIFE)
// Bu fonksiyonlar yazıldıkları gibi anında çalışırlar (parantez içine alınınca)

/* 
(function(name) {
    console.log("Hello " + name);
})("Memet"); 
*/

/* ---------------------------------------------- */


const database = {
    host: "locathost",
    add: function(name){
        console.log(`${name} verisi eklendi`);
    },
    delete: function(Id) {
        console.log(`Id: ${Id} silindi`);
    },
    update: function(Id) {
        console.log(`Id: ${Id} güncellendi`);
    },
    get: function(Id) {
        console.log(`Id: ${Id} numarali kullanici`);
    }
}

/* 
console.log(database.host);
console.log(database.add);
console.log(database.delete);
console.log(database.update);
console.log(database.get);
*/

database.add("hi java");
database.delete(11);
database.update(22);
database.get(33);