function Student(name, course, section){
    this.name = name;
    this.course = course;
    this.section = section;
    
}

Student.prototype.display = function(){
    console.log(`${this.name} :: ${this.course} :: ${this.section}`);
}

let s1 = new Student("Albert Maglines", "BSIS", "3ISB");
let s2 = new Student("Bernice Estrada", "BSIS","3ISB" );
let s3 = new Student("Maria Jesusa Latina", "BSIS", "3ISA" );

s1.display();
s2.display();
s3.display();