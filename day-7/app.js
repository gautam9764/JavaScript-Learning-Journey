// string

{
  {
    let str = "Manas";
    let str2 = "Manas";
    let str3 = "Manas";
    let alpha = "manas" + 23 + "Kumar" + "lal";
    let beta = "halwa" + alpha;
    console.log(str, typeof str);
    console.log(str2, typeof str2);
    console.log(str3, typeof str3);
    console.log(alpha);
    console.log(beta);
  }

  {
    let firstName = "Manas";
    let middleName = "Kumar";
    let lastName = "Lal";

    let fullName = firstName + " " + middleName + " " + lastName;
    console.log(fullName);
    let fullName2 = `${firstName} ${middleName} ${lastName}`;
    console.log(fullName2);

    console.log(`My name is ${fullName}`);
  }

  {
    let a = 10;
    let b = 20;
    let c = 30;
    let str = `Number 1 = ${a} Number 2 = ${b} Number 3 = ${c}`;
    console.log(str);
  }

  {
    let gamma = `str = ${2 + 3 + 5 + 8 - 9}`;
    console.log(gamma);
  }

  {
    let str = new String("Manas");
    console.log(str);
  }

  {
    let str1 = "school4u";
    let str2 = "school\n4u"; //10 X(noe)   and 9 (yes)
    let str3 = "Hello \\n beta";
    console.log(str1, str1.length);
    console.log(str2, str2.length);
    console.log(str3, str3.length);

    let str = "hello world";

    console.log(str[1]);
    console.log(str[5]);
    console.log(str[7]);

    str[7] = "u";
    console.log(str); // hello wurld
  }

  {
    let str2 = "gautam";
    for (let ch of str2) {
      str2 = str2 + ch + " ";
    }
    console.log(str2);

    for (let key in str2) {
      console.log(key);
    }
  }

  // String Properties & Methods in JavaScript
  {
    // Properties;

    let str = "mca";
    console.log(str.length);
  }
  // methods

  {
    {
      let str = "Hello";
      let upperCaseStr = str.toUpperCase();
      let lowerCaseStr = str.toLowerCase();
      console.log(str, upperCaseStr, lowerCaseStr);
    }
    {
      let str = "      He  llo        ";
      let trimmedStr = str.trim();
      console.log(str);
      console.log(trimmedStr);
    }
    {
      let firstName = "manas";
      let middleName = "kumar";
      let lastName = "lal";
      let fullName = firstName + middleName + lastName;
      console.log(firstName);
      console.log(fullName);

      let fullName2 = firstName.concat(middleName, lastName);
      console.log(fullName2);
    }
    {
      let str = "I am a boy, and i am a boy";
      let check = str.includes("bts");
      console.log(check);
      console.log(str.indexOf("z"));
      console.log(str.charAt(2));

      console.log(str.replace("boy", "girl"));
      console.log(str.replaceAll("boy", "girl"));
    }
    {
      let username = "@manaskumarlal";

      console.log(username.slice(1));
      console.log(username.slice(-8, 11));
      console.log(username.substring(-8, 11));
    }
    {
      let str = "alpha beta gamma";
      console.log(str.split(" "));
    }
  }

  // let str = "i am a boy"
  // str = str.replace("boy", "girl")
  // console.log(str)

  // question1
  // let fullName = prompt("Enter your full name");

  // let username =  `@${fullName.trim().replaceAll(" ","")}_${fullName.length}`
  // console.log(username)

  // question 2

  // let str = prompt("Enter any string");
  // let ch = prompt("Enter any character");

  // let count=0;
  // for (let val of str) {
  //     if (val.toLowerCase() === ch.toLowerCase()) {
  //         count++;
  //     }
  // }
  // for (let index in str) {
  //     if (str[index].toLowerCase() === ch.toLowerCase()) {
  //         console.log("occurence position = ", index)
  //         count++;
  //     }
  // }
  // console.log("Count =", count)

  // question 3

  // let str = "hello i am a boy alsdjf ldsjflds f"
  // console.log(str.split(" ").length)
}
//array
{
  {
    {
      let arr = [4, 5, 10, 23];
      let arr2 = ["apple", "mango", "lichi"];
      let arr3 = ["manas", 15, "bhagalpur"];
      let arr4 = [2, 3, 4, "mkl", [2, 3, 5]];
      console.log(arr);
      console.log(arr2);
      console.log(arr3);
      console.log(arr4);
    }
    {
      let normalArr = [1, 3, 5];
      console.log(normalArr);
      // let arr = new Array(2, 3, 4, 5, "alsjdlfjds") ❌
      // console.log(arr);
    }
    {
      let arr = [20];
      let carr = new Array(20).fill(0);
      console.log(arr);
      console.log(carr);
    }
    {
      let arr = [4, 5, 10, 23];
      console.log(arr.length);
      console.log(typeof arr);
    }
    {
      let arr = [1, 3, 5, 8];
      console.log(arr[0]);
      console.log(arr[2]);
      arr[2] = 99;
      console.log(arr);
      arr[0] = 100;
      console.log(arr);
    }
    {
      let arr = [1, 3, 5, 100, 99];
      for (let i = 0; i < arr.length; i++) {
        console.log(arr[i] * 2);

        for (let elem of arr) {
          console.log(elem);
        }

        for (let ind in arr) {
          console.log(ind);
        }
      }
    }
    // Array Methods
    //
    {
      let arr = [2, 5, "mkl", 5, 8, 10, "alpha", "beta"];
      console.log(arr, arr.length);
    }
    // push()
    {
      let arr = [2, 5, "mkl", 5, 8, 10, "alpha", "beta"];
      let a = arr.push(999);
      console.log(arr, a, arr.length);
    }
    // pop()
    {
      let arr = [2, 5, "mkl", 5, 8, 10, "alpha", "beta"];
      let b = arr.pop();
      console.log(arr, b);
    }
    // unshift()
    {
      let arr = [2, 5, "mkl", 5, 8, 10, "alpha", "beta"];
      let a = arr.unshift(7);
      console.log(arr, a);
    }
    // shift()
    {
      let arr = [2, 5, "mkl", 5, 8, 10, "alpha", "beta"];
      let b = arr.shift();
      console.log(arr, b);
    }
    // splice()
    {
      let arr = [2, 5, "mkl", 5, 8, 10, "alpha", "beta"];
      let test = arr.splice(3, 2, 99, 100, 55);
      console.log(arr);
      console.log(test);
    }
    // slice()
    {
      let arr = [2, 5, "mkl", 5, 8, 10, "alpha", "beta"];
      let newArr = arr.slice(-5, 3);
      console.log(arr);
      console.log(newArr);
    }
    // concat()
    {
      let arr = [2, 5, "mkl", 5, 8, 10, "alpha", "beta"];
      let arr2 = [5, 6];
      let arr3 = ["mkl", "falna", "dhikna"];
      let newArr = arr.concat(arr2, arr3);
      console.log(arr);
      console.log(newArr);
    }
    // spread operator
    {
      let arr1 = [2, 5, "mkl", 5];
      let arr2 = [8, 10];
      let arr3 = ["alpha", "beta"];

      let newArr = [...arr1, ...arr2, ...arr3];
      console.log(newArr);
    }
    // join()
    {
      let fruits = ["mango", "litchi", "guava", "mango", "papita"];

      let test = fruits.join(" And ");
      console.log(fruits);
      console.log(test);
      console.log(typeof test);
    }
    // toString()
    {
      let fruits = ["mango", "litchi", "guava", "mango", "papita"];

      let str = fruits.toString();
      console.log(fruits);
      console.log(str, typeof str);
    }
    // includes()
    {
      let fruits = ["mango", "litchi", "guava", "mango", "papita"];
      let bool = fruits.includes("litch");
    }
    // indexOf()
    {
      let fruits = ["mango", "litchi", "guava", "mango", "papita"];
      console.log(fruits.indexOf("litchi"));
    }
    // reverse()
    {
      let fruits = ["mango", "litchi", "guava", "mango", "papita"];
      fruits.reverse();
      console.log(fruits);
    }
    // find()
    {
      let fruits = ["mango", "litchi", "guava", "mango", "papita"];

      let test = fruits.find(function (item) {
        return item === "mango";
      });
      console.log(test);
    }
    // sort()
    {
      let arr = [10, 5, 1, 20];
      let heroes = ["spiderman", "ironman", "hulk", "thor", "hawkeye", "wanda"];
      heroes.sort();
      console.log(heroes);

      arr.sort((a, b) => {
        console.log(a, b);
        return b - a;
      });
      console.log(arr);
    }
    // flat()
    {
      let heroes = ["spiderman", ["hulk", "hawkeye", ["mkl"], "thor"]];
      console.log(heroes.flat(Infinity));
    }
    // Array iteration methods or Functional array methods

    // map()
    {
      let arr = [1, 2, 5, 9, 10];

      let newArr = arr.map((elem) => {
        return elem * 2;
      });
      console.log("originial array : ", arr);
      console.log(newArr);
    }
    // filter()
    {
      let arr = [1, 2, 5, 9, 10];

      let filterArr = arr.filter((elem, index, arr) => {
        return elem > 5;
      });
    }
    // reduce()
    {
      let arr = [1, 2, 5, 9, 10];

      let result = arr.reduce((acc, curr) => {
        return acc + curr;
      }, 10);
    }
    // forEach()
    {
      let arr = [1, 2, 5, 9, 10];

      arr.forEach((elem, index) => {
        arr[index] = elem * 2;
      });
    }
  }

  // let arr = [1, 2, 5, 9, 10];

  // let result = arr.reduce((acc, curr)=>{
  //     return acc + curr
  // }, 10)

  // console.log(result);

  // let arr1 = [1, 2, 3];
  // let arr2 = arr1;
  // let arr3 = [...arr1];

  // console.log(arr1);
  // console.log(arr3);
  // arr3.pop();
  // console.log(arr1);
  // console.log(arr3);

  // let arr = [1,2,3, [99, 100]]
  // let copyArr = [...arr];
  // copyArr[3].push(23);
  // console.log(arr)
  // console.log(copyArr)

  // // question1

  // let arr = [5, 10, 15, 7];

  // let sum = arr.reduce((acc, curr) => {
  //     return acc + curr;
  // })

  // let average = sum/arr.length

  // console.log(`sum = ${sum}`)
  // console.log(`average = ${average}`)

  // // question2
  // let n = 25;
  // let arr = new Array(25).fill(0)
  // console.log(arr);

  // // question3
  // let n = 25;
  // let arr = new Array(25).fill(0)
  // arr.forEach((_, index)=>{
  //     arr[index] = index+1;
  // })
  // console.log(arr);

  // let arr = ["ironman", "captain", "black widow", "wanda", "hulk", "black panther"];

  // arr.push("spiderman");
  // arr.unshift("thor");
  // // console.log(arr);

  // arr.splice(3, 1, "hawkeye")
  // console.log(arr)

  // console.log(arr.includes("captain"))

  // let test = "strisldfksdf"
  // let test2 = "sldkjfl"
  // console.log(Array.isArray(test))
  // console.log(Array.from(test))

  // let a= 1;
  // let b= "lsdkjf";
  // let c = {
  //     name: "manas"
  // }
  // let d = [1, 2, 3]
  // console.log(Array.of(a, b, c, d))

  // let str = "ollo"
  // let revStr = str.split("").reverse().join("")
  // if(str === revStr){
  //     console.log("plaindrome string")
  // }else{
  //     console.log("not a palindrome string")
  // }

  // let str = "hello how are you"
  // let newArr = str.split(" ").map((elem) => {
  //     return elem.charAt(0).toUpperCase() + elem.slice(1)
  // })
  // let finalString = newArr.join(" ");
  // console.log(finalString)
}

// object

{
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
          names: "javascript",
          greet: function () {
            console.log(`hello for ${this.names}`);
          },
        };
        obj.greet();
        console.log(this.names);
      }
    }
    {
      {
        {
          let obj = {
            names: "javascript",
            greet: () => {
              console.log(`hello for ${this.names}`);
            },
          };
          obj.greet();
          console.log(this.names);
        }
      }
    }
    {
      let obj = {
        names: "javascript",
        greet: function () {
          console.log(`hello for ${this}`);
        },
      };
      obj.greet();
    }
    // Object Methods
    // Object.keys(obj)
    {
      let obj = {
        name: "Manas",
        age: 20,
        city: "Rajkot",
      };

      console.log(Object.keys(obj));
      // ["name", "age", "city"]
    }
    // Object.values(obj)
    {
      let obj = {
        name: "Manas",
        age: 20,
        city: "Rajkot",
      };

      console.log(Object.values(obj));
      // ["Manas", 20, "Rajkot"]
    }
    // Object.entries(obj)
    {
      let obj = {
        name: "Manas",
        age: 20,
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
        age: 20,
      };

      Object.freeze(user);

      user.age = 25; // ❌ not allowed
      user.city = "Surat"; // ❌ not allowed

      console.log(user);
      // { name: "Manas", age: 20 }
    }
    // Object.seal(obj)
    {
      let user = {
        name: "Manas",
        age: 20,
      };

      Object.seal(user);

      user.age = 25; // ✅ allowed
      user.city = "Surat"; // ❌ not allowed

      console.log(user);
      // { name: "Manas", age: 25 }
    }
    // obj.hasOwnProperty(key)
    {
      let car = {
        brand: "BMW",
        color: "Black",
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
        age: 20,
      };

      let admin = user; // no new object created

      admin.age = 25;

      console.log(user.age); // 25
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
}
