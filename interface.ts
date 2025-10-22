// interface Students{
//     name:string,
//     age : number
// }

// class Student:Students = {
//     name :"nafila",
//     age : 18
// }

// console.log(Student.name);


interface Math{
    (a:number, b: number) : number
}

const addition : Math =(x,y) => x+y
console.log(addition(4,6));