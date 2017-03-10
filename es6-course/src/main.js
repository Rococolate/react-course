'use static';

class Animal {
  constructor(name, age){
    this.name = name;
    this.age = age;
  }
  getMessage(){
    console.log(this.name + ' is ' + this.age + ' years old ');
  }
  static showInfo(){
    console.log('show info~');
  }
}

var cat = new Animal('cat','1');

cat.getMessage();

class Cat extends Animal {
  constructor(name, age, color){
    super(name, age);
    this.color = color;
  }
  getName(){
    console.log(this.name +  ' ,color is ' + this.color);
  }
}

var cc = new Cat('cat1' , '1' , 'red' );

cc.getMessage();
Animal.showInfo();
cc.getName();


var other = {
  data : 'other data'
}

var obj= {
  __proto__ : other,
  name : 'wgx',
  getName(){
    console.log(this.name);
  }
}

obj.getName();
console.log(obj.data);

var obj1 = { 
  a: '1' , 
  b:['🐱','🐶','🐮'],
  fn(){},
};

var { a , b , fn } = obj1;

var [ dog, cat, cow ] = b;

console.log(dog);
console.log(cat);
console.log(cow);

const Person = (name='guoyongfeng', age='18') => name + ' ' + age;

Person();

function agrv (obj,...keys) {
  console.log(keys);
  console.log(arguments);
  var res = Object.create(null);

  for (let i = 0 ; i < arguments.length ; i ++ ) {
    res[arguments[i]] = obj[arguments[i]];
  }
  return res;
}

var data = { title : 'es6' , name : 'name' };

var msg = agrv(data,'title','name','age');

console.log(msg.age); // undefined

console.log(aa);

let aa = 0;

import test from './test.js';

console.log(test);













