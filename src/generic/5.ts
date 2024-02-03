/*
    Вам потрібно реалізувати інтерфейс KeyValuePair, який описує пару ключ-значення. 
    Використовуйте generics, щоб цей інтерфейс міг працювати з будь-якими типами ключів та значень.
*/

// interface KeyValuePair {
//   key;
//   value;
// }

interface KeyValuePair<K, V> {
    key: K,
    value: V,
}

// const pair1: KeyValuePair<string, number> = { key: 'age', value: 20 }
// console.log(pair1);

// const pair2: KeyValuePair<string, string> = { key: 'name', value: "Tati" }
// console.log(pair2);

export {};