class InvalidProduct {
  public readonly message: string;
  public readonly statusCode: number;
  constructor () {
    this.message = 'ID provided is different from default';
    this.statusCode = 400;
  }
}

export default InvalidProduct;
