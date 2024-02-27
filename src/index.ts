export {};

// EXAMPLE 1 - Create a Deep Copy of an Array in TypeScript

const arr = [
  { id: 1, address: { country: 'Germany' } },
  { id: 2, address: { country: 'Chile' } },
  { id: 3, address: { country: 'UK' } },
];

/**
 *  👇️ const copy: {
        id: number;
        address: {
            country: string;
        };
      }[]
 */
const copy = JSON.parse(JSON.stringify(arr)) as typeof arr;

console.log(copy);

// ---------------------------------------------------

// // EXAMPLE 2 - Create a Deep Copy of an Array using Lodash

// import cloneDeep from 'lodash.clonedeep';

// const arr = [
//   { id: 1, address: { country: 'Germany' } },
//   { id: 2, address: { country: 'Chile' } },
//   { id: 3, address: { country: 'UK' } },
// ];

// /**
//  *  👇️ const copy: {
//         id: number;
//         address: {
//             country: string;
//         };
//       }[]
//  */
// const copy = cloneDeep(arr);

// console.log(copy);
