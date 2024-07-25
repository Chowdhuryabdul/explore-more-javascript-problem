const friends = [12, 13, 14, 15, 16, 17, 20, 20];
const partial = friends.splice(2, 2, 99, 555, 777);
console.log(partial);
console.log(friends);

/* Removes elements from an array and, 
if necessary, inserts new elements in their place, 
returning the deleted elements.
will change the original array */