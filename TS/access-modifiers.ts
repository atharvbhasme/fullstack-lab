class User {
    public name:string;
    protected role: string;
    readonly id: string;
    private password: string;

    constructor(name: string, role: string, password:string){
        this.name = name;
        this.password = password;
        this.role = role;
        this.id = Math.floor((Math.random() * 1000)).toString();
    }

    getUserName(){
        return this.name;
    }

    getRoles(){
        return this.role;
    }

    checkPassword(inputPass:string){
        return inputPass === this.password;
    }

}

interface emplyoeesInterface{
    name: string,
    id: string,
    employeeId : string,
    joiningDate: Date
}

class Employee extends User{
    public employeeId: string;
    private joiningDate: Date;
    constructor(name:string, role:string, password:string, employeId:string, joiningDate?:Date){
        super(name, role, password);
        this.employeeId = employeId;
        this.joiningDate = joiningDate || new Date()
    }

    getEmplyoeeInforamtion(){
        return `Name of emplyoee ${super.getUserName()}, employeeId: ${this.employeeId}, role is ${this.role}`
    }

    assginRole(newRole:string){
        this.role = newRole;
    }
}

interface projectStackInterface{
    FE: string,
    BE: string,
    database: string,
    cloud: string
}


const user = new Employee("Atharv", "admin", "secret123","123");

user.assginRole('assocaite')

console.log(user.getEmplyoeeInforamtion())

  