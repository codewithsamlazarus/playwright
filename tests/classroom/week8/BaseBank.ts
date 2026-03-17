
abstract class BaseBank implements RBI{
    openAccount(): void {
       console.log(`Common step: KYC verification done`);
       
    }
    withdrawLimit(): void {
        console.log(`Common Step: Transaction Audit`);       
        
    }
 
 abstract interestRate(): number
    } // Non implemented // Method Signature

/* Note: You cannot create an object for an abstract class
Abstract class can have both implemented and non implemnet method (here should have an abstract keyword before the method signature)  */

class SBI extends BaseBank{
    interestRate(): number // Non implemented // Method Signature
    {
        return 7.5
    }
    // Concrete Class
}

const sbiobj = new SBI();
sbiobj.interestRate();
sbiobj.openAccount();
sbiobj.withdrawLimit();

/* **************************************************** */
class HDFC extends BaseBank{ // Concrete Class
    interestRate(): number{
        return 7.5
    }
}

/* **************************************************** */
class Axis extends BaseBank{ // Concrete Class
    interestRate(): number{
        return 8.5
    }
}