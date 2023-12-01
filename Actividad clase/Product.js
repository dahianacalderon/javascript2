/**
 * Product Class
 */
export class Product {
  /**
   *
   * @param {string} name The Product Name
   * @param {number} price The Product Price
   * @param {number} year The year creation of the Product
   * @param {number} amount The amount of the product
   */
  constructor(name, price, year,amount) {
    this.name = name;
    this.price = price;
    this.year = year;
    this.amount = amount;
  }
}
