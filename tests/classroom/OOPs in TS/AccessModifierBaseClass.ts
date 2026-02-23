export class EmployeeSignUp { // Baseclass
    //Properties

    public eName: string  // By default the accessmodifier is considered as public
    public static eid: string 
    protected readonly ephno: number 
    private eSalary: number

    constructor() {
        this.eName = "Hari" // By default the accessmodifier is considered as public
         EmployeeSignUp.eid= "Emp123"
        this.ephno = 656745634
        this.eSalary = 67866
    }

    printDetails() {
        console.log(`The emp details ${this.eName} ${EmployeeSignUp.eid} ${this.ephno} ${this.eSalary}`);


    }

    public readData(){
        return this.eSalary //
    }

    public set writeData(newSal : number){
        this.eSalary=newSal
    }

}

// const emp = new EmployeeSignUp()

// emp.printDetails()
// console.log(emp.readData()) // Old Salary =67866
// emp.writeData=99999
// console.log(emp.readData); // New Salary = 99999