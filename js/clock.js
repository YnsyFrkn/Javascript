
let Name = prompt("Adınız Nedir?")
let myName = document.querySelector("#myName");

myName.innerHTML= `${Name}`


function zaman(){


let myClock= document.querySelector("#myClock");

let days= ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"]

Saat=`
${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}

${days[new Date().getDay()]}

`

myClock.innerHTML=`${Saat}`
}
setInterval(zaman,1000)


