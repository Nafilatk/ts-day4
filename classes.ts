interface Person {
    name: string;
    age: number;
}

class Student implements Person {
    constructor(public name: string, public age: number) {}
}

const s1 = new Student("nafila", 18);
console.log(s1.age);
