let person = [
    {id:1,name:"Ram",age:25},
    {id:2,name:"Sita",age:23},
    {id:3,name:"Gita",age:24},
    {id:4,name:"Hari",age:26}
]
let ages =[];
for(var i =0; i< person.length; i++)
{
   ages.push(person[i].age);
}
console.log(ages);