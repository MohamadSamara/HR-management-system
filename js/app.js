"use strict"

const allEmployee = [];
function Employee(employeeID , fullName , department, level , imageURL) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department   // ["Administration" , "Marketing" , "Development" , "Finance"];
    this.level = level   // ["Junior","Mid-Senior","Senior"];
    this.imageURL = imageURL;
    this.salary = this.calculatingSalaryRandom();
    allEmployee.push(this)
  }

  //Employee.department = ["Administration" , "Marketing" , "Development" , "Finance"];
  //Employee.level = ["Junior","Mid-Senior","Senior"];
  
  Employee.prototype.calculatingSalaryRandom = function(){
    if(this.level == "Senior"){
        this.salary = Math.floor( Math.random() * (2000 - 1500 + 1)) + 1500 ;
    }
    else if(this.level == "Mid-Senior"){
        this.salary = Math.floor(Math.random() * (1500 - 1000 + 1)) + 1000;
    }

    else if(this.level == "Junior"){
        this.salary = Math.floor(Math.random() * (1000 - 500 + 1)) + 500;
    }
  } 

  Employee.prototype.netSalary = function(){
    this.netSalary = this.salary - this.salaryalary * (7.5 / 100);
  }

  Employee.prototype.render = function () {

    for (let i = 0; i < allEmployee.length; i++) {
        allEmployee[i].calculatingSalaryRandom();
        document.write(`<h1>${allEmployee[i].fullName} : ${allEmployee[i].salary}</h1>`);
    }
}

Employee.prototype.render2 = function () {

        document.write(`<h1> ${this.fullName} : ${this.salary} </h1>`);
}
 
  let emp1 = new Employee ("1000" , "Ghazi Samer" , "Administration" , "Senior" , "..." );
  let emp2 = new Employee ("1001" , "Lana Ali" , "Finance" , "Senior" , "..." );
  let emp3 = new Employee ("1002" , "Tamara Ayoub" , "Marketing" , "Senior" , "..." );
  let emp4 = new Employee ("1003" , "Safi Walid" , "Administration" , "Mid-Senior" , "..." );
  let emp5 = new Employee ("1004" , "Omar Zaid" , "Development" , "Senior" , "..." );
  let emp6 = new Employee ("1005" , "Rana Saleh" , "Development" , "Junior" , "..." );
  let emp7 = new Employee ("1006" , "Hadi Ahmad" , "Finance" , "Mid-Senior" , "..." );

  for (let i = 0; i < allEmployee.length; i++) {
    allEmployee[i].calculatingSalaryRandom();
    allEmployee[i].render2();
  }