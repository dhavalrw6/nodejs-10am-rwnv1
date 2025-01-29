// console.log(__filename);
// console.log(__dirname);

let handleMsg = ()=>{
    console.log("Hello User..");    
}

// setTimeout(handleMsg,2000);
setTimeout(()=>{
    console.log("Hello User..");    
},2000);

