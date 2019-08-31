const example1 = [1, 2, 3, 4, 6, 7, 8]
const example2 = ["zach", "bob", "tim"]
const example3 = [
    {name: "zach", age: 4},
    {name: "bob", age: 10}
]

const evens = e=> e%2===0
const odds = e=> e%2 !== 0

const zachFilter= e=>e==="zach"

const ageFilter = e=> e.age>5

const answer1= [2, 4, 6, 8]
const answer2=[1, 3, 5, 7]
const answer3=["zach"]
const answer4= [{name: "bob", age: 10}]

function filter(arr, callback){
    return undefined
}

console.log([2, 4, 6, 8]===answer1)
console.log(filter(example1, odd)===answer2)
console.log(filter(example2, odd)===answer2)
console.log(filter(example3, odd)===answer2)


