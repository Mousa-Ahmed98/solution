import {Employee} from "./script.js";

class Manager extends Employee{
    constructor(Id, Name, Department, Phone){
        super(Id, Name, Department, Phone);
    }
    showInfo = ()=>{
        return `"${this.Name} is the manager of ${this.Department} department`;
    }
}

let employee = new Employee(1, "Mousa", "Software development", "+201065349063");
let manager = new Manager(1, "Mousa", "Software development", "+201065349063");

console.log(manager.showInfo());

let showInfoDiv = document.getElementById("showInfo");
showInfoDiv.innerHTML = employee.showInfo();
showInfoDiv.innerHTML = showInfoDiv.innerHTML + `<br></br>` + manager.showInfo();

