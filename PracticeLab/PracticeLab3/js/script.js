
function cylinder(height, diameter){
  this.height = height; //getting the heightr
  this.diameter = diameter;//getting the diameter
}

cylinder.prototype.volume = function(){ 
let radius = this.diameter /2; //getting the radius
return (Math.PI * radius * radius * this.height); //V = πr2h formula for getting the volume of cyclines
}
let a = new cylinder(6,9);
console.log(a.volume().toFixed(4)); //.tofixed(4) is to set decimal places to 4



let library = [ 
  {
      title: 'Bill Gates', 
      author: 'The Road Ahead',
      readingStatus: true
  },
  {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      readingStatus: true
  },
  {
      title: 'Mockingjay: The Final Book of The Hunger Games',
      author: 'Suzanne Collins',
      readingStatus: false
  }];
for (let i = 0; i < library.length; i++) 
 {
  let book = "'" + library[i].title + "'" + ' by ' + library[i].author + ".";
  if (library[i].readingStatus) {
    console.log("Already read " + book);
  } else
  {
   console.log("You still need to read " + book);
  }
 }


 function hasKey(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  }
console.log(hasKey({color: "Red", shape: "Circle", language: "English"}, "color"));

//console.log(hasKey({color: "Red", shape: "Circle", language: "English"}, "color"));



String.prototype.sub_String = function() 
{
  var subset = []; 
  for (var m = 0; m < this.length; m++) //1st loop holds the starting character  
  {
    for (var n = m+1; n<this.length+1; n++) //2nd loop adds the next character every iteration for the subset to form
    {
      subset.push(this.slice(m,n));
      //slice() method returns selected elements in an array, as a new array. 
      //push()method adds new items to the end of an array also changes the length of the array and returns the new length.
      
    }
  }
  return subset; //returns subset
};

console.log("dog".sub_String()); //input





let student =  { 
  name : "David Rayy", 
  sclass : "VI", 
  rollno : 12  };
console.log(student);
delete student.rollno;
console.log(student);