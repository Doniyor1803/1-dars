// function abs(arg) {
//     alert('salom ' + arg);
//   }
  
//     function abs2(callback) {
//     let arg = prompt('ismingizni kiriting');
//     callback(arg);
//   }
  
//   abs2(abs);

let abs = [1, 2, 3, 4];
let abs2 = abs.reduce(
  (p, b) => p * b
);
console.log(abs2);



// const abs = new Promise((arg1) => {
//         setTimeout(() => {
//         arg1('salom');
//         }, 3000);
//   });
  
// abs.then((arg2) => {
//     console.log(arg2);
//   });
  
// console.log(abs);