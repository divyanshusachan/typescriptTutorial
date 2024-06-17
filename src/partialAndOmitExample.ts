interface User {
  id: string;
  name: string;
  email: string;
  age: number;
}

let newUser1: User = {
  id: "1",
  name: "abc",
  email: "abc@abc.com",
  age: 53,
};

const updateUserPartial = (id: string, user: Partial<User>): User => {
  return {
    ...newUser1,
    ...user,
  };
};

const updateUserPartialOmit = (
  id: string,
  user: Omit<Partial<User>, "id">
): User => {
  return {
    ...newUser1,
    ...user,
  };
};

let newUser2 = {
  id: "2",
  name: "qwe",
  email: "qwe@qwe.com",
  age: 32,
};

console.log(updateUserPartial("123", { email: "wer@qwe.com" }));
console.log(
  updateUserPartialOmit("123", {
    name: "qwe",
    email: "qwe@qwe.com",
    age: 32,
  })
);
