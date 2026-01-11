//type-guards making decision based on types 
//narrowing reducing board type into more specific type so types know that what are working with

// before narrowing
function print(x: string | undefined){
    console.log(x?.toLowerCase());
}

//after narrowing
function narrowPrint(x: string | undefined){
    if(typeof x === 'string'){
        console.log(x.toLowerCase());
    }
}

//below are the types of narrowing
//typeOf
//instanceOf of clases

class Base{
    name: string;
    constructor(name:string){
        this.name = name;
    }
    print(){
        console.log(this.name)
    }
}

class Upper{
    age: number;
    constructor(age:number){
        this.age = age
    }    
}

const obj1 = new Base("atharv");

console.log(obj1 instanceof Upper);

//use
if(obj1 instanceof Base){
    obj1.print();
}

//euqality
//== only check value
//=== check value and type


//Truthiness
function printString(x: string | undefined){
    if(x){
        console.log(x);
    }
}

printString(undefined)


function getUsersOnlineMessage(numUsersOnline: number) {
   //is numUsersOnline is 0 
  if (numUsersOnline) {
    return `There are ${numUsersOnline} online now!`;
  }

  return "Nobody's here. :(";
}

