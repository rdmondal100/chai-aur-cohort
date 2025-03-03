


const randomFunc = () => {
    const rand = Math.random()
    const randNumber = Math.floor(rand * 7)
    return randNumber
}
randomFunc()


const CalculateTotalBill = (amo) => {

    let amount = Number(amo)
    const amountType = typeof (amount)

    console.log(amountType)
    if (amountType != "number"){
        return "Enter a valid number amount"
    }
    

    if(amount>1000){
        return amount * .9
    }
    return amount
}


CalculateTotalBill(155)



const checkTruthyValue =  (value)=>{
    if(value){
        console.log("Truthy")
    }
else{    console.log("False")
}}



checkTruthyValue(1)
checkTruthyValue(0)
checkTruthyValue("Riday")
checkTruthyValue('')
checkTruthyValue([])




let salesData = [
    {product:"Laptop", price:1200},
    {product:"Smartphone", price:800},
    {product:"Headphones", price:150},
    {product:"Keyboard", price:80}
]


let initialValue = 0
const sum = salesData.reduce((accu,sale)=>
(
accu + sale?.price
),initialValue)

console.log(sum)