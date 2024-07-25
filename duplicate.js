/* to remoe the duplicates from the array */

const names = ['abul', 'babul', 'sabul', 'dabul', 'babul', 'sabul', 'gabul', 'sabul', 'abul', 'abul', 'abul', 'babul', 'sabul'];

function removeDuplicates(names){
    const unique = [];  /* thi is an array to enter the names  */
    for(let i = 0; i < names.length; i++){
        const element = names[i]; /* - this helps us to find all the elements in the array with index */
        // console.log(element);
        if(unique.includes(element) === false){ /* if the name already exist in the new array it will say true. then true and flase will not be the same so it will not take the repetation. and if it is not there it will be similar to flase then it will insert in the array */
            unique.push(element);
        }
    }
    return unique;   
}

const uniqNames = removeDuplicates(names);
// console.log(uniqNames);


const numbers = [12, 13, 14, 16, 15, 17, 18, 19, 12, 13, 13, 13, 15, 17, 16, 18, 19];
function checkDuplicate(x){
    const newArray = [];
    for(let i = 0; i < numbers.length; i++){
        const element = x[i];
        // console.log(element);
        if(newArray.includes(element) === false){
            newArray.push(element)
        }
    }
    return newArray;

}

const UniqNumber = checkDuplicate(numbers);
console.log(UniqNumber);