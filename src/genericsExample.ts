// function cloneObject<T>(source: T, options?: Partial<Options>): T {
//   if (!!options && options.shallowCopy) {
//     const serialized = JSON.stringify(source);
//     return JSON.parse(serialized);
//   } else {
//     return { ...source };
//   }
// }
function cloneObject<T, U>(source: T, options?: U): T {
  const serialized = JSON.stringify(source);
  return JSON.parse(serialized);
}

interface UserType {
  userId: number;
  name: string;
  email: string;
}

type Options = {
  deepCope: boolean;
  shallowCopy: boolean;
};

const user1: UserType = {
  userId: 1,
  name: "abc",
  email: "abc@abc.com",
};

cloneObject(user1, { shallowCopy: true });

interface KeyValuePair<Tkey, TVal> {
  key: Tkey;
  value: TVal;
}

const pair1: KeyValuePair<string, number> = { key: "abc", value: 42 };
const pair2: KeyValuePair<string, boolean> = { key: "qwe", value: false };

class KeyValuePair<Tkey, TVal> {
  key: Tkey;
  value: TVal;
}
