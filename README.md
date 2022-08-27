# *_desafioFinal-part1_*
Primeira parte do desafio final do programa de bolsa (NodeJS)

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
 
# How to run
 - Clone the repository: to get access to the code on your machine;
 - `npm install`: to install dependencies;
 - Create **.env**: based on _.env-example_ to get access to the database;
 - `npm run dev`: to running the code;
 - `npm run lint` or `npm run lint:fix`: to running the ESLint;
 
# Router
- 1º Create of a new product
  - **POST**: http://localhost:3000/api/v1/product
  
- 2º List all registered products
  - **GET**: http://localhost:3000/api/v1/product
  
- 3º Search by X registered product
  - **GET**: http://localhost:3000/api/v1/product/:id
  
- 4º Update X registered product
  - **PUT**: http://localhost:3000/api/v1/product/:id
  
- 5º Update X registered product
  - **PATCH**: http://localhost:3000/api/v1/product/:id
  
- 6º Delete X registered product
  - **DELETE**: http://localhost:3000/api/v1/product/:id
  
- 7º List all products that are out of stock
  - **GET**: http://localhost:3000/api/v1/product/low_stock
  
- 8º Create new products using a CSV
  - **POST**: http://localhost:3000/api/v1/product/csv

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
