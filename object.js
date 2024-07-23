var obj1 = {
    name: "Priya",
    Age: 20
}
console.log("Data type:",typeof(obj1));
console.log("Before adding place & area: " ,obj1);
obj1.place = "Madurai";
obj1.area = "Thallakulam";
console.log("After adding place & area: ", obj1);
console.log("Obj1 place value: ", obj1["place"]);

// second type
/*var obj = new Object();
obj.Name = "dharshini";
obj.Age = 20;
obj.Gender = "Female";

console.log("Before Delete", obj);
delete obj["Name"];
console.log("After delete", obj);*/


// third type
/*var obj2 = new cons1();
function cons1() {
    this.Fname = "Ram",
    this.Age = 21,
    this.Role = "volleyball player"
}*/
/*cons1();
console.log("Obj2: ", obj2);

console.log(Object.keys(obj2));
console.log(Object.values(obj2));*/
