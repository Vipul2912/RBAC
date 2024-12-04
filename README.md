# Role-Based Access Control Application (RBAC)

## Overview

The RBAC application implements role-based user management, allowing for controlled access to features based on user roles. There are two roles in this system:
- **Admin**: Can delete users (except other admins) and manage overall access.
- **User**: Can perform basic operations without administrative privileges.

## Features

- **Authentication & Authorization**:
  - Secure user authentication using JWT.
  - Role-based authorization to control feature access.
- **Admin Privileges**:
  - Ability to delete users except for other admins.
- **User Management**:
  - Users can view their information and perform non-restricted actions.
- **Scalable Backend**: Built for role-based extensibility with ease of customization.

---

## Technologies Used

### Backend:
- **Node.js**: Server runtime for scalable backend logic.
- **Express.js**: Framework for RESTful API creation.
- **MongoDB**: Database for storing user and role data.
- **Mongoose**: ODM for MongoDB to handle schema and models.

### Frontend:
- **React.js**: User-friendly interface for managing access and features.
- **Axios**: API communication between frontend and backend.

### Security:
- **JWT (JSON Web Tokens)**: For secure session handling.
- **bcrypt.js**: Secure password hashing to protect user credentials.

---

## Installation and Setup

### Prerequisites:
- **Node.js** and **npm**
- **MongoDB** (local or cloud)
- Basic knowledge of command-line tools.

### Steps:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/Vipul2912/RBAC.git
   cd RBAC
   ```

2. **Install Dependencies**:
   - Backend:
     ```bash
     cd backend
     npm install
     ```
   - Frontend:
     ```bash
     cd ../frontend
     npm install
     ```

3. **Environment Configuration**:
   Create a `.env` file in the backend folder and define:
   ```env
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret
   ```

4. **Run the Application**:
   - Start the backend:
     ```bash
     cd backend
     npm run start
     ```
   - Start the frontend:
     ```bash
     cd ../frontend
     npm start
     ```

5. **Access the Application**:
   Visit [http://localhost:4000](http://localhost:4000) to use the RBAC system.

---

## API Endpoints

### Authentication:
- **POST** `/api/auth/login` - Authenticate users and generate a token.
- **POST** `/api/auth/register` - Register new users with default roles.

### Admin-Only Actions:
- **POST** `/api/admin/delete/:id` - Deletes a user by ID (Admin-only access).

### User Actions:
- **GET** `/api/user/getuser` - Retrieves logged-in user details.

---

## Challenges

- **Role Restriction**: Ensuring that admins cannot delete other admins.
- **Session Security**: Implementing JWT for secure and scalable session management.
- **Scalable Authorization**: Designing a system that is flexible for future role additions.

---

## Future Enhancements

- Add support for additional roles with customized permissions.
- Integrate logging for auditing admin actions.
- Build analytics dashboards for user activity monitoring.

---
