class Account{
    constructor(type,id,balance){
      this.type=type
      this.id=id
      this.balance=balance
    }
    printBalance(){
  console.log(this.balance)
    }
    printfrontPage(){
      console.log("Pass Account number"+this.id+"Account type"+this.type)
    }
    addMoney(amount){
      this.balance=this.balance+amount;
    }
    reduceMoney(amount){
      if((this.balance-amount)<0){
         console.log("Invalid Balance");
      }
      else{
        this.balance=this.balance-amount;
      }
    }
    
  }
  transactMoney(from,to,amount){
    from.reduceMoney(amount);
    to.addMoney(amount);
  } 
  var acc1=new Account("savings",1001,10000);
  var acc2=new Account("savings",1002,20000);
  acc1.printBalance();
  // acc1.addMoney(3000);
  // acc1.reduceMoney(2000);
  transactMoney(acc1,acc2,2000);
  acc1.printBalance();




  //Another Example
  class User{
    constructor(firstName,lastName,dob){
      this.firstName=firstName
      this.lastName=lastName
      this.dob=new Date(dob)
    }
    fullName(){
      return this.firstName+" "+ this.lastName;
    }
    calculateAge(birthday){
      var agediffs=Date.now()-birthday
      var agedate=new Date(agediffs);  //milliseconds epoch
      return Math.abs(agedate.getUTCFullYear()-1970);
    }
    isEligibleforElection(){
      let age=this.calculateAge(this.dob);
      if (age>18){
  console.log("eligible");
      }
      else{
        console.log("not eligible");
      }
    }
  }
  var aswath=new User("Aswath","pandian","2012/03/14");
  var result=aswath.fullName();
  // console.log(result);
  
  aswath.isEligibleforElection();
   
  
  // var newbirth=new Date("2012/03/14");
  // console.log(newbirth);   //14th march 2012
  // console.log(Date.now())   //1683568999
  // var agediffs=Date.now()-newbirth;
  // console.log(agediffs);
  //     var agedate=new Date(agediffs); 
  //     console.log(agedate); //milliseconds epoch
  //     // return Math.abs(agedate.getUTCFullYear()-1970);