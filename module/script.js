export class Employee{
    Id;
    Name;
    Department;
    Phone;
    constructor(Id, Name, Department, Phone){
        this.Id = Id;
        this.Name = Name;
        this.Department = Department;
        this.Phone = Phone;
    }

    showInfo = ()=>{
        return `Employee ${this.Name} belongs to the ${this.Department}'s department and his 
        phone number is ${this.Phone}.`;
    }
}


