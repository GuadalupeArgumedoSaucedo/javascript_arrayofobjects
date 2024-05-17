// Example 1: Basic `for` Loop
// Benefit: Simple and flexible, can easily use index for additional logic.
for (let i = 0; i < courses.length; i++) {
    console.log(courses[i].Course);
}

// Example 2: `for...of` Loop
// Benefit: Cleaner syntax, directly iterates over array elements.
for (const course of courses) {
    console.log(course.Course);
}

// Example 3: `forEach` Loop
// Benefit: Functional programming style, concise, no need for index variable.
courses.forEach(course => {
    console.log(course.Course);
});

// Example 4: Using `map` Method
// Benefit: Creates a new array of titles, useful for further processing or transformations.
const courseTitles = courses.map(course => course.Course);
courseTitles.forEach(title => console.log(title));

// Example 5: `for...in` Loop (with Array Index)
// Benefit: Can access the index, useful if you need to know the position in the array.
for (const index in courses) {
    console.log(courses[index].Course);
}