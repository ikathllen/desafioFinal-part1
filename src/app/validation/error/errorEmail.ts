class EmailExist {
    public readonly message: string;
    public readonly statusCode: number;
  
    constructor () {
      this.message = 'Email address already registered in the database.';
      this.statusCode = 400;
    }
  }
  
  export default EmailExist;
  