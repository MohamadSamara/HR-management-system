"use strict"
let secEle = document.getElementById("secTag");
let empcard = document.getElementById("empdiv");


let empform = document.getElementById("empForm");
let fName = document.getElementById("fullName");
let dept = document.getElementById("department");
let lvl = document.getElementById("level");
let img = document.getElementById("img");


const allEmployee = [];
function Employee(employeeID , fullName , department, level , imageURL) {
    this.employeeID = employeeID;
    this.fullName = fullName;
    this.department = department   // ["Administration" , "Marketing" , "Development" , "Finance"];
    this.level = level   // ["Junior","Mid-Senior","Senior"];
    this.imageURL = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ6oIu-GazoiU7c0QxKw-vC_Wrw5kUO-ewIeA&usqp=CAU";
    this.salary = this.calculatingSalaryRandom();
    this.netSalary = 0 ;
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
  Employee.prototype.render2 = function () {


    Employee.prototype.render2 = function() {
      let card = document.createElement("div");
      card.classList.add("card");
    
      let imgEle = document.createElement("img");
      imgEle.src = this.imageURL;
      card.appendChild(imgEle);
    
      let cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
    
      let h3Ele = document.createElement("h3");
      h3Ele.textContent = `Name: ${this.fullName} - ID: ${this.employeeID}`;
      cardBody.appendChild(h3Ele);
    
      let h3Ele2 = document.createElement("h3");
      h3Ele2.textContent = `Department: ${this.department} - Level: ${this.level}`;
      cardBody.appendChild(h3Ele2);
    
      let h3Ele3 = document.createElement("h3");
      h3Ele3.textContent = `Salary: ${this.calculatingSalaryRandom()}`;
      cardBody.appendChild(h3Ele3);
    
      card.appendChild(cardBody);
      secEle.appendChild(card);
    };
    

    // let imgEle = document.createElement("img");
    // imgEle.src = this.imageURL ;
    // secEle.appendChild(imgEle);

    // let h3Ele =  document.createElement("h3");
    // h3Ele.textContent = `Name : ${this.fullName} - ID : ${this.employeeID}`;
    // secEle.appendChild(h3Ele);

    // let h3Ele2 =  document.createElement("h3");
    // h3Ele2.textContent = `Department : ${this.department} - Level : ${this.level}`;
    // secEle.appendChild(h3Ele2);

    // let h3Ele3 =  document.createElement("h3");
    // h3Ele3.textContent = `Salary : ${this.calculatingSalaryRandom()}`;
    // secEle.appendChild(h3Ele3);
    
  }
  Employee.prototype.netSalary = function(){
    this.netSalary = this.salary - this.salary * (7.5 / 100);
  }

//   Employee.prototype.render = function () {

//     for (let i = 0; i < allEmployee.length; i++) {
//         allEmployee[i].calculatingSalaryRandom();
//         document.write(`<h1>${allEmployee[i].fullName} : ${allEmployee[i].salary}</h1>`);
//     }
// }


// empform.addEventListener("submit" , eventHandler);

//  function eventHandler(event){
//   event.prevnetDefault();
//   console.log(event);
//   let empName = event.target.fullName.value;
//   let empDept = event.target.department.value;
//   let emplvl = event.target.level.value;
//   let empImg = event.target.img.value;
  
//   let newEmp = new Employee("1000" , empName , empDept , emplvl, empImg);
//   // console.log(empName , empDept);
//   newEmp.render2();
// }
 
  // let emp1 = new Employee ("1000" , "Ghazi Samer" , "Administration" , "Senior" , "./assets/profileLogo" );
  // let emp2 = new Employee ("1001" , "Lana Ali" , "Finance" , "Senior" , "./assets/profileLogo" );
  // let emp3 = new Employee ("1002" , "Tamara Ayoub" , "Marketing" , "Senior" , "./assets/profileLogo" );
  // let emp4 = new Employee ("1003" , "Safi Walid" , "Administration" , "Mid-Senior" , "./assets/profileLogo" );
  // let emp5 = new Employee ("1004" , "Omar Zaid" , "Development" , "Senior" , "./assets/profileLogo" );
  // let emp6 = new Employee ("1005" , "Rana Saleh" , "Development" , "Junior" , "./assets/profileLogo" );
  // let emp7 = new Employee ("1006" , "Hadi Ahmad" , "Finance" , "Mid-Senior" , "./assets/profileLogo" );
  let generatedNumbers = [];

  function generateID() {
    let randomNumber;
    do {
      randomNumber = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    } while (generatedNumbers.includes(randomNumber));
    
    generatedNumbers.push(randomNumber);
    return randomNumber;
  }

  empform.addEventListener("submit" , submitHandler);

  function submitHandler(event){
    event.preventDefault();

    let empName = event.target.fullName.value;
    let empDept = event.target.department.value;
    let empLvl = event.target.level.value;
    let empImg = event.target.img.value;

    let newEmployee = new Employee(generateID(), empName , empDept , empLvl , empImg );
    // newEmployee.salary = calculatingSalaryRandom();
    newEmployee.render2();
  
  }
  
  
  for (let i = 0; i < allEmployee.length; i++) {
    allEmployee[i].calculatingSalaryRandom();
    allEmployee[i].render2();
  }



















  // its very good
  // for 
  // here




  