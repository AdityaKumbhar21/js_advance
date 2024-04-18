function a() {

    var d = 100
    console.log(c) // c can be accessed as it is in the parent environment of the function
    b()
    console.log(d)

     function b() {
        console.log(c)
     }
}

// console.log(d)  // Here d cannot be accesed as it is out of the context
var c = 10
a()


// The function will search for the given var in its local environment if found then it is displayed else it keeps searching in the parent environment 
