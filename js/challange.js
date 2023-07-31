// let x = Math.floor(Math.random()*100)
// let chances=0
// let num
// do{
//    num=parseInt(prompt("enter the number"))
//   chances++
//   if(num>x){
//     console.log("Number Is Smaller than" + num)
//   }
//   else if(num<x){
//     console.log("Number Is Greater than" + num)
//   }
  
// }while(num!=x&& chances<100)
// if(chances>=100){
//   console.log("You Lose the number was " + num)
// }
// else{
// console.log("Your score is "+ (100-chances))
// }



// ---Exercise No.2--------vedio 39------------------------------------1st

/*
let user = prompt('Enter s , w or g');
let cpu_input = Math.floor(Math.random()*3);
let cpu = ["s", "w", "g"][cpu_input];

const match = (cpu,user)=>{
    if(cpu === user){
        return "Nobody. match is tied"

    }else if (cpu === "s" && user === "w"){
        return "cpu"
    }else if (cpu === "w" && user === "s"){
        return "user"
    }
    
    else if (cpu === "g" && user === "s"){
        return "cpu"
    }else if (cpu === "s" && user === "g"){
        return "user"
    }

    else if (cpu === "w" && user === "g"){
        return "cpu"
    }else if (cpu === "g" && user === "w"){
        return "user"
    }
}
let result = match(cpu,user);
document.write(`cpu:${cpu} <br> user ${user}<br> the winner is: ${result.toUpperCase()}`);
*/



// --------------exersise 3 in vedio 50 but i lerning vedio 40 wow its amazing
/*
let jok =  [
    {
        "category": "Programming",
        "type": "single",
        "joke": "If Bill Gates had a dime for every time Windows crashed ... Oh wait, he does.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 22,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "\"Honey, go to the store and buy some eggs.\"\n\"OK.\"\n\"Oh and while you're there, get some milk.\"\nHe never returned.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 18,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "A man is smoking a cigarette and blowing smoke rings into the air. His girlfriend becomes irritated with the smoke and says \"Can't you see the warning on the cigarette pack? Smoking is hazardous to your health!\" to which the man replies, \"I am a programmer.  We don't worry about warnings; we only worry about errors.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 38,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "\"We messed up the keming again guys.\"",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 20,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "// This line doesn't actually do anything, but the code stops working when I delete it.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 12,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Hey Girl,\nRoses are #ff0000,\nViolets are #0000ff,\nI use hex codes,\nBut I'd use RGB for you.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 41,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "ASCII silly question, get a silly ANSI.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 25,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "The generation of random numbers is too important to be left to chance.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 39,
        "safe": true,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Java is like Alzheimer's, it starts off slow, but eventually, your memory is gone.",
        "flags": {
            "nsfw": false,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": false
        },
        "id": 27,
        "safe": false,
        "lang": "en"
    },
    {
        "category": "Programming",
        "type": "single",
        "joke": "Saying that Java is nice because it works on every OS is like saying that anal sex is nice because it works on every gender.",
        "flags": {
            "nsfw": true,
            "religious": false,
            "political": false,
            "racist": false,
            "sexist": false,
            "explicit": true
        },
        "id": 30,
        "safe": false,
        "lang": "en"
    }
]
// let jokes = document.getElementById('jokes')
let index = Math.floor(Math.random()*jok.length - 1)
jokes.innerHTML = jok[index].joke
*/

// --------------exersise 4 in vedio 64 but i lerning vedio 51 clock
/*
setInterval(() => {
    let date = new Date();
    // let d = new Date().getDate
    
    let as= date.getDay
    console.log(as);
    
    let options = {
        weekday:"long" , year:"numeric", month:"short",
        day:"numeric" , hour:"2-digit", minute:"2-digit",
        second:"2-digit"
    };
    let d = date.toLocaleTimeString("en-us",options);
    
    time.innerHTML=d
    
}, 1000);
*/
/*
setInterval(() => {
    let d = new Date()
   time.innerHTML=d 
    
}, 1000);
*/



// --------------exersise 5 in vedio 72
/*
let a =[
    "waiz",
    "afaz",
    "ali",
    "sleep",
    "azher",
    "moid"
]
const sleep = async (second)=>{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           resolve (true) 
        }, second * 2000);
    })
}
const showH =async (massage)=>{
  await sleep(1)
    // console.log(massage)
    text.innerHTML=text.innerHTML + massage +"<br>"
}


    //  for (let i=0; i<a.length; i++ ){
    //      showH(a[i])
    //   }
(async()=>{
for (let i=0; i<a.length; i++ ){
    await showH(a[i])
 }
})()
// (async()=>{
//     for (let i=0; i<a.length; i++ ){
//        await showH(a[i])
//     }
// })()




    // "initializing Hack Tool",
    // "Connecting to Facebook",
    // "Connectinf=g to Server 1",
    // "Connection Faild Retrying....",
    // "Connecting to Server 2",
    // "Connected Suuccessfully.....",
    // "user WaizAnsari",
    // "Trying bruit Force",
    // "200k password tried",
    // "match not found",
    // "Another 200k password tried",
    // "match found",
    // "Accessing Account",
    // "Hack successfull"
    */




    // --------------exersise 6 in vedio 84
    // function save(){
    //     var key = document.getElementById('note-title').value;
    //     let a = document.getElementById("note-field").value;
    //     localStorage.setItem(key, a);
        
    //     let html = '';
    //     for (let [a, b] of Object.entries(localStorage)) {
            
    //         html += `<p class="display_key">${a} </p> <p class="display_value"> ${b} </p>`;
           
    //       }
    //       document.getElementById('note-display').innerHTML = html;
        
    
    //     document.getElementById('note-title').value = '';
    //     document.getElementById("note-field").value = '';
    // }
    
    // let html = '';
    // for (let [a, b] of Object.entries(localStorage)) {
        
    //     html += `<p class="display_key">${a} </p> <p class="display_value"> ${b} </p>`;
       
    //   }
    //   document.getElementById('note-display').innerHTML = html;



/*
// submit.addEventListener("click" , (e)=>{
//     e.preventDefault()
    let titleC = prompt("title")
    let descriptC = prompt("descript")
    //  console.log(`this value at ${titleC} is ${localStorage.getItem(descriptC)}`)
    localStorage.setItem(titleC,descriptC)
    // console.log(e)
    for(let i=0 ; i<todo.length;i++){

    }
    todo.innerHTML = `<h1>${titleC}</h1>  <p>${descriptC}</p>`
    title.value = ""
    descript.value = ""
    // if(key == "red" || key == "blue"){
    //     localStorage.removeItem(key)
    //     }
        
    //     if(key == 0 || key == null){
    //         localStorage.clear()
    //     }   
// }) 
// deletebtn.addEventListener("click" , (e)=>{
// e.preventDefault()
// localStorage.removeItem("todo")
// todo.innerHTML =""
// }) 

*/














/* //======================shi ha ye

    submit.addEventListener("click" , (e)=>{
         e.preventDefault()
         let titleC = title.value
         let descriptC = descript.value
         //  console.log(`this value at ${titleC} is ${localStorage.getItem(descriptC)}`)
         localStorage.setItem("todo",JSON.stringify([titleC,descriptC]))
         console.log(e)
         todo.innerHTML = `<h1>${titleC}</h1>  <p>${descriptC}</p>`
         titleC.value = ""
         descriptC.value = ""
         
   }) 
   deletebtn.addEventListener("click" , (e)=>{
    e.preventDefault()
    localStorage.removeItem("todo")
    todo.innerHTML =""
}) 
// localStorage.clear()

*/



 
// function* generator(){
//  let i = 100
//  while(true){
   
//   i++
//   yield "kh0"+"$379!" + i
  
// }
// }

// let gen = generator()
// let sp = document.getElementById('sp')


//   function Get_id(event){
//       let a = `${  document.getElementById("new_id").innerText=gen.next().value }`
//       sp.append(a)
//     }

