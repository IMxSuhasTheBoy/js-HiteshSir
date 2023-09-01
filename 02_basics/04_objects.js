// const tinderUser = new Object() 

// makes non singleton obj
const tinderUser = {}    

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary",
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

// const obj3 = { obj1, obj2 } // wasted
// console.log(obj3["obj1"]); 

// obj3 : targe    optional ↓,      sources        : optonal: empty  obj to acc. sources .
// const obj3 = Object.assign({}, obj1, obj2, obj4) // works : object assign mdn

const obj3 = {...obj1, ...obj2} // easier with spread

// console.log(obj3)

const users = [
    {
        id: 1,
        email: "hasdf@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

//----------------------
// const test = users.map((ele)=>{
//     console.log(ele.email)
// })
//----------------------

// console.log(users[0].email)
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  // ret. arr of key's can be usefull
// console.log(Object.values(tinderUser)); // arr of values ,  all arr methods apllicable, when got from constructor like this
// console.log(Object.entries(tinderUser)); // amazing

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//-----destructuring  objects , are imp in react-----

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// // course.courseInstructor

// const {courseInstructor} = course
// console.log(courseInstructor);      // destructure : key is now a const with it's value


const {courseInstructor: instructor} = course 
const {coursename: nameOfCourse} = course      // destructure, with const name as we want 
// console.log(`${instructor} with ${nameOfCourse}, is awesome!`);


// ----------------json structure ex.: api data got in object kind form 
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
// ----------------json------------structure ex.

// -------api data got in arr of obj kind form 
[
    {},
    {},
    {}
]

// tree form of json data is easier for understanding!
// json js object notation : for universal format use of data through api fetch