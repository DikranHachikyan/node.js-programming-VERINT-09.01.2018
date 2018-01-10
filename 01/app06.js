let show = (msg)=>{
    console.log(msg);
};

show('Hi,John');

let values = [1,2,3,4,5,6,7].filter( (value)=>value % 2 === 0 );
// let values = [1,2,3,4,5,6,7].filter( (value)=>{
//                                         return value % 2 === 0 
//                                     });

console.log('values:',values);