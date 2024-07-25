/* how to detect array */

const country = 'bangladesh';
const age = 52;
const isIndependent = true;
const student = {id:121, class: 11, name: 'Agun'};
// const friends = [12, 13, 14, 15, 16, 17, 20, 20];
function add(num1, num2){
    return num1 + num2
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof isIndependent);
console.log(typeof student);
/* console.log(typeof friends); here we have detacted all by the typeof value but cannot detect array. the result shows it is a object but not it is an array. so detect array we need to wrtie this code */
console.log(Array.isArray(friends)) /* this is the way to wrtie code to detect array */
console.log(typeof add);

/* if(friends.indexOf(19) !== -1){
    console.log('it is exist in the array');
}else{
    console.log('not exist')
} */
//  or 

// console.log(friends.includes(19));


// concat------- to joint two thing together
// how to join two array together

const friends = [12, 13, 14, 15, 16, 17, 20, 20];
const newFriends = [43, 256, 78]
const mergeFriends = newFriends.concat(friends);
console.log(mergeFriends)