const userIDs = new Map([
    ["userID", "101"],
    ["userName", "Batman"],
  ]);
  console.log(userIDs);


  let student={
    firstName:"anbu",   //data properties
    lastName:"Selvan",
    fullName(){
      `${student.firstName} ${student.lastName}`},
    }
//accesor properties getters and setters
//getters:used to get data  it will turn the function into property  student.fullName
//setters:used to set data

// to call the full name u need to use student.fullName()

let student={
  firstName:"anbu",   //data properties
  lastName:"Selvan",
  get fullName(){
    `${student.firstName} ${student.lastName}`},
 
 set fullName(value){
//split it by firstName and lastname
  let values=value.split(" ");
  this.console.log(values);
  this.firstName=values[0];
  this.lastName=values[1] ?? "";
    }
  }
  // Using constructor
  const studentDetails = new Map();
  
  // set();
  studentDetails.set("name", "Batman");
  studentDetails.set("rollNumber", 1);
  studentDetails.set(1, "one");
  studentDetails.set([1, 2, 3], "OneTwoThree");
  studentDetails.set({ subject: "Math" }, "Math Teacher");
  console.log(studentDetails);
  
  // get();
  console.log(studentDetails.get("name"));
  console.log(studentDetails.get("rollNumber"));
  
  for (let key of studentDetails.keys()) {
    console.log(key);
  }
  
  for (let key of studentDetails) {
    console.log(key);
  }

  const teachersDetail = {
    id: "101",
    name: "Math Teacher",
  };
  const extraTeachersDetail = new Map();
  extraTeachersDetail.set(teachersDetail, {
    subject: "Math",
    department: "Math Department",
  });
  console.log(teachersDetail.id);
  console.log(teachersDetail.name);
  console.log(extraTeachersDetail);
  
  