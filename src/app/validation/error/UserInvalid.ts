class UserInvalid {
    public readonly message: string;
    public readonly statusCode: number;
    constructor () {
      this.message = 'User Id is invalid.';
      this.statusCode = 400;
    }
}

export default UserInvalid;
