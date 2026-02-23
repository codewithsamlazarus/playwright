import { EmployeeSignUp } from "./AccessModifierBaseClass";

class HR extends EmployeeSignUp{ // derived class // subclass

    dep : string 

    constructor(){
        super() // BY using a super keyword we can have a constructor in the derived class as well
        this.dep="QA"
    }

    empUpdate(){
        console.log(this.ephno); // protected access modifier gets exposed through derived class  
     //   this.ephno=4245523      
    }
    
}

const emphr = new HR()
emphr.empUpdate()
emphr.printDetails()
console.log(emphr.readData()) // Old Salary =67866
emphr.writeData=99999
console.log(emphr.readData()); // New Salary = 99999

console.log(emphr.dep)