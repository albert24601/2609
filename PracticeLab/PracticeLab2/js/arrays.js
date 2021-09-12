let x = [1, "hello", true, function(){
    console.log("Hello there !!!");
}]

let nums= [1,23,1,3,324,];

let android9= {name: "Pie", api: 28 };
let android8= {name: "Oreo", api: 27 };

function displayInfo(date){
    console.log(`${this.name} was released on ${date}`);
}

displayInfo.apply(android8, "August 21, 2017");