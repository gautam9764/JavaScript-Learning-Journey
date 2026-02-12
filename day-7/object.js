{
    //Object In JavaScript:
    {
        let obj = {
            name: "Sanorita",
            age: 19,
            isMarried: false,
        };

        console.log(obj);
    }
    {
        let car = {
            brand: "lamborgini",
            color: "red",
            maxSpeed: 180,
            "*": "HTML CSS JavaScirpt",
            "full name": "manas kumar lal",
            stop: () => {
                console.log("stopping the car...");
            },
            start: function () {
                console.log("starting the car...");
            },
        };
        // Accessing Object Properties
        console.log(car);
        // 1. Dot Notation (Most Common)
        console.log(car.brand);
        car.start();
        car.stop();
        // 2. Bracket Notation (Useful with variables or special characters or strings with white spaces)
        console.log(car["brand"]);
        car["start"]();
        let test = "full name";
        console.log(car[test]);
        console.log(car["*"]);
    }
    // Create an object using the Object constructor:
    {
        let obj = new Object({
            name: "manas",
        });

        let obj2 = {
            falna: "laskjdf",
            dhikna: "ldkjfldsf",
        };

        obj.age = 19;
        obj2.gamma = "something";

        console.log(obj);
        console.log(obj2);
    }
    // Updating or Adding New Propertie
    {
        let obj = {
            name: "manas",
            age: 23,
        };

        obj.name = "Manas Kumar Lal";
        obj.city = "bhagalpur";
    }
    //   Deleting Properties
    {
        let obj = {
            name: "manas",
            age: 23,
        };
        delete obj.age;

        console.log(obj);
    }
    //   this Keyword in object
    {
        {
            let obj = {
                "names": "javascript",
                greet: function () {
                    console.log(`hello for ${this.names}`);
                }
            }
            obj.greet();
            console.log(this.names);
        }
    }
    {
        {
            {
                let obj = {
                    "names": "javascript",
                    greet: () => {
                        console.log(`hello for ${this.names}`);
                    }
                }
                obj.greet();
                console.log(this.names);
            }
        }
    }
    {
        let obj = {
            "names": "javascript",
            greet: function () {
                console.log(`hello for ${this}`);
            }
        }
        obj.greet();
    }
    // Object Methods
    // Object.keys(obj)
    {
        let obj = {
            name: "Manas",
            age: 20,
            city: "Rajkot"
        };

        console.log(Object.keys(obj));
        // ["name", "age", "city"]
    }
    // Object.values(obj)
    {
        let obj = {
            name: "Manas",
            age: 20,
            city: "Rajkot"
        };

        console.log(Object.values(obj));
        // ["Manas", 20, "Rajkot"]
    }
    // Object.entries(obj)
    {
        let obj = {
            name: "Manas",
            age: 20
        };

        console.log(Object.entries(obj));
        // [  ["name", "Manas"],["age", 20] ]
    }
    // Object.assign(target, source)
    {
        let obj1 = { a: 1 };
        let obj2 = { b: 2 };

        let result = Object.assign(obj1, obj2);

        console.log(result);
        // { a: 1, b: 2 }
    }
    // Object.freeze(obj)
    {
        let user = {
            name: "Manas",
            age: 20
        };

        Object.freeze(user);

        user.age = 25;      // ❌ not allowed
        user.city = "Surat"; // ❌ not allowed

        console.log(user);
        // { name: "Manas", age: 20 }
    }
    // Object.seal(obj)
    {
        let user = {
            name: "Manas",
            age: 20
        };

        Object.seal(user);

        user.age = 25;        // ✅ allowed
        user.city = "Surat"; // ❌ not allowed

        console.log(user);
        // { name: "Manas", age: 25 }
    }
    // obj.hasOwnProperty(key)
    {
        let car = {
            brand: "BMW",
            color: "Black"
        };

        console.log(car.hasOwnProperty("brand"));
        console.log(car.hasOwnProperty("price"));
        // true
        // false
    }
    {
        // | Method | Use |
        // | ------------------ | ----------------- |
        // | `Object.keys()` | All keys |
        // | `Object.values()` | All values |
        // | `Object.entries()` | Key - value pairs |
        // | `Object.assign()` | Merge objects |
        // | `Object.freeze()` | No change allowed |
        // | `Object.seal()` | Modify only |
        // | `hasOwnProperty()` | Key exists or not |

    }
    // What is singleton object in js?

    // What is singleton object in js?

    // Example of Singleton Object

    {
        let user = {
            name: "Manas",
            age: 20
        };

        let admin = user;   // no new object created

        admin.age = 25;

        console.log(user.age);   // 25
    }
    // ❌ Non-Singleton (Multiple Objects) 
    {
        let obj1 = { name: "JS" };
        let obj2 = { name: "JS" };

        console.log(obj1 === obj2); // false
    }
    // ✅ Singleton (Same Object) 
    {
        let obj1 = { name: "JS" };
        let obj2 = obj1;

        console.log(obj1 === obj2); // true
    }
    

}

// let obj = {
//     name: "alpha",
//     age: 24,
// }

// let obj2 = {};
// Object.assign(obj2, obj)

// let keys = Object.keys(obj)
// console.log(keys)

// let values = Object.values(obj);
// console.log(values)

// let entries = Object.entries(obj);
// console.log(entries)

// for(let test in obj){
//     console.log(obj[test])
// }

// let obj = {
//     name: "alpha",
//     age: 24,
// }

// Object.freeze(obj);

// obj.city = "bhagalpur"
// delete obj.name
// obj.name = "manas kumar lal"

// Object.seal(obj);

// obj.city = "sldkjfals;d";
// delete obj.name;
// obj.name = "manas kumar lal"

// console.log(obj.hasOwnProperty("alpha"))

// let obj = {
//     name: "mkl",
//     city: "bgp",
//     age: 24
// }

// let name = obj.name;
// let city = obj.city;

// let {city, name, age} = obj;

// let arr = [1,"lskdjf", {name:"something"}]

// let [,, a] = arr;

// console.log(name, city, age);
// console.log(a)









// // question 1:

// let person = {
//     name: "mkl",
//     age: 19,
//     city: "patna",
// }

// person.email = "example@gmail.com"
// delete person.city

// for(let key in person){
//     console.log(`Value of ${key} is ${person[key]}`)
// }

// question2:

// let obj = {
//     firstName: "manas",
//     middleName: "kumar",
//     lastName: "lal"
// }

// let convertToFullName = (param) => {
//     return `${param.firstName} ${param.middleName} ${param.lastName}`
// }

// let fullName = convertToFullName(obj)
// console.log(fullName)

// // question3:

// obj = {
//     name: "lsdajf",
//     age: 24,
//     city: "bgp",
//     isMarried: true,
// }

// let noOfKeys = Object.keys(obj).length;
// console.log(noOfKeys)

// //question 4:

// let arr = [
//     {name: "a", role: "admin"},
//     {name: "b", role: "user"},
//     {name: "c", role: "admin"},
//     {name: "d", role: "superAdmin"},
//     {name: "e", role: "admin"},
// ]

// function filterArray(arr, role){
//     let filteredItem = arr.filter((item)=>{
//         return item.role === role
//     })
//     let resultArray = filteredItem.map(item=>{
//         return item.name
//     })
//     return resultArray
// }

// let resultArray = filterArray(arr, 'superAdmin')
// console.log(resultArray)

// // question5:

// let products = [
//     {id:1, name: "samsung Galaxy"},
//     {id:2, name: "poco m24"},
//     {id:3, name: "apple m2"}
// ]

// function search(products, searchKeyword){
//     let filteredArray = products.filter(obj=>{
//         return obj.name.toLowerCase().includes(searchKeyword.toLowerCase())
//     })
//     console.log(filteredArray)
// }

// search(products, "2");

// // questin 6:
// {
//     let comments = [
//         { postId: 1, comment: "hello" },
//         { postId: 2, comment: "owesome video bhaiya" },
//         { postId: 1, comment: "how are you" },
//         { postId: 1, comment: "hello" },
//         { postId: 2, comment: "owesome video bhaiya" },
//         { postId: 1, comment: "how are you" }
//     ]

//     function groupByPost(comments) {
//         let groupedComments = {}

//         comments.forEach(obj => {
//             let { postId, comment } = obj;
//             if (groupedComments.hasOwnProperty(postId)) {
//                 groupedComments[postId].push(comment)
//             } else {
//                 groupedComments[postId] = [comment]
//             }
//         });

//         console.log(groupedComments)

//     }

//     groupByPost(comments)
// }
// // question 7:

// let params = {
//     search: "alpha",
//     page: 2,
//     sort: 'asc',
//     falna: 'aldsjf',
// }

// function createUrl(params){
//     let url = "";
//     for(let key in params){
//         url = url + `${key}=${params[key]}&`
//     }
//     let finalUrl = url.slice(0, url.length-1)
//     return finalUrl
// }

// let url = createUrl(params)
// console.log(url)
