function *nextValue(){
    let i=0;
    while(true){
        yield ++i;
    }
}

let gen = nextValue();

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
gen.return();
console.log(gen.next());