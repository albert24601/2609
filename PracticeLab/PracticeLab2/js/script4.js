class Student{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    setName(name){
        this.name = name;
    }
    getName(){
        return this.name;
    }
    setAge(age){
        this.age = age;
    }
    getAge(){
        return this.age;
    }
}

class ISStudent extends Student{
    constructor(name, section,psubject){
        super(name,section);
        this.psubject = psubject;
    }
    getpsubject(){
        return this.psubject;
    }
}


let p1 = new Student();
p1.setName("Juan Dela Cruz");
p1.setAge(21);
console.log(`${p1.getName()} is ${p1.getAge()} years old`);

let p2 = new Student("Pedro Ramos", "19");
console.log(`${p2.getName()} is ${p2.getAge()} years old`);

let p3 = new ISStudent("Cynthia Garcia", 18, "ICS2609");
console.log(`${p3.getName()} is taking ${p3.getpsubject()}`);