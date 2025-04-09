Here is a complete `README.md` file for your authentication system project:

---

# Authentication System with React.js, Node.js, and MongoDB

## Overview

This project is a **User Authentication System** built using **React.js** for the frontend, **Node.js/Express** for the backend, and **MongoDB** as the database. It allows users to sign up, log in, and access protected routes using **JWT-based authentication**.

---

## Features

### Frontend
- **SignUp Form**: 
  - Fields: First Name, Last Name, Email, Address (optional), Password
  - Validation: Required fields, email format check, password length (minimum 6 characters)
- **SignIn Form**:
  - Fields: Email, Password
  - Validation: Required fields
- **Protected Routes**:
  - Dashboard accessible only to authenticated users
- Responsive UI built with **Bootstrap**

### Backend
- **User Registration API** (`POST /api/auth/signup`)
  - Validates input and stores user data securely in MongoDB with hashed passwords.
- **User Login API** (`POST /api/auth/login`)
  - Validates credentials and generates a JWT token.
- **Protected Route API** (`GET /api/auth/user`)
  - Fetches user details for authenticated users.

---

## Tech Stack

### Frontend
- React.js
- Bootstrap
- Axios
- React Router DOM

### Backend
- Node.js
- Express.js
- MongoDB (via Mongoose)
- JWT for authentication

---

## Installation

### Prerequisites
Ensure you have the following installed:
1. [Node.js](https://nodejs.org/)
2. [MongoDB Atlas Account](https://www.mongodb.com/cloud/atlas)
3. [Git](https://git-scm.com/)

---

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com//authentication-system.git
   cd authentication-system/backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `backend` folder:
   ```env
   PORT=5000
   MONGO_URI=mongodb+srv://:@cluster0.mongodb.net/auth-system?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret_key
   ```

4. Start the backend server:
   ```bash
   npm run dev
   ```

The backend will run at `http://localhost:5000`.

---

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```bash
   cd ../frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Update the API URL in `src/context/AuthContext.js`:
   Replace `http://localhost:5000/api` with your backend URL if deployed.

4. Start the frontend development server:
   ```bash
   npm start
   ```

The frontend will run at `http://localhost:3000`.

---

## Deployment

### Backend Deployment (Render or Heroku)
1. Push your code to GitHub.
2. Sign up for [Render](https://render.com) or [Heroku](https://heroku.com).
3. Create a new Web Service and connect your repository.
4. Add environment variables:
   - `PORT`: 5000 or required port number.
   - `MONGO_URI`: Your MongoDB Atlas connection string.
   - `JWT_SECRET`: Your secret key.
5. Deploy the service.

### Frontend Deployment (Netlify or Vercel)
1. Build the frontend:
   ```bash
   npm run build
   ```
2. Deploy the `build` folder using Netlify or Vercel.
3. Update environment variables for API URL if needed.

---

## Folder Structure

```
authentication-system/
├── backend/
│   ├── models/
│   │   └── User.js       # User schema and password hashing logic
│   ├── routes/
│   │   └── authRoutes.js # Authentication routes (signup, login, user)
│   ├── middleware/
│   │   └── auth.js       # JWT authentication middleware for protected routes
│   ├── .env              # Environment variables (MongoDB URI, JWT secret)
│   ├── server.js         # Main server file to start Express app
│   └── package.json      # Backend dependencies and scripts
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.js       # Navbar component with links (SignIn/SignUp/Logout)
│   │   │   └── PrivateRoute.js # Protected route logic for authenticated users only
│   │   ├── context/
│   │   │   └── AuthContext.js  # Context for managing authentication state globally
│   │   ├── pages/
│   │   │   ├── SignUp.js       # SignUp page with form validation and API integration
│   │   │   ├── SignIn.js       # SignIn page with form validation and API integration
│   │   │   └── Dashboard.js    # Protected dashboard page displaying user info
│   │   ├── App.js              # Main React application file with routing logic
│   │   └── index.js            # Entry point for React app rendering components to DOM
│   ├── public/
│   │   └── index.html          # HTML template for React app rendering into root div
│   └── package.json            # Frontend dependencies and scripts (React/Bootstrap/Axios)
└── README.md                   # Project documentation file (this file)
```

---

## API Endpoints

### Public Endpoints:
1. **POST /api/auth/signup**
    - Registers a new user.
    - Request Body:
      ```json
      {
        "firstName": "John",
        "lastName": "Doe",
        "email": "john.doe@example.com",
        "address": "123 Main St",
        "password": "password123"
      }
      ```
    - Response:
      ```json
      {
        "message": "User registered successfully"
      }
      ```

2. **POST /api/auth/login**
    - Logs in an existing user.
    - Request Body:
      ```json
      {
        "email": "john.doe@example.com",
        "password": "password123"
      }
      ```
    - Response:
      ```json
      {
        "token": "",
        "user": {
          "id": "",
          "firstName": "John",
          "lastName": "Doe",
          "email": "john.doe@example.com",
          "address": "123 Main St"
        }
      }
      ```

### Protected Endpoint:
1. **GET /api/auth/user**
    - Fetches details of the logged-in user.
    - Requires Authorization header with Bearer token.

---

