# *STOCK MAGANER*
API desenvolvida em Node.js

# Database
- Cloud MongoDB (public)

# Dependences
 - _axios_: "^0.27.2";
 - _eslint_: "^8.23.0";
 - _express_: "^4.18.1";
 - _joi_: "^17.6.0";
 - _dotenv_: "^16.0.1",
 - _mongoose_: "^6.5.2";
 - _mongoose-paginate_: "^5.0.3",
 - _mongoose-paginate-v2_: "^1.7.0";
 - _nodemon_: "^2.0.19";
 - _typescript_: "^4.7.4";
 - _multer_: "^1.4.5-lts.1";
 - _jsonwebtoken_: "^8.5.1";
 - _object-mapper_: "^6.2.0";
 - _supertest_: "^6.2.4";
 - _swagger-ui-express_: "^4.5.0";
 - _winston_: "^3.8.2";
 - _winston-mongodb_: "^5.0.7";
 - _morgan_: "^1.10.0";
 
# How to run
 - Clone the repository: to get access to the code on your machine;
 - `npm install`: to install dependencies;
 - Create **.env**: based on _.env-example_ to get access to the database;
 - `npm run start`: to running the code;
 - `npm run lint` or `npm run lint:fix`: to running the ESLint;
 
# Router Product
- 1º Create of a new product
  - **POST**: /api/v1/product
  
- 2º List all registered products
  - **GET**: /api/v1/product
  
- 3º Search by X registered product
  - **GET**: /api/v1/product/:id
  
- 4º Update X registered product
  - **PUT**: /api/v1/product/:id
  
- 5º Update X registered product
  - **PATCH**: /api/v1/product/:id
  
- 6º Delete X registered product
  - **DELETE**: /api/v1/product/:id
  
- 7º List all products that are out of stock
  - **GET**: /api/v1/product/low_stock
  
- 8º Create new products using a CSV
  - **POST**: /api/v1/product/csv
  
# Router User
- 1º Create of a new user
  - **POST**: /api/v1/user
  
- 2º List all registered users
  - **GET**: /api/v1/user
  
- 3º Delete X registered user
  - **DELETE**: /api/v1/user/:id

# Router Authenticate
- 1º New Authenticate
  - **POST**: /api/v1/authenticate
  
# How to enter data
- **For POST normal**:
      <br>title: 'xxxxxxxxxxxx',
      <br>description: 'xxxxxxxxxxxx',
      <br>department: 'xxxxxxxxxxxx',
      <br>brand: 'xxxxxxxxxxxx',
      <br>price: 1.11,
      <br>qtd_stock: 1111,
      <br>bar_codes: 'xxxxxxxxxxxxx'
      
- **For POST with CSV**:
      <br>1 - Create _Multipart Form_ with name **file**;
      <br>2 - Add CSV file;
      <br>3 - Important the order must follow the pattern: title / description / department / brand / price / qtd_stock / bar_codes;
- **For more practical examples and docs**:
      <br> http://localhost:3000/api/v1/api-docs
           <br> _obs.: must go in the authentication route first to get the token and have access_
