class IdExistProduct {
    public readonly message: string;
    public readonly statusCode: number;
    constructor () {
      this.message = 'ID is not registered in the database.';
      this.statusCode = 404;
    }
}

export default IdExistProduct;
