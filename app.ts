// Automatically enumerated constant identifier
// human readable identifiers
// custom type

enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
}

/* 
its also possible to assign custom values 
enum Role {
  ADMIN = "ADMIN",
  READ_ONLY = 100,
  AUTHOR = "author",
} */

const person = {
  name: "Tom",
  age: 15,
  hobbies: ["Sports", "Cooking"],
  role: Role.ADMIN,
};

if (person.role === Role.ADMIN) {
  console.log(person.name + " is admin");
}
