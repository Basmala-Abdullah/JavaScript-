
function checkPalindrome(str){

    // return str.split('').reverse().join('') === str
    // if(!str){
    //     return console.log('')
    // }
    if (typeof str === 'string' || str instanceof String){
        var len = str.length;
        for( i=0; i< len/2; i++){
            if(str[i] != str[len-i-1]){
                console.log(str+" is not palindrome!")
                return false;
            }
        }
        console.log(str+" is palindrome!")
        return true;
    }else{
        console.log(str+" is not string!")
    }
}

checkPalindrome("abba")

function calcDiscount(price, discount){
    
    if( !(typeof price === 'number' && !isNaN(price) && price > 0) )
    {
        console.log("Not valid price number")
    }else if ( !(typeof discount === 'number' && !isNaN(discount)&& discount >0 && price > discount) ){
        console.log("Not valid discount number")
    }else{
        var discountIndec = discount/100;
        price -= (price * discountIndec);
        console.log("Price after discount is "+price);
        return price;
    }

}
calcDiscount(100,45)

//(3) create an array with your favourite movies
Movies = ["interstellar", "Shawsank Redemption", "The Pursuit of Happyness"];
//a- copy the array into a different variable
copiedMovies = Movies.slice(); //when no arguments, it returns the entrie array, note that slice() makes shallow copy -> so when including objects avoid using it, use jason stringfy and jason parse
console.log("copied movies: "+ copiedMovies);
//b- replace the third element with a different movie
Movies[2]="Up";
console.log("movies after replacement: "+Movies);
//c- return the last array item in 3 different ways
function way1(){
    return Movies[Movies.length - 1];
}

function way2(){
    return Movies.slice(-1);
}

function way3(){
    return Movies.pop();
}

console.log("ways to return the last element\nway 1: "+way1());
console.log("way 2: "+way2());
console.log("way 3: "+way3());
Movies.push("Up");
//d- add a new movie to the beggining
Movies.unshift("A new added movie");
console.log(Movies);

//(4) Write a function that accept a sentence and return the longest word within the input
/*
Example : 'Web Development Tutorial'
Output : 'Development'
*/

function checkLongestWord(str){
    myStrArray = str.split(" ");
    var maxLength =-1;
    var longestWord;
    for(var i=0;i<myStrArray.length;i++){
        if(maxLength<myStrArray[i].length){
            maxLength=myStrArray[i].length;
            longestWord = myStrArray[i];
        }
    }
    return longestWord;

}

console.log(checkLongestWord("Web Development Tutorial"));

//(5) Create a function that takes the following:
/*
    a- User name using prompt ( required)
    b- User Grades in one prompt in the format: 
        “90,50,30,10”
    Welcome the user by Name on console
    and display grades as table on console
    after that show the average grade of user’s grades.
*/

var username = prompt('Enter your name: ');
var tempName = username;
tempName = tempName.toLowerCase();
var valid=true;
if(username.length==0){
    valid=false;
}
for(var i=0;i<tempName.length;i++){
    if(! (tempName[i]>='a' && tempName[i]<='z' )  )
        valid=false;
}
if(valid){
    console.log("Welcome "+username+"!")
    var validGrades=true;
    var grades = prompt('Enter your grades: ');
    var avgGrades=0;
    grades = grades.split(',');
    if(grades.length!== 4){
        validGrades=false;
    }
    else{
        for(var i=0;i<grades.length;i++){
            if(isNaN( Number(grades[i])) || Number(grades[i])<0 )
            {
                validGrades=false;
                break;
            }
        }
    }
    if(validGrades){
        console.table(grades);
        for(var i=0;i<grades.length;i++){
            avgGrades+= Number(grades[i]);
        }
        
        avgGrades/= grades.length;
        console.log("Average Grades: "+avgGrades);
    }else{
        console.log("Entered Invalid Grades");
    }

}else{
    console.log("Entered Invalid Name");
}



//(6)
/*
You are given an array of order objects. 
Each object represents an e-commerce order and contains details in the following format:
var orders = [
  {
    orderId: 'ORD001',
    customer: 'John Doe',
    items: 'item1:2,item2:1,item3:5',
    orderDate: '2023-12-01',
    deliveryDate: '2023-12-05',
    deliveryAddress: '123, Main Street, Springfield, USA',
  },
  {
    orderId: 'ORD002',
    customer: 'Jane Smith',
    items: 'itemA:3,itemB:4',
    orderDate: '2023-11-15',
    deliveryDate: '2023-11-20',
    deliveryAddress: 'Flat 4B, Elmwood Apartments, New York, USA',
  },
  {
    orderId: 'ORD003',
    customer: 'Alice Johnson',
    items: 'itemX:1',
    orderDate: '2023-10-10',
    deliveryDate: '2023-10-15',
    deliveryAddress: '456, Pine Lane, Denver, USA',
  }
];

Transform the orders array into the following format:

var formattedOrders = [
  {
    orderId: 'ORD001',
    customer: 'John Doe',
    totalItems: 8,
    orderDate: '2023-12-01',
    deliveryDate: '2023-12-05',
    deliveryDuration: 4,
    deliveryCountry: 'USA',
    deliveryCity: 'Springfield',
    deliveryStreet: 'Main Street',
    buildingNumber: 123,
  },
  {
    orderId: 'ORD002',
    customer: 'Jane Smith',
    totalItems: 7,
    orderDate: '2023-11-15',
    deliveryDate: '2023-11-20',
    deliveryDuration: 5,
    deliveryCountry: 'USA',
    deliveryCity: 'New York',
    deliveryStreet: 'Elmwood Apartments',
    buildingNumber: 'Flat 4B',
  },
  {
    orderId: 'ORD003',
    customer: 'Alice Johnson',
    totalItems: 1,
    orderDate: '2023-10-10',
    deliveryDate: '2023-10-15',
    deliveryDuration: 5,
    deliveryCountry: 'USA',
    deliveryCity: 'Denver',
    deliveryStreet: 'Pine Lane',
    buildingNumber: 456,
  }
];
Notes:
1- The items string contains item names and their quantities in the format itemName:quantity. You need to calculate the total number of items.
2- The deliveryDuration is the number of days between orderDate and deliveryDate.
3- The deliveryAddress is always in the format: building number, street name, city, country.
4- If the buildingNumber is not a valid number (e.g., Flat 4B), include it as a string.
5- The original array should remain unchanged.

*/
var orders = [
    {
      orderId: 'ORD001',
      customer: 'John Doe',
      items: 'item1:2,item2:1,item3:5',
      orderDate: '2023-12-01',
      deliveryDate: '2023-12-05',
      deliveryAddress: '123, Main Street, Springfield, USA',
    },
    {
      orderId: 'ORD002',
      customer: 'Jane Smith',
      items: 'itemA:3,itemB:4',
      orderDate: '2023-11-15',
      deliveryDate: '2023-11-20',
      deliveryAddress: 'Flat 4B, Elmwood Apartments, New York, USA',
    },
    {
      orderId: 'ORD003',
      customer: 'Alice Johnson',
      items: 'itemX:1',
      orderDate: '2023-10-10',
      deliveryDate: '2023-10-15',
      deliveryAddress: '456, Pine Lane, Denver, USA',
    }
  ];
  

  function calcItemsNo(items){
    splited_items = items.split(':');
    var numberOfItems=0;
    for(var i=1;i<splited_items.length;i++){
        numberOfItems += Number(splited_items[i].charAt(0)); //reduce
    }
    return numberOfItems;
  }

  function calcDuration(start, end){
    var difference = end - start;
    var days = difference / (1000 * 60 * 60 * 24);
    return days;
  }

var  formattedOrders = orders.map(function(order){
    var deliveryAdd = (order.deliveryAddress).split(", ");
    return{
        orderId: order.orderId,
        customer: order.customer,
        totalItems: calcItemsNo(order.items),
        orderDate: order.orderDate,
        deliveryDate: order.deliveryDate,
        deliveryDuration: calcDuration(order.orderDate, order.deliveryDate),
        deliveryCountry: deliveryAdd[3],
        deliveryCity: deliveryAdd[2],
        deliveryStreet: deliveryAdd[1],
        buildingNumber: deliveryAdd[0]

    }
});

console.log(formattedOrders);