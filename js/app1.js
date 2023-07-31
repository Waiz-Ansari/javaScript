// *************** 1st class after introductiion******************** 
/*var a = 23 ; //var use ni kerna modren java script ma 
var a = 24*/
/*
let b = "waiz"; 
let c = null;
let d =undefined;
{ 
    let b = "this";
    console.log(b)
}
console.log(b);   */

// const author = "waiz";
// let author = "ansari";//throws an error because constant con not bee changed 

// *************** 2nd class after 1st class********************
// <<<<<<<<<<<<< permitive deta type >>>>>>>>>>>>>

/*
let a = null; //this deta type is null
let b = 2345; //this deta type is number
let c = true; //can also be false // this deta type is boolen
let d = BiInt("3443"); //thisg deta type is Bigint also BigInt use for plus a string
let e = "waiz"; //this deta type is string
let f = Symbol("I am nice sumbol"); //this deta type is symbol
let g = undefined; //this deta type is undefined {undefined mean (i.e) if you type let g and its result also undefined}

console.log(a,b,c,d,e,f,g);
console.log(typeof f);
*/

// <<<<<<<<<<<<<<<<<<<< Non premitive deta type and this is called Objects in js >>>>>>>>>>>>>>>>>>>>>


// const waiz = {
//     Laptop : true,
//     "mobile" : true,
//     "bick" : false,
//     "birds" : 22,
//     "fish" : undefined 
// }
// console.log(waiz.Laptop)  


// *************** 3rd class after 2nd class********************
// --------------------chepter 2 start-vedio 6-------------------------

// {{{{{{{{{{{{{{{{{{{[[[[[[[Arthametic Operators]]]]]]]}}}}}}}}}}}}}}}}}}}
/*
let a = 10;
let b = 4;
let c= 11;
console.log("a+b =",a+b) // 14 add
console.log("a-b =",a-b) // 6 sub
console.log("a*b =",a*b) // 40 multi
console.log("a**b =",a**b) // 10000 exponential
console.log("a%b =",a%b) // 2 modules
console.log("++a =",++a) // 11 pre increment
console.log("a++ =",a++) // 11 post increment
console.log("--a =",--a) // 11 pre decrement
console.log("a-- =",a--) // 11 post decrement
console.log("a =",a); // 10 
console.log("a-- =",a--) // 10 post decrement
console.log("a =",a); // 9
*/


// {{{{{{{{{{{{{{{{{{{{{{{{{{{{Asssigment Operators}}}}}}}}}}}}}}}}}}}}}}}}}}}}
/*
let assigment = 1;
assigment += 5; // same as (assigment = assigment + 5)
assigment -= 5;
assigment *= 5;
assigment /= 5;
assigment %= 5;
assigment **= 5;
console.log(assigment)
*/

// {{{{{{{{{{{{{{{{{{{{{{{{{{{{Comperision OPerrators}}}}}}}}}}}}}}}}}}}}}}}}}}}}
/*
 let com1 = 6;
 let com2 = 6;
 console.log("com1 == com2", com1 == com2)
 console.log("com1 != com2", com1 != com2)
 console.log("com1 === com2", com1 === com2)
 console.log("com1 !== com2", com1 !== com2)
 console.log("com1 > com2", com1 > com2)
 console.log("com1 < com2", com1 < com2)
 console.log("com1 >= com2", com1 >= com2)
 console.log("com1 <= com2", com1 <= com2)
 turary operator is hold bad ma perhy gy
 */

//  {{{{{{{{{{{{{{{{{{{{{{{{{{{{Logical OPerrators}}}}}}}}}}}}}}}}}}}}}}}}}}}}
/* 
let x = 5;
let y = 6;
console.log(x < y && x == 5); //dono condition true honi chahiye 
console.log(x > y || x == 5); //dono ma sa koi ak true hony chahiye 
// ! operator wo hota ha jo true ko false or false ko true kerdy
*/
// {{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{{if else and else if condtion}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}}
/*let a = prompt("whats your age","only use number")
a = Number.parseInt(a)//converting the string of a number
console.log(a)
// console.log(typeof a)*/

/*
let a = prompt("whats your age");
a = Number.parseInt(a);
// if (a < 0){
//     alert("this is an invalid age");
// }else if(a <= 9){
//     alert("you are a kid and i think you shuld play the vedio game")
// }else if(a >9 && a<18){
//     alert("you shuld drive after 18");
// }else if(a > 18){
//     alert("you must dreive");
// }else { 
//     alert("wrong")
// };

// ============================= This is turnary operator-------------------------
console.log("you can", (a<9? "not drive" : a<18? "drive after 18" : "drive") )
*/






// -------------cheapter 3 start after closing cheapter 2----------------------
// ---SIMPLE loop
// for(let i = 0; i  < 500; i++){
    //     console.log(i+1)
    // }
    
    // ------------For Loop-------------------------------------------------------------------------------------------    
    /*
    let sum = 0;
    let n = +prompt("Enter the value of greater then 0(Zero)")
    // n = Number.parseInt(n)
    for(let i = 0; i<n; i++){
        sum += i+1
        
        //  i+sum
        // console.log((i+sum),"+")
        // console.log(i)
    }
    console.log("sum of first " +n+ " natural numbers is "+ sum)
    */
    
    
    // ------for in loop-------------------------------------------------------------------------------------------
/*    
let marks = {
    waiz : 73,
    affnan:66,
    aosdh:3279,
    sauifdh:93
}
// for (let a in marks){
    //     console.log ("marks of " + a + " are " + marks[a])
    // }
    
    // ----for of loop-------------------------------------------------------------------------------------------
    for (let b of "waiz"){
        console.log(b)
        // console.log ("marks of " + a + " are " + marks[a])
    }

    */


    // -------while loop-------------------------------------------------------------------------------------------
    /*let n =prompt("enter the value of n")
    n = Number.parseInt(n)
    let i = 0;
    while(i < n){
        console.log(i)
        i++
    } 
    */
// ------sample------
    // let i =0
    // while (i<10){
    //     console.log(i)
    //     i++
    // }

// -------DO while loop-------------------------------------------------------------------------------------------
/*
let n =prompt("enter the value of n")
    n = Number.parseInt(n)
    let i = 0;
    
    do{
        console.log(i)
        i++
    } while(i < n)
*/
// -----sample
// let n = prompt("write a number")
// n = Number.parseInt(n)
// let i = 0
// do{
//     console.log(i)
//     i++
// }while(i<n)



//------- FUNCTION IN JS-------------------------------------------------------------------------------------------
/*
// app log is trah k function ko use kary modren java script ma 
const helllo = ()=>{
    console.log("hey how are you")
    return "hi"
}
// ye porani java script function bnany ka tareeqa ha 
function avgPlus1(x,y){
    console.log("done")
    return Math.round(1 + (x + y)/2)
}
// ye ak simple function ha 
const sum =(p,q)=>{
    return p+q
}

let a =1;
let b =2;
let c =3;
console.log("average+1",avgPlus1(a,b))
console.log("average+1",avgPlus1(b,c))
console.log("average+1",avgPlus1(c,a))
console.log(sum(5,6))
let v = helllo()
console.log(v)
*/
// --------------prec-----------------------------------
/*
const prec =  () => {
    console.log("hi there")
    return "hi"
}
let v = prec();
console.log (v)
*/


// --------------------------cheapter 4 start after closing cheapter 3----13 vedio--------------

// ---string
/*
let name = "harry"
// console.log(name.length)
console.log(name[0])
console.log(name[1])
console.log(name[2])
console.log(name[3])
console.log(name[4])
*/

// ---Template literals 
/*
let boy1 = "Waiz";
let boy2 = "Affan";
let friend = `${boy1} is the friend of ${boy2}`
console.log(friend)
*/


// ---Escape Sequence Characters
/*
let fruit = 'banana\tmango'
console.log(fruit)
*/


// ---String and Methods
// let name = "Waiz"
// console.log(name.length);//length maloom kerny k liye
// console.log(name.toUpperCase());// conver to upper case
// console.log(name.toLowerCase());//conver to lower case
// console.log(name.slice(2,4));//slices the string
// console.log(name.slice(2));//slices the string
// console.log(name.replace('W','F'));//Replace the string to another string
/*let friend = "affan";//this is another method of String
console.log(name.concat(" is the friend of ",friend, " ok "))//this method is used for concat*/
/*let friend2 = "             Umer        ";
console.log(friend2)
console.log(friend2.trim())//this method is use to elemenate the spaces*/

// ----------table bnya ha for prectice
/*
let num = +prompt("which table you want");
for(let i =1;  i <=10 ; i++){
    let result = i*num;
    console.log(`${num} * ${i} = ${result}`)
}
*/
// ---------------close--------------------


// ------------cheapter 5 start after closing cheapter 4----16 vedio-----------------------

// -----arrays
/*
let marks =[91,92,93,94,95,"Not Present",true]
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
console.log(marks[4])
console.log(marks[5])
console.log(marks[6])
marks[0]=96//arrays are immutable arrays can be chancges and STIRING CAN NOT BE CHANCHED OOOKKKOKOKKKOKKOKOKKKOOOKOKKKOKOKKOKOOOKKOKOKOKOKOOOOKOOKKKOOKO
console.log(marks)
console.log(typeof marks)
*/
/*
let obj =["waiz","affan","umer","afnan"]
for (let i=0;i < obj.length; i++){
    console.log(obj[i])
} 
*/

// ---arrays method
/*
let num = [1,2,3,4,5];
let b = num.toString(); //now arrays is a string
console.log(b);
let c = num.join("_")
console.log(c)

// ---pop
// num.pop()//this method is used for pop the last index(index mean last word) 
let r = num.pop()//this method is used for (pop return the pop element) 
console.log(num,r);
// ---push
let s = num.push(56)//push returns the new array length 
console.log(num,s);
// ---shift
let t = num.shift()//remove 1st element and return it(means  change the array)
console.log(t,num);
// ---unshift
let u = num.unshift(56)//added the 1st element in array 
console.log(num,u);

// console.log(num)

// ---Delete method
// let v = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(v.length)
// delete v[0];
// console.log(v)


// ---concat
let v = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let w = [11, 12, 13, 14, 15, 16, 17, 18, 19]
let x = ["sduhcniushnusdnkl"]
let new_w = v.concat(w,);//concat mean dono ya teeno ya jitny bhi arrays ko marge kerna ho us k liye use hota ha  
console.log(new_w);


// ---sort method
// let me = document.getElementById("mai")

let compair = (b,a)=>{
return b-a}
let v = [13 ,11,15,17,19,112];
console.log(v.sort(compair))
// ---revers meth
v.reverse()
console.log(v)

*/

// ---splice and slice 

// --splice
// let spi = [11,22,33,44,55,6,7,8,90]
// let deletedvalues /*delet index ko find kerna ka tariqa*/ =
// spi.splice(2,3,123,1234,12345,123456)//this method is called 'splice' mean(2, 3, 123,1234,12345) 2 mean "index 2 k bad",  3 mean "2 k bad 3 index ko delete kerdo" us k bad sub ko print kerdo
// console.log(deletedvalues)

// --slice
// let sli = [11,22,33,44,55,6,7,8,90]
// let sli1=sli.slice(3,4) //not a modify array "'creat a array'"
// console.log(sli1)


// ------------------------array + for loop and looping -------------

// let num = [3,4,5,6,7];
// for (let i = 0 ; i < num.length; i++){
//     console.log(num[i])//this loop name is clasical for loop
// }

// --forEach loop
/*
let num = [3,4,5,6,7];
num.forEach((element) => {
    console.log(element*element)
}  )
*/

// ---Array.from
/*
let name = "pumpjack";
let name2 = Array.from(name)
console.log(name2)


// ---for..of loops

let num = [1,2,3,4,5,6,7,8,9]
for(let i of num)( 
    console.log(i) //for of loop (ye number ma hi rehny deta ha )
)

// ---for in loop
let iin = [1,2,3,4,5,6,7,8,9]
for(let i in iin)(
    console.log(i)//for in  loop (ye number se srting ma change ker deta ha )
)
*/

// ---Arrays_map_method

/*
let arr = [2,3,4];
let emp = []

for (let i=0 ; i<arr.length; i++) {
   let b=  arr[i]
   console.log(b)
   emp.push(b)
//    console.log(emp)

}
console.log(emp)
*/

//uper jo many foor loop sa kiya ha same kaam "map"sa bhi ho sakta ha 

/*
let arr = [2,3,4]
let a = arr.map((num,ndex,array)=>{
    console.log(num,ndex,array)
    return num + 1
})
console.log(a);




// ---Arrys_filter_method
/*
let arr1 = [11,22,33,45,5,4,3,21,9]
let arr2 =arr1.filter((a)=>{
    return a<10
})
console.log(arr2,arr1)
*/

// ---Arrys_reduce_method
/*
let arr = [2,3,4,5,6,7]
let arr2 = arr.reduce((wa,iz)=>{
    return wa+iz
})
console.log(arr2)
*/
/*
let arr3 = [1,2,3,4,5,2,1]
const reduce_func = (h1,h2) =>{
return h1+ h2 
}
// let newarr3 = arr3.reduce(reduce_func)
// console.log(newarr3)
*/

// ------------cheapter 6 start after closing cheapter 5----23 vedio-----------------------

 
 //  console.log(console)
 //  console.log("err"!=false)
 //  console.log("err"==false)
 //  console.time("waiz Ansari")
 //  console.timeEnd("waiz Ansari")

/*
let a = prompt("enter the age" , "18+")
alert("you entered a type of " + (typeof a))
let write = confirm("do you want to ok to the page")
if (write){
    document.write(a)
}else{
    document.write("please allow me to write")
}

*/

// ------------cheapter 7 start after closing cheapter 6----29 vedio-----------------------
// console.log(document.body.firstChild)
// console.log(document.body.lastChild)
// console.log(parentNode)
// console.log(parentElement)

// ===============element inly navigation
// some times don't want text on comment nodes. Some lines only take element nodes into account.for example [document.previousElementSibling]  -> mean previous sibling which is an element] ..[document.nextElementSibling] ... baqi  must watch vedio 36..0:00 to 5:15
// const change_bg = ()=>{
//     document.body.firstElementChild.style.background = "red"
// } 



// let b = document.body;
// console.log("first chil of b is: ", b.firstChild);
// console.log("first Element chil of b is: ", b.firstElementChild);


// =======table code ======vedio 35

// let t = document.body.firstElementChild.firstElementChild
// console.log(t)
// console.log(t.rows[0].rowIndex)
// console.log(t.rows[0].cellIndex)
// console.log(t.tbody)//check this first//https://drive.google.com/drive/folders/1Dx76_NRmYK4W09l2a-Phr0EgK__e8N4s


// =======vedio 36 ka kaam 
// change the caed title to red
// let ctitle = document.getElementsByClassName("card-title")[0]; // ye classs name k through slect kerta ha 
// ctitle.style.color="red"
/*
let idtitle = document.getElementById("firstid"); // ye Id name k through slect kerta ha
idtitle.style.color="blue"

let ctitle = document.querySelectorAll(".card-title"); //ye css slector k through slect kerta ha sary ak jasy class ko
ctitle[0].style.color = "red"
ctitle[1].style.color = "blue"
ctitle[2].style.color = "green"

document.querySelector(".this").style.color="red" //ye kisi ak name ki class ko slect kerta ha 
document.querySelector(".this").style.background="gray"

let waiz = (document.querySelector(".card").getElementsByTagName("a"))
console.log(waiz)

console.log(document.getElementsByName("search"))
*/


// ========vedio 37
// mathes , closest and contains
/*
// --mathes  // elem.matches match kary ga k id kis klas ma match ho rhi ha 
let id = document.getElementById("id1")
console.log(id)
console.log(id.matches(".class"))
console.log(id.matches(".box"))



// // --closest
let idclosest = document.getElementById("sp1")
// console.log(idclosest)
console.log(idclosest.closest("#sp1"))

// --contains
let sp = document.getElementById("sp1")
console.log(sp)
console.log(id1.contains(sp1))//true
console.log(sp.contains(sp1))//true
console.log(sp.contains(id1))//false
*/


// ------------cheapter 8 start after closing cheapter 7----41 vedio-----------------------

// let x = document.getElementsByTagName('span')[0];
// console.log(x)
// let y = document.getElementsByTagName('span')[0];
// console.dir(y)
// console.log(document.body.firstChild.nodeName);
// console.log(document.body.firstElementChild.nodeName);
  
/*
let x = document.getElementsByTagName('ul')[0]
console.log(x)
let y = document.getElementsByTagName('ul')[0]
console.dir(y)

console.log(document.body.firstChild.nodeName)
console.log(document.body.firstElementChild.nodeName)

console.log(document.getElementById("inn").innerHTML)
console.log(document.getElementById("inn").innerHTML)

let a =document.body.firstChild.nodeValue    node value ki jaga data bhi ker sakty ha 
console.log(a)
let x =document.body.firstElementChild.nodeValue
console.log(x)

console.log\\\(document.body.textContent) //pori body ka text ajai ga 
*/


// ...vedio 42
//   let a = inn.getAttribute("class") //answer is all classes in class
//   console.log(a)
//   let y = inn.hasAttribute("class")//anser is true because this is in html
//   console.log(y)
//   let x = inn.hasAttribute("style")//anser is false because this is not in html id =  "inn"ok thats the reson this is false
//   console.log(x)

// ----ye bad ma dekhni ha 

// ---vedio 43

// let a = document.getElementsByTagName('div')[0] //java script k through kisi element k under kuch insert kerny k liye
// a.innerHTML = a.innerHTML + "<h1>osudhf</h1>";// ==same as above
// console.log(typeof a)//==same as above

//  let a = document.getElementsByTagName('div')[0];//same kaam horha as above ha lakin another method k through 
// let div = document.createElement('div');//==
// div.innerHTML = '<h1>osudhf</h1>';//==
// a.appendChild(div);//==

/*
let a = document.getElementsByTagName('div')[0];
let div = document.createElement('div');
div.innerHTML = '<h1>osudhf</h1>';
// a.append(div);//ye property container,means(jis vheez k bhi under app ny inner html ko rhekna ha ) ka bottom ma bhej dety ha 
// a.prepend(div)//ye property container,means(jis vheez k bhi under app ny inner html ko rhekna ha ) ka top ma bhej dety ha 
// a.before(div)//ye property container,means(jis vheez k bhi under app ny inner html ko rhekna ha ) ka top bahir bhej dety ha 
// a.after(div)//ye property container,means(jis vheez k bhi under app ny inner html ko rhekna ha ) ka bottom k bahir bhej dety ha 
// a.replaceWith()//ye property container,means(jis vheez k bhi under app ny inner html ko rhekna ha ) ko replace kerny k kaam ati ha 
*/
// -------

// --------vedio 45---how we Insert Asjacent HTML & Insert Asjacent Element & Insert Asjacent Text

// first.insertAdjacentHTML('beforeend' ,  '<div class = "test" >beforend</div>')
// first.insertAdjacentHTML('beforebegin' ,  '<div class = "test" >beforebegin</div>')
// first.insertAdjacentHTML('afterend' ,  '<div class = "test" >afterend</div>')
// first.insertAdjacentHTML('afterbegin' ,  '<div class = "test" >afterbegin</div>')
// first.remove()


/*
first.className = "text-black red";
first.classList.remove("red");
first.classList.add("red");
first.classList.add("yellow");
first.classList.add("black");
first.classList.remove("text-black");
first.classList.remove("black");
first.classList.add("yellow");
first.classList.toggle("text-black");
let a = first.classList.contains("text-black");
console.log(a)
*/


// -------vedio 46  Set_Interval & Set_time_out
// alert("hellow")


// --set time out ka func asa hota ha 
/*let a = setTimeout(function()  {
    alert("set time uot")
}, 5000);
// -------
let b = prompt("want to see set time out  (y/n)")
if ("n" == b){
    clearTimeout(a)
}
else if ("N" == b){
    clearTimeout(a)
}
console.log(a)

/*
const sum = (a,b,c)=>{
    console.log("yes i m running" + (a+b+c) )
}
// simple ase bh likh sakty ha lakin bad prectice ha ""setTimeout(sum , 1000 , 1,2,7)""//follow this condition  setTimeout(fun , delay (mean kitna time rukna ha ), argu1 ,argu2 (above func k hisaab sa likhna ha )) 
let timerId = setTimeout(sum , 1000 , 1,2,7)//timerId return bhi kerwa rha ha 
clearTimeout(timerId)
*/


// --setInterval out ka func asa hota ha lakin ye bar bar repeat kerwany k liye use hota ha 
// let a = setInterval(function()   {
//     confirm("harm full")
// },3000)



// -------vedio 47 browser Events means Dom Events
// let a = document.getElementsByClassName("container")[0]
// a.onclick = ()=>{
//     let b = document.getElementsByClassName("container")
//     b.innerHTML="hello"
// }

// -----------vedio 28 add event listener
/*
let x = function(e){
    console.log(e)
    console.log(e.target)
    console.log(e.type, e.ClientX, e.clientY)
    alert("Hello World1")
}

// let y = function(e){
//     console.log(e.target)
//     alert("Hello World2")
// }
btn.addEventListener('click' , x)
// btn.addEventListener('click' , y) 



// let a = prompt("your fav num")
// if(a == "2"){
//     btn.removeEventListener('click' , x)
// }
// else if (a == "1"){
//     btn.removeEventListener('click' , y)
// }
// //else{
//   // alert(e)
// //}
*/




// ==========cheapter # 9 starting from vedio 52
/*
let a = prompt("name")
// var items=[]
let b = prompt("age") 
let c = prompt("color")
// function as(){

//     localStorage.setItem('name',a)
// }
// as()
// function get(){
//  items = localStorage.getItem('name',a)
// }
// get().localStorage.setItem(items)
// function save(){

//     localStorage.setItem("items")
// }
// save()
// console.log(a);
// let z= document.createElement("p")
let d = (`${a} is a ${b} years old and fav color is ${c}`)
document.getElementById("about").innerHTML = d
// save[save.innerHTML=d]
*/

// ------call backs function---------------------------


// --syncronous programing
/*
let a = prompt("name")
let b = prompt("age")
let c = prompt("color")
let d = (a + " is " + b + " years old and has " + c + "favorite color.")
get.innerHTML=d
*/
// --Asyncronous programing
/* 
setTimeout(function() {
    console.log("hey i m good")
},5000);
*/


//   ------ call back function

// load scrip is tareqa sa likhty han 
// function loadScr(url,callback){
//     let script = document.createElement('script')
//     script.src=src
//     script.onload = ()=>callback(script)
//     document.head.oppend(script)
// }


// --------
/*
function loadScript(src , callback){
    let script = document.createElement('script')
    script.src=src;
    script.onload = function(){
        console.log("loaded src " + src)
        callback(src)
    }
script.onerror = function(){
    console.log("error: " + src)
}


    document.body.appendChild(script);

}
function name(src){
    alert("waiz" + src)
}
function Sir_name(src){
    alert("afaz" + src)
}

loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js",name)
*/
// -------


// ---eroor handling in above function 
/*
function loadScript(src , callback){
    let script = document.createElement('script')
    script.src=src;
    script.onload = function(){
        console.log("loaded src " + src)
        callback(null,src)
    }
script.onerror = function(){
    console.log("error: " + src)
    callback(new Error("src got some error"))
}


    document.body.appendChild(script);

}
function name(error,src){
    if(error){
        console.log(error)
        return
    }    
    alert("waiz" + src)
}
function Sir_name(src){
    alert("afaz" + src)
}
*/


// ======prommise======
/*
let pro1 = new Promise((resolve,reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        // console.log("promise is fulfilled")
        resolve("true")
    },4000)
})
// console.log("helow")


let pro2 = new Promise((resolve,reject)=>{
    console.log("promise is pending")
    setTimeout(()=>{
        // console.log("promise is rejcted")
        reject(true)
    },4000)
})
// console.log("helow")

// to get the value
pro1.then((value)=>{
    console.log(value)
})


// pro1.then((value)=>{
//     console.log(value)
// },(error)=>{
//     console.log(error)
// })

// to catch the error
pro2.catch((error)=>{
console.log("some error occured in pro2");
})
// console.log(pro1)


// let a = setTimeout(()=>{
//     console.log("promise is fulfilled")
//     // resolve(true)
// },4000)
// console.log(a)


// let b = setInterval(() => {
//     console.log("interval")
// }, 2000);
// console.log(b)
*/


// ==============================promis chain 
/*let p1 = new Promise((resolve, reject)=>{
    console.log("start")
    setTimeout(()=>{
        console.log("resolve after 3 second");
        resolve(56)

    },3000)
}) 

p1.then((value)=>{
    console.log(value)
    let p2 = new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("Promise2")
        }, 2000);
        // resolve("Promise2")

    })
    return  p2
}).then(()=>{
    console.log("we are done")

})*/

// load script function
/*
const loadScript = (src)=>{
    return new Promise((resolve, reject) => {
    let scrip =document.createElement("script")
    scrip.type = "text/javascript"
    scrip.src = src
    // console.log(scrip.src)
    document.body.appendChild(scrip)
    scrip.onload = ()=>{
        resolve ("script has been loaded")     
    }
    scrip.onerror = ()=>{reject(0)}
})
}
let p1 = loadScript("https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js")
p1.then((value)=>{
    console.log(value)
    return loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js")
}).then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log('error')
})
*/





// =====logic chain
/*
var multi = function(x, y){
    return new Promise ((resolve, reject) => {
        var product = (x*y);
        if (product > 0){
           resolve(product)
        }
        else{
            reject(Error("Could not Multiply both Numbers! "));
        }
    })
}
const add = function(x,y){
    return new Promise ((resolve, reject) => {
        var sum = (x+y) ;
        if (sum > 0){
            resolve(sum);
        }
        else{
            reject(Error("Could not Add both Numbers! "));
        }
    })

}
const subtract = function(x,y){
 return new Promise((resolve, reject) => {
    let diference = (x-y) ;
    if (diference > 0){
        resolve(diference);
    }else{
        reject(Error("could not sub both values!"))
    }
 })   
}


multi(10,30)   //promises chain
    .then((product) => {
      return add(product, 3);
    }).then((sum) => {
      return subtract(sum, 5);    
    }).then((result) => {
        console.log("My result is ", result);
    })
    .catch((error)=>{
      console.log(Error("error"))

  })
        // .then((result) => {
    //      console.log("My result is ", result);
    //    })

*/

// ---promis api

// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        resolve ("value 1") 
//     }, 11000);
// });
// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//     //    resolve ("value 2") 
//        reject (new Error("promise 2 rejected")) 
//     }, 2000);
// });
// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//        resolve ("value 3") 
//     }, 3000);
// })

// // --ye pta tha 
// // p1.then((value)=>{
// //     console.log(value)
// // })
// // p2.then((value)=>{
// //     console.log(value)
// // })
// // p3.then((value)=>{
// //     console.log(value)
// // })

// // ---promise_all.all (matab all promise resolve hony k bad bad result show hoga )
// /*let promise_all = Promise.all([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)

// })*/
// // =====Promise.allSettled (matlab all promise resolve hony k bad result show kary ga (or rejected vlaue bhi))
// /*let promise_all = Promise.allSettled([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)

// })*/
// // -------Promise.race (matlab jo bhi value sab se phely resolve hogi wo show kerway ga )
// /*let promise_all = Promise.race([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })*/
// // -------Promise.any (matlab jo bhi value sab se phely resolve hogi wo show kerway ga but reject ho jaty ho to us rejected value ko ignore kadey gi)
// /*let promise_all = Promise.any([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })*/
// // -------Promise.resolve (matlab sub value ko resolve kary ga rejected value ko show kerway ga )
// // -------Promise.resolve (matlab sub value ko reject kary ga rejected value ko show kerway ga )
// let promise_all = Promise.reject([p1,p2,p3])
// promise_all.then((value)=>{
//     console.log(value)
// })



// =======async awit
/*
async function waiz() {
    let karachi = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("karcahi 27 deg")
        }, 3000);
    })
    let  lhr = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve ("lhr 28 deg")
        }, 7000 );
    })

    // console.log(waiz())
        // karachi.then(alert)
        // lhr.then(alert)
        console.log("karachi fatch.....")
        let k_w = await karachi
        console.log("karachi fatch")
        console.log("lhr fatch.....")
        let L_w = await lhr
        console.log("lhr fatch")
        return [k_w,L_w]

}

console.log("welcom to weather control room")
let a = waiz();
a.then((value)=>{
    console.log(value)
})
*/




/*
async function waiz(){
    let karachi = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 deg")
        },2000);
    })
    let lhr = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("30 deg")
        },5000);
    })
    // karachi.then(alert)
    // lhr.then(alert)
  console.log("fatching karachi weather")
  let k_w = await karachi;
  console.log("fatched"+ k_w)
  
  console.log("fatching lhr weather")
  let l_w = await lhr
  console.log("fatched"+ l_w)
  
    return [k_w,l_w]
}
const Waiz = async()=>{
    console.log("hey i m waiz")
}


let main = async ()=>{
    console.log("welcme to weather control room")
    let a = await waiz();
    let b = await Waiz()
//     a.then((value)=>{
//     console.log(value)
// })s
console.log(a)
}
main()*/







// ========== try {} catch (error) {}=======
// try{
    //     let age = +prompt("Enter your age")
    // if(age>123 || age == String ){
        
        //     throw new ReferenceError("this is not true")
        // }
        // } catch(error){
// console.log(error.name)
// // console.log(error.internal)
// console.log(error.stack)
// console.log(error.message)
// }
// console.log("the script is still runing")


// ========== try {} catch (error) {} & finally{} =======
/*const f = ()=>{
try {
    let a = 0
    console.log("program run successfully")
    // return
    console.log(program)
} catch (error) {
    console.log("this is an error")
    console.log(p);
}
// console.log("waiz");
finally{
    console.log("hamesha chaly ga errror ai ya na ai")
    //close the file
    //exit the loop
    //writre to the log file
}
}
 f()
//  console.log("waiz")*/



// =======festch api

// let api =fetch("https://jsonplaceholder.typicode.com/posts/1")
// api.then((value)=>{
//         console.log(value.status)
//         console.log(value.ok)
//         return value.json()
//     })
//     .then((value2)=>{
//             console.log(value2) 
//         })
        
        
        
// =======festch api post api
/*
let creat = async(jfgc)=>{
let options = {
    method:"POST",
    headers:{
        'Content-type': 'application/json'
    },
    body: JSON.stringify(jfgc),
}

//   .then((response) => response.json())
//   .then((json) => console.log(json));
let p =  await fetch('https://jsonplaceholder.typicode.com/posts', options)
let response = await p.json()
return response
}


const getTodo = async(id)=>{
   let response = await fetch('https://jsonplaceholder.typicode.com/posts/1' + id)
    let R = await response.json()
    return R 
    // .then((json) => console.log(json));
}



// console.log("options", options)
const mainfunc = async()=>{
    let todo = {
        mobile :"infinix",
        laptop:"hp",
        key:"silver"
     }
    let todoup = await creat(todo)
    console.log(todoup)
    console.log(await getTodo(5))
}
mainfunc()

*/
// ===========================
/*
const creat = async(todo)=>{


let options ={
    method:"post",
    headers:{
        'Content-type': 'application/json'
    },
    body:JSON.stringify(todo),
    
   
}
let p =await fetch('https://jsonplaceholder.typicode.com/posts', options )
let response = await p.json()
return response
}


const gettodo = async (id)=>{
    let response = await fetch('https://jsonplaceholder.typicode.com/posts/' + id)
  let R = await response.json()
  return R
}


const main = async()=>{
    let todo = {
        title:"pjd",
        body:"bar",
        user:34,
        idd:100
    }
    let todoD = await creat(todo)
    console.log(todoD)
    console.log(await gettodo(5))
}
main()
 
//   .then((response) => response.json())
//   .then((json) => console.log(json));
*/






// -----meta programing
// const waiz = {
//     mobile:"infinix",
// }
// console.log("before eval ",waiz)



// const key = "laptop"
// const value = "hp"

// testEvel = (()=>{ 
//     eval(`waiz.${key} = '${value}'`)
// })

// testEvel()
// console.log('After eval magic:', waiz)




// // ======----cookies in java script
/*
// console.log(document.cookie)
let div = document.createElement('div')
document.body.append(div)
document.cookie = "name1=waiz"
document.cookie = "name2=bilal99asx09"
document.cookie = "name3=azher9dfvdx909"
document.cookie = "name4=moid922909"
let key = prompt("enter your key")
let value = prompt("enter your value")
document.cookie = `${ encodeURIComponent (key)} = ${ encodeURIComponent(value)}`
// console.log(decodeURIComponent("yuksdjh%3Bwdvsh"))
console.log(document.cookie)
*/

// ===========local storage
/*
// let waiz = localStorage.setItem("name","waizzzz")
// console.log(waiz)

let key = prompt("enter key")
let value = prompt("enter value")

localStorage.setItem(key,value)
// console.log(`this value at ${key} is ${localStorage.getItem(key)}`)
console.log(`this value at ${key} is ${localStorage.getItem(key)}`)
if(key == "red" || key == "blue"){
localStorage.removeItem(key)
}

if(key == 0 || key == null){
    localStorage.clear()
}

*/


// ==============session Storage
/*
// // sessionStorage.getItem("name")
// // sessionStorage.setItem("name")
// // sessionStorage.clear()
// // sessionStorage.removeItem("name")
// let key = prompt("enter key")
// let value = prompt("enter value")
// sessionStorage.setItem(key,value)
// console.log(`${key} and ${value}`)

window.onstorage = (e)=>{
    confirm("change")
    console.log(e)
}
localStorage.setItem("ansari","waiz")
localStorage.setItem("ansari","ali")
localStorage.setItem("ansarisdc","alisdc")
localStorage.setItem("ansarisdc","sdczalisdc")

*/



// let arr = [2,3,4];
// let emp = []

// for (let i=0 ; i<arr.length; i++) {
//    let b=  arr[i]
//    console.log(b)
//    emp.push(b)
// //    console.log(emp)

// }
// console.log(emp)


// ===================class in java script
