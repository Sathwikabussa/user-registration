# user-registration
Here are the steps to complete the assignment:

### 1. **Project Setup**

- Create a new project directory.
- Initialize the project using `npm init`.
- Install necessary dependencies (Express, database ORM, etc.).

### 2. **Database Setup**

- Choose a relational database (e.g., MySQL, PostgreSQL) or use MongoDB.
- Design two tables: **User** (with fields like `id` and `name`) and **Address** (with fields like `id`, `userId`, and `address`).
- Establish a one-to-many relationship between the `User` and `Address` tables.

### 3. **Server Setup**

- Set up an Express.js server to handle incoming requests.
- Use body-parser to parse form submissions.

### 4. **Database Models**

- Define the **User** model with fields like `name`.
- Define the **Address** model with fields like `address` and a foreign key referencing the **User**.
- Establish relationships between the tables or collections (one-to-many).

### 5. **Create API Endpoints**

- Create a **POST** endpoint (`/register`) to collect user name and address from the form submission.
- Store the name in the **User** table and the address in the **Address** table.

### 6. **Testing**

- Use Postman or Insomnia to test the API.
- Send a POST request with user name and address in the body to ensure data is stored correctly.

### 7. **Submission**

- Once completed, create a zip file of the project or push the project to a GitHub repository.

Example Api: http://localhost/8070/api/users/register
request method:post
{
"name":"sathwika",
"address":"hyderabad"
}
response:
{
user and address created successfully
}
Deployment link: https://sathwika-user-registration.netlify.app
