/* 
1. show output from 1 to 50
2. if the number is devisible (without vaggsesh) by the 3 then show the 'foo' istead of number
3. if the number is devisible (without vagsesh) by the 5, 15, 25 then show the 'bar' istead of number
4. if the number is devisible (without vagsesh) by the 3 and 5 then show the 'foobar' istead of number
*/


/* for(let i = 1; i <= 50; i++){
     if(i % 3 === 0 && i % 5 === 0){
        console.log('foobar');
    }
   else if(i % 3 === 0){
        console.log('foo');
    }
    else if(i % 5 === 0){
        console.log('bar');
    }
    else{  
        console.log(i);
    }
} */


   for(let i = 1; i <= 100; i++){
        if(i % 3 === 0 && i % 5 === 0){
           console.log('foobar')
       }
    else if(i % 3 == 0){
        console.log('foo')
    }
    else if(i % 5 === 0){
        console.log('bar')
    }
    else{
        console.log(i)
    }
   }