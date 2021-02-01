const _ = require('lodash');

let data = [{ name: "mathan", age: "34" }, { name: "mathan", age: "23" }, { name: "mathan", age: "45" }]
let market = [{ seq: "12", age: "45", delist: true }, { seq: "23", age: "45", delist:false}]
let arr=[]

// _.remove(data,{

// })
let i = 0;
while (i < market.length) {
    _.remove(data, {
        age: market[i].age,
        [market[i]['delist']]:true
    
    })
    console.log([[market[i]['delist']]])
    i++;
}
console.log("Data:", data);
console.log("Market:", arr)

//async function main(){
//     let data = [{money:546,stock:34}, {money:45,stock:45}]
//     let stock = [{money:546,stock:674}, {money:45,stock:45}]

//     console.log("Before Data:",data)
//     console.log("Before Stock:",stock)
//     [data,stock] = methodFunction(data,stock);
//     console.log("After Data:",data)
//     console.log("After Stock:",stock)
// }

// function methodFunction(data,stock){
//     data[0].stock=45
//     stock[0].stock=23;
//     return {data,stock}
// }




// main()

