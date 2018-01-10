let a =10;

function show(){
    let b = 1;

    if(true){
        let c = 2;
    }
    console.log('a', a); //глобална
    console.log('b', b); //локална
    console.log('c', c); //???
}

show();