// While döngüleri

let i = 0;

/* 
while(i < 10){      //sonsuz döngü
    console.log(i);
    i++;
}
*/


// Break && Continue

/* 
while(i < 10) {
    console.log(i);
    if(i == 5) {
        break;      // break anında döndüyü durdurur ve çalışmasını önler
    }
    i++;
}
*/

/* 
while(i < 10) {
    if(i == 3 || i == 5) {
        i++;           // i++ olmasa sonsuz döngü oluşacaktı
        continue;      // continue 3 ve 5 te döngüyü tekrardan başa alıp devam ettiriyor yani 3 ve 5 sayıları için döngü geçersizdir baştan başlatır
    }
    console.log(i);
    i++;
}
*/


// Do while (Gnellikle hiç kullanılmaz)


/* 
do {
    console.log(i);
    i++;
}while( i < 10 );

*/

let index = ["Java","Css","React.js"];

/* 
while( i < index.length ) {
    console.log(index[i]);
    i++;
}
*/


// for düngüleri

/* 
for( i = 0 ; i < index.length ; i++ ) {
    console.log(index[i]);
}
*/

/* 
index.forEach(function(lang,x){         // javascript özelliklerinden biri foreach 
    console.log(lang,x);                // lang yazdığımız yerde sırasıyla index içinde ki elemanları sıralar
})                                      // x ise numaralandırma olayını gerçekleştirir

*/


/* 
const users = [
    {name:"Ahmet" , age:22},
    {name:"Veli" , age:72},
    {name:"Irmak" , age:52}
];

const names = users.map(function(user){
    return user.name;
});

const ages = users.map(function(user){
    return user.age;
});

console.log(names);
console.log(ages); 
*/


const user = {          // user içerisinde bulunan key (name ve age) yazdırılıp
    name: "samet",      // daha sonra user içinde key'e karşılık gelen değerleri yazdırır
    age: 31
};

for (let key in user) {
    console.log(key,user[key]);
}