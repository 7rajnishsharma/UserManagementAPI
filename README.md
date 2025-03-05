# User Management System

A full-stack User Management System that provides a seamless interface for user registration, profile updates, and administrative controls. Built with Node.js, Express, and MongoDB this application includes robust authentication, CRUD operations, and an admin dashboard for user management.

---

## Features

### User Features
- **Registration**: Users can register with their username, email, role and password.
- **Login**: Users can log in securely with their credentials.
- **Profile Management**: Users can upload profile pictures and manage their details.
- **Logout**: Secure session termination.

### Admin Features
- **Dashboard**: View all registered users.
- **User Management**: Add, update, or delete user details.
- **Search**: Quickly search for users using email or username.

### Technical Features
- **API**: CRUD operations for users via RESTful API.
- **Authentication**: JWT-based authentication for secure sessions.
- **State Management**: Managed with Redux Toolkit for consistent app behavior.
- **Error Handling**: Comprehensive error handling across the backend.


---

## Technologies Used

### Backend
- **Node.js**
- **Express.js**
- **MongoDB**
- **JWT**
- **bcrypt**


---

## Setup Instructions

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/7rajnishsharma/UserManagementAPI.git
   cd UserManagementAPI
   cd Backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the backend root directory and add the following:

   ```env
   PORT=8000
   mongoDB_URL=mongodb://127.0.0.1:27017/User-Management-React-App
   JWT_SECRET=kjhsdkjfh23j4h2302343234dsfsd2d1f94385jkh34kj5h54687nbdmlfg
   ADMIN_MAIL=admin@gmail.com
   ADMIN_PASSWORD=admin@gmail.com
   ```
4. Start the backend server:
   ```bash
   nodemon app.js
   ```

---

## API Endpoints


#### Admin Routes
The following routes are accessible by admin users:

1. **Login Admin**  
   - **Endpoint:** `/admin/login`  
   - **Method:** `POST`  
   - **Description:** Authenticates the admin using email and password.
   - **Request Body:**
     ```json
     {
       "email": "string",
       "password": "string"
     }
     ```
   - **Response:**
     - `200 OK` with JWT token on successful login.
     - `401 Unauthorized` if authentication fails.

2. **Get All Users**  
   - **Endpoint:** `/admin/allUsers`  
   - **Method:** `GET`  
   - **Middleware:** `checkAuth`
   - **Description:** Fetches all users from the database.
   - **Response:**
     - `200 OK` with an array of user objects.
     - `401 Unauthorized` if JWT token is invalid.

3. **Add New User**  
   - **Endpoint:** `/admin/addUser`  
   - **Method:** `POST`  
   - **Middleware:** `checkAuth`
   - **Description:** Adds a new user to the database.
  
     

4. **Edit User**  
   - **Endpoint:** `/admin/edituser/:_id`  
   - **Method:** `PUT`  
   - **Middleware:** `checkAuth`
   - **Description:** Updates user details based on their ID.

5. **Delete User**  
   - **Endpoint:** `/admin/deleteuser/:_id`  
   - **Method:** `DELETE`  
   - **Middleware:** `checkAuth`
   - **Description:** Deletes a user based on their ID.
   - **Request Params:**
     - `_id`: The unique ID of the user.
   - **Response:**
     - `204 No Content` on successful deletion.
     - `404 Not Found` if user ID does not exist.
     - `400 Bad Request` for invalid input.

#### User Routes
The following routes are accessible by regular users:

1. **Login User**  
   - **Endpoint:** `/user/login`  
   - **Method:** `POST`  
   - **Description:** Authenticates a user using email and password.
   - **Request Body:**
     ```json
     {
       "email": "string",
       "password": "string"
     }
     ```
   - **Response:**
     - `200 OK` with JWT token and user data on successful login.
     - `401 Unauthorized` if authentication fails.

2. **Sign Up User**  
   - **Endpoint:** `/user/signup`  
   - **Method:** `POST`  
   - **Description:** Registers a new user.
   - **Request Body:**
     ```json
     {
       "username": "string",
       "email": "string",
       "password": "string",
       "role": "string"
     }
     ```
   - **Response:**
     - `201 Created` on successful registration.
     - `400 Bad Request` if validation fails.

3. **Add Profile Image**  
   - **Endpoint:** `/user/addImage`  
   - **Method:** `POST`  
   - **Middleware:** `checkAuth`
   - **Description:** Allows a user to upload a profile image.
   - **Request Body:**
     - Multipart form-data with image file.
   - **Response:**
     - `200 OK` on successful upload.
     - `400 Bad Request` if file upload fails.


---

## Postman Testing

### 1. Register User
- **Method**: POST
- **URL**: `http://localhost:8000/user/signup`
- **Body** (JSON):
  ```json
  {
    "username": "testuser",
    "email": "testuser@example.com",
    "password": "password123",
    "role": "Seller"
  }
  ```

### 2. Login User
- **Method**: POST
- **URL**: `http://localhost:8000/user/login`
- **Body** (JSON):
  ```json
  {
    "email": "testuser@example.com",
    "password": "password123"
  }
  ```

### 3. Login Admin
- **Method**: POST
- **URL**: `http://localhost:8000/admin/login`
- **Body** (JSON):
  ```json
  {
    "email": "admin@gmail.com",
    "password": "admin@gmail.com"
  }
  ```

---

## API Testing - Visual Representation

### 1. Admin Login

![Screenshot 2025-03-05 125157](https://github.com/user-attachments/assets/4e66e23e-03e5-4514-9b10-1ff11454f28b)


### 2. Register User

![Screenshot 2025-03-05 133335](https://github.com/user-attachments/assets/9d65aeff-9136-40fd-8f29-12255a807b4d)


### 3. User Login

![Screenshot 2025-03-05 133435](https://github.com/user-attachments/assets/44592fb2-de36-4da3-aa7c-0a2fdbfbacc1)

### 4. MongoDB Database (User Collection View)

![Screenshot 2025-03-05 141705](https://github.com/user-attachments/assets/3b1978dc-8661-4358-9056-01ae921ca408)


---


