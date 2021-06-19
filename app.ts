const person = {
  name: "Tom",
  age: 15,
  hobbies: ["Sports", "Cooking"],
};

// let favoriteActivities: any[]; can have a array of any type
let favoriteActivities: string[];
favoriteActivities = ["sports"];
// favoriteActivities = ["sports", 1]; ** will give error

console.log(person.name);

for (const hobby of person.hobbies) {
  console.log(hobby.toUpperCase()); //since hobby is string as we set it in the object
}
