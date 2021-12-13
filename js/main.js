let h= document.querySelector('button')
// let input = document.querySelectorAll('input')
// let p = document.querySelector('p')
let h1 = document.querySelector('h1')
// let h2 = document.querySelector('h2')
let div =  document.querySelector('div')
console.log(h);
x=0;
let landingpage = document.querySelector("h2")
let imgArray = ["والله أكبر","سبحان الله   ","والحمد لله","ولا إله إلا الله "]
document.addEventListener('click',function(){
   x++; 
   h1.innerHTML= ` <h1>${x}</h1> `
   let randomNumber = Math.floor (Math.random() * imgArray.length )
   landingpage.innerHTML=imgArray[randomNumber]
})






