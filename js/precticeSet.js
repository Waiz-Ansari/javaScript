// ------------------------chapter 1 prectice question--------------------------------------------
// vedio 5 chepter 1 test ha 
// chepter 1 prectice


// Q/1
// let a = "waiz";
// let b = 4;
// console.log(a+b);

// // Q/2
// console.log(typeof (a+b))

// // Q/3
// const x = {
//     name : "waiz",
//     section: 1,
//     principle: false    
// }
// // Q/4
// x['friend']="affan"
// x['F.name']="Afaz"
// console.log(x)

// // Q/5
// const dict ={
//     appreciate:"recognize the full word of.",
//     ataraxia:"a state os freedom emotional disturbance and anxiety",
//     yakka:"work,especially hard work",
//     good:"achaaaa",
//     dsfgdsf:"sdfsff"
// }
// console.log(dict['yakka'])
// ==================================chapter 2 prectice question============================================================================================================================================================
// vedio 8 chepter 2 test ha 
// chepter 2 prectice
/*
Q/1
let age = prompt("what is your age");
if(age>10 && age<=20){
    console.log("your age lies between 10 and 20");
}else{
    console.log("your age does not lies between 10 and 20");
}
*/

// Q/2
/*
let age = prompt("what is your age")
switch(age){
    case "12":
        console.log("your age is 12")
        break
    case "13":
        console.log("your age is 13")
        break
    case "14":
        console.log("your age is 14")
        break
    case "15":
        console.log("your age is 15")
        break
    default :
    console.log("this opportunity is not for you")        
}
*/
/*
// Q/3
let num = prompt("what's the number is divided by 2 and 3");
num = Number.parseInt(num);
if (num%2==0 && num%3==0){
console.log("your number is divisible by 2 and 3")
}else{
    console.log("your number is not divisible by 2 and 3")
    alert("your number is not divisible by 2 and 3")
}
*/


/*
// Q/4
let num = prompt("what's the number is divided by 2 and 3");
num = Number.parseInt(num);
if (num%2==0 && num%3==0){
console.log("your number is divisible by 2 and 3")
}else{
    console.log("your number is not divisible by 2 and 3")
    alert("your number is not divisible by 2 and 3")
}
// ----- ye kaam is terha bhi ker sakty ha 
let num = prompt("what's the number is divided by 2 or 3");
num = Number.parseInt(num);

if (num%2==0){
console.log("your number is divisible by 2")
}else{
    console.log("your number is not divisible by 2 and 3")
    alert("your number is not divisible by 2 and 3")
}
// --
if(num%3==0){
    console.log("your number is divisible by 3")
}else{
    console.log("your number is not divisible by 3")
    alert("your number is not divisible by 3")
}
*/
/*
// Q/5
let a = prompt("what is your age")
console.log("you can", a<9? "not drive I think you shuld play the vedio game": a<16? "drive after 18" : a<=17 && a<=18? "drive after 1 or 2 years": a>18?"drive" :"drive");
// alert("you can" a<9? "not drive I think you shuld play the vedio game": a<16? "drive after 18" : a<=17 && a<=18? "drive after 1 or 2 years" :"drive" )
*/


// --------------------------chapter 3 prectice question 12th vedio-------------------------------
/*
// Q/1
let marks={
    waiz:92,
    affan:94,
    umer:96
}
for(let i = 0; i < Object.keys(marks).length; i++ ){
    console.log("the marks of " + Object.keys(marks)[2] + " are " + marks[Object.keys(marks)[2]])
} 
*/

// Q/2
/*
let marks={
    waiz:92,
    affan:94,
    umer:96
}
for(let key in marks){
    console.log("the marks of " + key + " are " + marks[key])
    // console.log(marks[key])
} 
*/

// Q/3
/*
let CN = 43
let i 
while (i != CN){
    console.log("try agin")
    i = prompt("Enter a number")
}
console.log("you have entered a correct number")
*/
// Q/4
/*
const mean = (a,b,c,d)=>{
    return (a+b+c+d)/4
}
console.log(mean(4,5,6,7))
*/



// --------chapter 4 practice--vedio 15-------------------------
// Q/1
// let w = "Waiz\nAnsari"
// console.log(w.length)


// Q/2
/*
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
// console.log(sentence)
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);
// expected output: "The word "fox" is in the sentence"

const waiz = "add this num 335"
const num = "335"
console.log(`this "${num}" ${waiz.includes(num) ? 'is': 'is not'} added`)
*/

// Q/3
/*
let waiz = "ANSARI"
console.log(waiz.toLowerCase())
*/


// Q/4
/*
let string = "please give Rs 1000"
let amount = Number.parseInt(string.slice("please give Rs".length))
console.log(amount)
*/

// Q/5
/*
let waiz ="ANSARI" 
waiz[3] = "y" //waiz is not change because string is immutable 
console.log(waiz)
// console.log(waiz.replace('ANSAR','Quraish'))
*/


// --------chapter 5 practice--vedio 21-------------------------
// Q/1
/*
let arr = [1,2,3,4,5,6,7];
let a = +prompt( "enter the value")
arr.unshift(a)
console.log(arr)
*/

// Q/2
/*
let arr = [1,2,3,4,5,6,7];
let a 
do{
   a = +prompt( "enter the value")
arr.push(a)
}while(a!=0)
console.log(arr)
*/

// Q/3
/*
let arr = [1,2,3,4,23,20,10,3,40,5,6,7];
let a = arr.filter((ten)=>{
    return ten %  10 == 0
})
console.log(a)
*/
// Q/4
/*
let arr = [1,2,3,4,23,20,10,3,478.3,5,6,7];
let a = arr.map((ten)=>{
    return ten*ten
})
console.log(a)
*/

// Q/5
/*
let arr = [1,2,3,4,5,6,7,8];
let a = arr.reduce((w,e)=>{
    return w*e
})
console.log(a)
*/ 


// ------------------------------------CHAPTER 6 PRECTICE QUESTION-----------------vedio_29-----
// Q/1  ye is tareeqa sa bhi hosakta ha 

// let x = +prompt("enter yout age")
// if (x>=18){
//     alert("you can drive")
// }else if(x<=18){
//     alert("you can not drive")
// }else if(x<=10){
//     alert("i think you shuld play the vedio game")
// }else{
//     alert("inviled age")
// }


// ============ye wala code age dobara maloom kerny k liye
/*
let age = +prompt("enter your age")
const can_drive =(age)=>{
    return age>=18?true:false
}
if (can_drive(age)){
    alert("you can drive")
}else{
    alert("you can not drive")
}

// yahan se repeat age shuro hoti ha 

let x = confirm("do you want to see again")
if (x){
    alert(age)
}else{
    alert("please allow me to write")
}
*/



// {{{{{{{{{{{{{{{{{{{{{{{{{yahan se question start ho rhy han}}}}}}}}}}}}}}}}}}}}}}}}}
// Q/1  ye is tareeqa sa bhi hosakta ha 
// ---esa bhi likh sakty ha 
/*
let age = +prompt("enter your age")
const can_drive =(age)=>{
    return age>=18?true:false
}
if (can_drive(age)){
    alert("you can drive")
}else{
    alert("you can not drive")
}
*/

// Q/2
/*
let run_agian = true
const can_drive =(age)=>{
    return age>=18?true:false
}
while(run_agian){
    let age = +prompt("your age")
    // console.log(age)
if (can_drive(age)){
    alert("you can drive")
}else{
    alert("you can not drive")
}
run_agian = confirm("do you want to change")
}
*/

// Q/3
/*
let run_agian = true
const can_drive =(age)=>{
    return age>=18?true:false
}
while(run_agian){
    let age = +prompt("your age")
    // console.log(age)
    if (age <= 0){
        console.error("please inter a valid age");
        break;
    }
if (can_drive(age)){
    alert("you can drive")
}else{
    alert("you can not drive")
}
run_agian = confirm("do you want to change")
}
*/

// Q/4
/*
let num = +prompt("your code number")
    // console.log(age)
    if (num >4 & num<6){//2 martaba bhi && laga sakty ha 
       location.href = "https://google.com";
       
    //    break;
    }else{
        alert('enter a valid code')
    }
*/

// Q/5

// let color = prompt('what color you want')
// document.body.style.background = color;


// ------------------------------------CHAPTER 7 PRECTICE QUESTION-----------------vedio_38-----
/*
// Q/1

document.getElementsByTagName("nav")[0].firstElementChild.style.color = "red"

// Q/2
// Q/2 html code ma ha 


// Q/3
document.getElementsByTagName("nav")[1].firstElementChild.style.color="blue"
document.getElementsByTagName("nav")[1].lastElementChild.style.color="green"


// Q/4
Array.from(document.getElementsByTagName("li")).forEach((element)=>{
    element.style.background = "cyan"
})
*/







// ------------------------------------CHAPTER 8 PRECTICE QUESTION-----------------vedio_49-----
// Q/1 = write a program to show difrent alerts  when difrent buttons are clicked

// this is an html wor joi kaam asani se ho wo mushkil sa q kary

/* <button onclick="alert('1')">click 1</button>
<button onclick="alert('2')">click 2</button>
<button onclick="alert('3')">click 3</button> */


/*

// ye many khud sa solve kya ha 
let x = function(e){
    alert("1")
}
let y = function(e){
    alert("2")
}
let z = function(e){
    alert("3")
}

btn.addEventListener("click",x)
btn.addEventListener("click",y)
btn.addEventListener("click",z)



let a = prompt("enter 1,2,3")
if( a == "1"){
    btn.removeEventListener("click",y)
    btn.removeEventListener("click",z)
}
else if( a == "2"){
    btn.removeEventListener("click",x)
    btn.removeEventListener("click",z)
}
else{

        btn.removeEventListener("click",x)
        btn.removeEventListener("click",y)

}


*/



// Q/2 = Creat a website which is capable of storing bookmarks of you favorate website using href
/* <h1>bookkmarks</h1>
<a href="https://google.com"><button>google</button></a>
<a href="https://youtube.com"><button>youtube</button></a>
<a href="https://facebook.com"><button>facebook</button></a> */


// Q/3 = same kaaam html sa bhi hosakta ha lkin ham ny mushkil treeqa sa kerna ha 
/*
document.getElementById("google").addEventListener("click",function() {
  window.location="https://google.com"
})
*/

// same kaam ho rha ha as above
/*
document.getElementById("google").addEventListener("click",function() {
    var url = "https://www.google.com/search";
    var win = window.open(url,"", "width=300, height=340,scrollbars=yes,resizable=yes");
    //  is "" ka matlab ha k age jo many width or height di ha wo is ma kholy
    win.focus
})
//---same as above
function google_click(){
   console.log("waiz")
   var url = "https://www.google.com/search";
   window.open(url);
//    win.focus
}
*/



// Q/4 = write a java script program to keep fatching content of a website (every 5 seconds)
// Q/5 = creat a glowing bulb effect usng classlist toggle method in java script
/*
setInterval(function() {
    document.querySelector("#bulb_container").classList.toggle("bulb")
    console.log(toggle)
}, 1000);
*/


// ------------------------------------CHAPTER 9 PRECTICE QUESTION-----------------vedio_63-----
// /*
// let loadScript = async (src)=>{
//     return new Promise((resolve, reject) => {
//         let script = document.createElement('script')
//         script.src = src
//         script.onload = ()=>{
//             resolve (src + " done success")
            
//         }
//         document.head.append(script) 
//         // document.createElement('script')
//     })
// }
// */
// /* //Q/1
// let a = loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js")
// a.then((value)=>{
// console.log(value)
// })*/



// /*// Q/2
// const main1 = async()=>{
//     console.log(new Date().getMilliseconds())
//     let a = await loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js")
//     console.log(a,alert(a))
//     console.log(new Date().getMilliseconds())
// }
// main1();*/



// Q/3
/*
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
       reject ("error") 
    }, 3000);
})

let a = async()=>{
    try {
        let c = await p1
        console.log(c)
        
    } catch (error) {
        console.log("this error has been handle")
    }
}
a()
*/

// Q/4
/*
let p1 = async()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (20)
        }, 2000);
    })
}
let p2 = async()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (40)
        }, 4000);
    })
}
let p3 = async()=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (60)
        }, 6000);
    })
}

const run = async ()=>{
    console.time("run")
    // let a1 = await p1()
    // console.log(a1)
    // let a2 = await p2()
    // console.log(a2)
    // let a3 = await p3()
    // console.log(a3)
    
    let a1 = p1()
    // console.log(a1)
    let a2 = p2()
    // console.log(a2)
    let a3 = p3()
    // console.log(a3)
    let a1a2a3 = await Promise.all([a1,a2,a3])
    console.log(a1a2a3)
    console.timeEnd("run")
    // console.log(a1 a2,a3)
}
run()
*/



// ------------------------------------CHAPTER 10 PRECTICE QUESTION-----------------vedio_71-----
// Q/1

// kerny ha baad ma 