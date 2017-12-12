/*
 * Programming Quiz: Using Let and Const (1-1)
 */

const CHARACTER_LIMIT = 255;
const posts = [
    "#DeepLearning transforms everything from self-driving cars to language translations. AND it's our new Nanodegree!",
    "Within your first week of the VR Developer Nanodegree Program, you'll make your own virtual reality app",
    "I just finished @udacity's Front-End Web Developer Nanodegree. Check it out!"
];

// prints posts to the console
function displayPosts() {
    for (let i = 0; i < posts.length; i++) {
        console.log(posts[i].slice(0, CHARACTER_LIMIT));
    }
}

displayPosts();

/*
 * Programming Quiz: Build an HTML Fragment (1-2)
 */

const cheetah = {
    name: 'Cheetah',
    scientificName: 'Acinonyx jubatus',
    lifespan: '10-12 years',
    speed: '68-75 mph',
    diet: 'carnivore',
    summary: 'Fastest mammal on land, the cheetah can reach speeds of 60 or perhaps even 70 miles (97 or 113 kilometers) an hour over short distances. It usually chases its prey at only about half that speed, however. After a chase, a cheetah needs half an hour to catch its breath before it can eat.',
    fact: 'Cheetahs have “tear marks” that run from the inside corners of their eyes down to the outside edges of their mouth.'
};

// creates an animal trading card
function createAnimalTradingCardHTML(animal) {
    const cardHTML = `<div class="card">
        <h3 class="name"> ${cheetah.name} </h3>
        <img src="${cheetah.name}.jpg" alt="${cheetah.name}" class="picture">
        <div class="description">
            <p class="fact"> ${cheetah.fact} </p>
            <ul class="details">
                <li><span class="bold">Scientific Name</span>: ${cheetah.scientificName}</li> +
                <li><span class="bold">Average Lifespan</span>: ${cheetah.lifespan}</li>
                <li><span class="bold">Average Speed</span>: ${cheetah.speed}</li>
                <li><span class="bold">Diet</span>: ${cheetah.diet}</li>
            </ul>
            <p class="brief"> ${cheetah.summary} </p>
        </div>
    </div>`;

    return cardHTML;
}

console.log(createAnimalTradingCardHTML(cheetah));

/*
 * Programming Quiz: Destructuring Arrays (1-3)
 *
 * Use destructuring to initialize the variables `one`, `two`, and `three`
 * with the colors from the `things` array.
 */

const things = ['red', 'basketball', 'paperclip', 'green', 'computer', 'earth', 'udacity', 'blue', 'dogs'];

// const one = things[0];
// const two = things[3];
// const three = things[7];

const [one, x, y, two, z, a, b, three, c] = things;

const colors = `List of Colors
1. ${one}
2. ${two}
3. ${three}`;

console.log(colors);

// const point = [10, 25, -34];

// const [x, y, z] = point;

// console.log(x, y, z);


/*
 *
 * ----------- Object Literals -------------- | 
 *
 */

let type = 'quartz';
let color = 'rose';
let carat = 21.29;

const gemstone = {
    type,
    color,
    carat,
    calculateWorth: function() {
        // will calculate worth of gemstone based on type, color, and carat
    }
};

/*
 *
 * ----------- For of Loop -------------- | 
 *
 */

const digits = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const digit of digits) {
    console.log(digit);
}

/*
 * Programming Quiz: Writing a For...of Loop (1-4)
 */

const days = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];

// your code goes here

for (const day of days) {
    console.log(day.charAt(0).toUpperCase() + day.slice(1));
}

/*
 * Instructions: Use the spread operator to combine the `fruits` and `vegetables` arrays into the `produce` array.
 */

const fruits = ["apples", "bananas", "pears"];
const vegetables = ["corn", "potatoes", "carrots"];

const produce = [...fruits, ...vegetables];

console.log(produce);

// Rest parameter
const order = [20.17, 18.67, 1.50, "cheese", "eggs", "milk", "bread"];
const [total, subtotal, tax, ...items] = order;
console.log(total, subtotal, tax, items);