/*
1- Create an array method that calculates the average for an array of numbers.
    ex: var arr = [1, 2, 3, 4]
        arr.average() // should return the average
    Note: Handle validation
*/

Array.prototype.average = function(){
    if(this.length == 0) return 0;
    else{
        var sum=0;
        var length=0;
        this.forEach(function(value){
            if(isNaN(value)){
                console.log(value+" is Invalid Value");
            }
            else{
                sum += Number(value);
                length++;
            }
        });
        if(length!==0){
            return (sum/length);
        }else{
            console.log("Invalid Array Values");
            return 0;
        }
    }
}

var arr = [1,2,3,4]


console.log(arr.average());

//2- When trying to convert an object to string, the output is always '[object object]'.
/* 
a- Change the default output for all objects to be 'This is an object'.
ex: 
    var obj = {};
    String(obj); // Output: 'This is an object'.

  b- Make String(obj) of only the following object return the content of the message while the all other objects still return 'This is an object'.
        var obj = { message: 'This is a message' };
        String(obj) // Output: 'This is a message'.
*/

Object.prototype.toString = function(){
    if(this.message === undefined){
        return 'This is an object';
    }
    else{
        return this.message;
    }
}

var obj = {};
console.log(String(obj));
obj = {message: 'This is a message'};
console.log(String(obj));

/*
3- You're tasked with modeling vehicles and cars in a transportation app:
    - A Vehicle has type and speed properties.
    - All vehicles can start and stop.
    - A Car inherits from Vehicle and has an additional drive method.

    a- Implement this using ES5 function constructors
     - Limit the number of Vehicle instances to 50. If an attempt is made to create the 51st vehicle, throw an error with the message: 'Vehicle limit reached'.
     - the implementation of the methods can be console.log only or you can leave them empty
 
    */
 var vehicleInstances = 0;

function Vehicle(type, properties){
    if(vehicleInstances>=50){
        throw new Error("Vehicle limit reached");
    }
    

    vehicleInstances++;
    this.type= type;
    this.properties=properties;
    

}

Vehicle.prototype.start = function() {
    console.log('Starting');
};

Vehicle.prototype.stop = function() {
    console.log('Stopping');
};


//Car.prototype.__proto__ = Vehicle.prototype;
Object.setPrototypeOf(Car.prototype, Vehicle.prototype);
function Car(speed){
    try {
        Vehicle.call(this,'Car',speed);

    }catch(e){
        console.log(e.message);
    }

}
Car.prototype.drive = function() {
    console.log('Driving Car');
};


//b- Write a function that checks whether an object is an instance of Car using two different ways
function checkObject(carObj){
    console.log('Way 1:');
    console.log('Is this object instanceof car? '+(carObj instanceof Car));

    console.log('Way 2:');
    console.log('Is this object.__proto__ === car.prototype? '+(carObj.__proto__ === Car.prototype));
}

var myCar = new Car(80);
myCar.drive();
checkObject(myCar);
