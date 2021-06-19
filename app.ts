const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
  // *tuple* role will have fixed size of two, first value will be number and second one will be string
} = {
  name: "Tom",
  age: 15,
  hobbies: ["Sports", "Cooking"],
  role: [2, "author"],
};

/* this will messup role if
const person = {
    name: "Tom",
    age: 15,
    hobbies: ["Sports", "Cooking"],
    role: [2, "author"],
  };
person.role[1] = 10; !!! Error !!!
 */
// person.role.push("admin"); push will mess up tuple

