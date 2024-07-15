//...........functions...............................
///...........number function............
function add(num1:number,num2:number):number{
    return num1+num2
}
add(10,9)
//................string function.....................
function fullName(name:string,fatherName:string):string{
    return `${name} ${fatherName}`
}
fullName('Asim', 'Azher');
///.................boolean function.............
function isMarried(status:boolean){
    if(status){
        console.log('married')
    }


    else{
        console.log('not married')
    }
}

isMarried(true);
////........array function.........................
let arr = [1, 2, 4, 5, 6]
function getArray(arr:number[]){
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        console.log(element);
    }
    return arr
}
getArray(arr);
//..................object function.............
function logPersonName(person:Tperson):void{
    console.log(person.name)
}
type Tperson = {
    name:string,
    age:number,
    gender:string
}
const person:Tperson={
    name:'Asim',
    age:20,
    gender:'male'
}
logPersonName(person);
//..............callback function................
function parentFunction(func:()=>void){
    console.log("I am parent");
    func()
}
function childFunction(){
    console.log("I am child");
}
parentFunction(childFunction)



//..........promises..................................
const returnMoney = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve('money received')
    }, 3000)
    setTimeout(()=>{
        reject('not received')
    }, 2000)
})
returnMoney
.then((val)=>{
    console.log(val)
})
.catch((err)=>{
    console.log(err)
})
.finally(()=>{
    console.log('done')
})
//...............async/await...............................
async function getMoney(){
    let money = await returnMoney;
    console.log(money)
}
try{
    getMoney()
}
catch(err){
    console.log(err)
}


















//...............callback function..............................
function makeupOrders (product:string, quantity:number, callback:()=>void){
    console.log(`ordering ${quantity} ${product}`)
    callback()
}

function receiveOrders(){
    console.log('Orders received')
}
makeupOrders('mascara', 5, receiveOrders);
makeupOrders('lipsstick', 15, receiveOrders);
makeupOrders('blush', 50, receiveOrders);
makeupOrders('serum', 12, receiveOrders);

//...................callbackhell.................

