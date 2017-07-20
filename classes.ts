
interface UserInterface{
  name: string;
  age: number;
  email: string;
  register();
  payInvoice();

}


class User implements UserInterface {
  name: string;
  age: number;
  email: string;
  protected phone: number; // this protected - only accesible for classes that inherited this class

  constructor(name:string, age:number, email:string) {
    this.name = name;
    this.age = age;
    this.email = email;

    console.log('User created: '+ this.name);
    console.log('User age is : '+ this.age);
  }

  register(){
      console.log(this.name + ' registered');
  }

  payInvoice(){
      console.log(this.name + ' paid invoice');
  }
}

class Member extends User{
  id: number;

  constructor(id:number,name:string, age:number, email:string){
    super(name,age,email);
    this.id=id;
  }

  payInvoice(){
    super.payInvoice();
  };

}

// let John = new User('John',29,'john@aa.com');
//console.log('this is property is public : '+John.email);

let mike: User = new Member(1, 'mike', 24, 'mike@ab.com');
mike.payInvoice();
