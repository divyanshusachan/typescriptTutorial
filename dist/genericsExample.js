// function cloneObject<T>(source: T, options?: Partial<Options>): T {
//   if (!!options && options.shallowCopy) {
//     const serialized = JSON.stringify(source);
//     return JSON.parse(serialized);
//   } else {
//     return { ...source };
//   }
// }
function cloneObject(source, options) {
    const serialized = JSON.stringify(source);
    return JSON.parse(serialized);
}
const user1 = {
    userId: 1,
    name: "abc",
    email: "abc@abc.com",
};
cloneObject(user1, { shallowCopy: true });
const pair1 = { key: "abc", value: 42 };
const pair2 = { key: "qwe", value: false };
class KeyValuePair {
    key;
    value;
}
