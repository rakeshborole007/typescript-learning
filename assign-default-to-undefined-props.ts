let newVar: any = {};
// let oldVar:any = undefined;
let oldVar: any = {
    foo: "fizz",
    // bar:null,
    p1: false,
    // p2: ""
};

//Following works only for alphanumeric undefined value
// y.foo =  x?.foo || null 
// y.bar =  x?.bar || null 
// y.p1 =  x?.p1 || null 

// y.bar = x?.bar ??= null  

//Following works for alphanumeric, boolean undefined value
newVar.foo = (oldVar?.foo === undefined) ? null : oldVar.foo;
newVar.bar = (oldVar?.bar === undefined) ? null : oldVar.bar;
newVar.p1 = (oldVar?.p1 === undefined) ? null : oldVar.p1;
newVar.p2 = (oldVar?.p2 === undefined) ? null : oldVar.p2;

console.log(`oldVar:${JSON.stringify(oldVar, null, 2)}`);
console.log(`newVar:${JSON.stringify(newVar, null, 2)}`);

console.log(`newVar:${JSON.stringify(assignTo(oldVar, newVar), null, 2)}`);

function assignTo(oldVar: any, newVar: any, keys?: string[]) {
    newVar = newVar === undefined ? {} : newVar;
    if (oldVar) {
        keys = keys === undefined ? [] : Object.keys(newVar);
        keys.forEach(
            k => {
                newVar[k] = (oldVar[k] === undefined) ? null : oldVar[k];
            }
        );
    }
    return newVar;
}
