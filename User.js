export default class User{
  #_name;
  #_age;
  constructor(name,age){
    this.#_name = name;
    this.#_age = age;
  }
  getName(){
    return this.#_name;
  }
  getAge(){
    return this.#_age;
  }
  toString(){
    return `Name: ${this.#_name}, Age: ${this.#_age}`
  }
}


//module.exports = User;