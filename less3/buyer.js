export class Buyer {
  #_name;
  #_email;
  constructor(email, name) {
    this.email = email;
    this.name = name;
  }
  notifyAboutSale(sale){
    console.log(`${this.#_name} ${this.#_email} for you discount ${discount}`);
  }
}