let stud = {name : "Pliskin",
            quiz1 : 88,
            quiz2 : (obj) };
let bonus = [10,15];

let aveQuiz = function(){
    return (this.quiz1 + this.quiz2) / 2;
}

let aveQuiz2 = function(bonus1 , bonus2 ){
    return (this.quiz1 + this.quiz2 + bonus1 + bonus2) / 2;
}
console.log(aveQuiz.call(stud)); //APPLY
console.log(aveQuiz2.apply(stud, bonus)); //CALL, FOR ARRAYS     
