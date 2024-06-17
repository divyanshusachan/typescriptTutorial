let newUser1 = {
    id: "1",
    name: "abc",
    email: "abc@abc.com",
    age: 53,
};
const updateUserPartial = (id, user) => {
    return {
        ...newUser1,
        ...user,
    };
};
const updateUserPartialOmit = (id, user) => {
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
console.log(updateUserPartialOmit("123", {
    name: "qwe",
    email: "qwe@qwe.com",
    age: 32,
}));
