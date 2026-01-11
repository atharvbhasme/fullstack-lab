class BasicClass{
    name: string;
    age: number;
    mobile: number;
    isMarried: boolean;
    
    constructor(name:string,age:number,mobile:number,isMarried:boolean){
        this.name = name;
        this.age = age;
        this.mobile = mobile;
        this.isMarried  = isMarried;
    }

    printBasicUser(){
        console.log(`Hello my name is ${this.name} and I am ${this.age} old. My Mobile Number is ${this.mobile}`);
    }
}

const basicUserObj = new BasicClass("demo1",21,982201111,false);

basicUserObj.printBasicUser();