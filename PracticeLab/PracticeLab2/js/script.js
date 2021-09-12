let covidPhl = {
    totalCases: 217000, recovered: 157000, deaths: 3520
};

function covidStat(totalCases, recovered, deaths){
    let covid = {};
    covid.totalCases = totalCases;
    covid.recovered = recovered;
    covid.deaths = deaths;

    return covid;
};

let covidPhl2 = covidStat(217000, 157000, 3520);

function Covid(totalCases, recovered, deaths){
    this.totalCases = totalCases;
    this.recovered = recovered;
    this.deaths = deaths;
};
let covidPhl3 = new Covid(21700, 157000, 3520);

class PhlStat{
        constructor(totalCases, recovered, deaths){
            this.totalCases = totalCases;
            this.recovered = recovered;
            this.deaths = deaths;
        }
}

let covidPhl4 = new PhlStat(21700, 157000, 3520);

let covidPhl5 = new function(){
    this.totalCases = 217000;
    this.recovered = 157000;
    this.deaths = 3520;
}

console.log(covidPhl);
console.log(covidPhl2);
console.log(covidPhl3);
console.log(covidPhl3 instanceof Covid);
console.log(covidPhl3 instanceof Object);
console.log(covidPhl4);
console.log(covidPhl5);