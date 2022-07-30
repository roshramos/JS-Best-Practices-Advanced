//Q1 SHOW RATING
//Given a rating, display a star (*) for each full rating and a full-stop (.) for each half rating.

function showRating (rating) {
    let ratings = "";
    for (let i = 0; i < Math.floor(rating); ++i) {
        ratings += "*";
        if (i !== Math.floor(rating) - 1) {
            ratings += " "
        }
    }
    if (!Number.isInteger (rating)) {
        ratings += " ."
    }
    return ratings;
}

console.log (showRating(2.5))


/** STEPS:
 * Initialise and empty string
 * loop throught he rounded down rating
 * add a star for every iteration
 * if its not the last iteration add a space
 * if the number is not an integer
 * add a full stop
 * return it
 */


//Q2 SORT BY LOWEST TO HIGHEST PRICE 
//Given an array of numbers, return the prices sorted by low to high.

function sotLowToHigh (numbers) {
    return numbers.sort((a, b) => a - b)
}

console.log (sotLowToHigh([20, 40, 10, 30, 50, 10]))


//Q3 SORT BY HIGHEST TO LOWEST PRICE
//Given an array of objects, return the prices sorted by high to low.

function sortHighToLow (numbers) {
 return numbers.sort((a, b) => b.price - a.price)
}

console.log (sortHighToLow([
    { id: 1, price: 50},
    { id: 2, price: 0},
    { id: 3, price: 500},
 ])
 )


//Q4 PROMISES
/**On Youtube, watch:
 * "The Asyc Await Episode I Promised" - Fireship
 * https://www.youtube.com/watch?v=vn3tm0quoqE
 * 
 * "Async Await JavaScript ES7" - Techsith (1.5x Speed)
 * https://www.youtube.com/watch?v=PoRJizFvM7s
 * 
 * "Async JS Crash Coure - Callbacks, Promises, Async Await" - Traversy Media (1.5x Speed)
 * https://www.youtube.com/watch?v=IGoAdn-e5II
 */


//Q5 FIND ALL THE POSTS BY A SINGLE USER
//Call this API "https://jsonplaceholder.typicode.com/posts" and return all the posts by any given user Id.

async function postsByUser (userId) {
    const promise = await fetch ("https://jsonplaceholder.typicode.com/posts")

    const result = await promise.json()

    const posts = result.filter (element => element.userId === userId)

    console.log (posts)
}

console.log (postsByUser(1))

/**NOTE:
 * "async" goes next to the function
 * "await" goes inside the function next to the promise 
 */


//Q6 FIRST 6 INCOMPLETE TODOS
//Call this API "https://jsonplaceholder.typicode.com/todos" and return the first 6 incomplete todo's from the result.

async function firstSixIncomplete (userId) {
    const promise = await fetch ("https://jsonplaceholder.typicode.com/todos")

    const result = await promise.json()

    const incompleteTasks = result.filter (elem => !elem.completed).slice(0, 6)

    console.log(incompleteTasks)
}


console.log (firstSixIncomplete(6))
