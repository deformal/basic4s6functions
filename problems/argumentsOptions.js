// Arguments Optional
    // Create a function that sums two arguments together. If only one argument is provided, then return a 
    //function that expects one argument and returns the sum.
    // For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
    // Calling this returned function with a single argument will then return the sum:
    const addTogether = (...args) => {
        return args.some(e=>typeof e !== "number")
        ? undefined 
        : args.length > 1
        ? args.reduce((ac,cr)=>ac+cr,0)
        : n => (typeof n == "number" ? n + args[0] : undefined)
    }
    console.log(addTogether(2,3))//output 5
    console.log(addTogether(2)(3))//output 5
    console.log(addTogether(10,20))//output 30
    console.log(addTogether(20)(20))//output 40
    console.log(addTogether("hsdlfj"))//output undefined
