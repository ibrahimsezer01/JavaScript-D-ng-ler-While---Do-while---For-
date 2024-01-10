// alert("alert")      // javascript objesi olarak geçiyor


/*
console.log(window);
console.log(this);      // üzerinde bulunduğumuz window
*/


// Alert

/* 
alert("hi");


const cevap = confirm("İzin gereklidir");   // evet veya hayır şıkkı çıkartır - true veya false değeri verir

console.log(cevap);

if (cevap) {
    console.log("Onay alındı");
}
else {
    console.log("Onay alınamadı")
}
*/

/* 
if(confirm("Oki mi yoki mi")) {
    console.log("Oki");
}
else {
    console.log("yoki");
} 
*/

/* 
const cevap = prompt("2 + 2 = ?");


if (cevap == 4) {
    console.log("cevap doğru");
}
else {
    console.log("cevap yanlış");
}
*/


let value;

value = window;
value = window.location;
value = window.location.host;
value = window.location.hostname;
value = window.location.port;
value = window.location.href;

/* 
if (confirm("Sayfa yenilensin mi?")) {
    window.location.reload();
}
else {
    console.log("Sayfa yenilenmedi")
}
*/

value = window.outerHeight;     // o anki açık olan tarayıcının yuksekliğini yazdırır çerçevler dahil
value = window.outerWidth;      // o anki açık olan tarayıcının genişliğini yazdırır çerçevler dahil


value = window.innerHeight;     // çerçeveler hariç
value = window.innerWidth;     // çerçeveler hariç


value = window.scrollX;         // scroll bar varsa eğer (x ise yatay) kaydırıldığı zaman ne kadar px kaydırıldığı değerini verir
value = window.scrollY;         // scroll bar varsa eğer (y ise dikey) kaydırıldığı zaman ne kadar px kaydırıldığı değerini verir

console.log(value); 