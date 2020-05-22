// Pair programming loop practice

// Create a function which takes in an array which only contains strings. 
// The function will iterate over a given array and return the last character of every element. 
    // input: let seasons = ['Winter', 'Autumn', 'Spring', 'Summer'];
    // output: ['r', 'n', 'g', 'r'];
                    // 0           1           2       3 --> 4 total elements
    
    // let colors = ["red","yellow","blue"]
 
    // .length counts all the elements inside the array
    // ex: seasons.length --> 4
    // we know how indexes work
    // how do we access the last element each time?
    // let str = "Winter"
    // str[str.length-1]
    // console.log(seasons[seasons.length])
    // seasons[] --> "Winter"

    let seasons = ['Winter', 'Autumn', 'Spring', 'Summer'];
    
    // output: ['r', 'n', 'g', 'r'];
    // we have to manipulate this string
    // "WInter" first time 
    // "Autumn" -> second iteration
    // "Spring" -> 3rd time
    function lastEle(arr){
        let outcome = []
        for(let i = 0; i < arr.length;i++){
            let currentEle = arr[i]
            outcome.push(currentEle[currentEle.length-1])
        }
        return outcome
    }
    // console.log(lastEle(seasons))
    // console.log(-1)
    if(-1){
        console.log(true)
    }
    

















// Create a function which takes in an array which only contains strings. 
// The function will iterate over a given array and return the last character of every element. One element will be an empty string.

