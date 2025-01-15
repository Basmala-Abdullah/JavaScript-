//Lab 5


class Vehicle {
    static vehicleInstances=0;
    constructor(type, properties) {
        if (Vehicle.vehicleInstances >= 50) {
            throw new Error("Vehicle limit reached");
            
        }
        Vehicle.vehicleInstances++;
        this.type = type;
        this.properties = properties;


    }
    start() {
        console.log('Starting');
    }
    stop() {
        console.log('Stopping');
    }
}




//Car.prototype.__proto__ = Vehicle.prototype;
//Object.setPrototypeOf(Car.prototype, Vehicle.prototype);
class Car extends Vehicle{
    constructor(speed) {
        try {
            super('Car',speed);

        } catch (e) {
            console.log(e.message);
        }

    }
    drive() {
        console.log('Driving Car');
    }
}


//b- Write a function that checks whether an object is an instance of Car using two different ways
function checkObject(carObj){
    console.log('Way 1:');
    console.log('Is this object instanceof car? '+(carObj instanceof Car));

    console.log('Way 2:');
    console.log('Is this object.__proto__ === car.prototype? '+(carObj.__proto__ === Car.prototype));
}

let myCar = new Car(80);
myCar.drive();
checkObject(myCar);


/////////////////////////////////////////////////////////////////////////////////////////////////
// Lab 6


async function fetchData() {

    const usersRes = await fetch('https://jsonplaceholder.typicode.com/users');
    const postsRes = await fetch('https://jsonplaceholder.typicode.com/posts');
    const commentsRes = await fetch('https://jsonplaceholder.typicode.com/comments');


    const users = await usersRes.json();
    const posts = await postsRes.json();
    const comments = await commentsRes.json();

    console.log(users);
    console.log(posts);
    console.log(comments);
    return {Users: users, Posts: posts, Comments: comments};
}






fetchData().then((data) => {
    
    displayData(data.Users,data.Posts,data.Comments);
});



// data = fetchData()
// console.log(data)
// displayData(data.Users,data.Posts,data.Comments)

function displayData(users, posts, comments){
    tableData = document.getElementById('table-data');
    
    users.forEach((user) => {
        const tr = document.createElement('tr');
        //UserName
        let td = document.createElement('td');
        td.innerText=user.username;
        tr.appendChild(td);

        //Email
        td = document.createElement('td');
        td.innerText=user.email;
        tr.appendChild(td);

        //Company Name
        td = document.createElement('td');
        td.innerText=user.company.name;
        tr.appendChild(td);

        //Address Geo
        td = document.createElement('td');
        td.innerText=("Lat: "+ user.address.geo.lat + ", Lng: "+user.address.geo.lng);
        tr.appendChild(td);

        //Post and Comments
        td = document.createElement('td');
        let list = "<ul>"
        
        const userPosts =posts.filter(post => post.userId == user.id);
        userPosts.forEach((post)=>{
            let commentsNum = comments.filter(comment => comment.postId == post.id).length;
            td = document.createElement('td');
            list+=("<li> Post Title: " + post.title +", Comments No.: "+commentsNum+"</li>")

        })

        list+="</ul>"
        td.innerHTML = list;
        tr.appendChild(td);
        tableData.appendChild(tr);

    });
}



