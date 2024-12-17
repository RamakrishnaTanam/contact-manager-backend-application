# Contact Manager Backend Application

The **Contact Manager Backend Application** is a RESTful API built using **Node.js** and **Express** for managing contacts. It provides a secure and efficient way for users to store and manage personal or professional contact information with CRUD operations (Create, Read, Update, Delete).

## Features

- **User Authentication & Authorization**: Secure authentication using **JWT** (JSON Web Tokens) to protect endpoints.
- **CRUD Operations**: Easily manage contacts by performing Create, Read, Update, and Delete operations.
- **Error Handling**: Proper error handling for validation errors, unauthorized access, and server errors.
- **Database Integration**: Data is stored and managed with **MongoDB** using **Mongoose**.
- **Environment Configuration**: Secure environment variables management (via `.env` file) for sensitive information.

## Technologies Used

- **Node.js**: JavaScript runtime for building the backend API.
- **Express**: Web framework for handling HTTP requests and routing.
- **MongoDB**: NoSQL database for storing contact data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB interactions.
- **JWT (JSON Web Tokens)**: Securely authenticate and authorize users.
- **Bcrypt**: Password hashing to ensure secure user authentication.

## Getting Started

Follow these steps to set up and run the Contact Manager Backend Application locally:

### Prerequisites

Make sure you have the following installed:
- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **MongoDB**: [Install MongoDB](https://www.mongodb.com/try/download/community) or use a cloud-based service like [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)

### Installation

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/contact-manager-backend-application.git
   cd contact-manager-backend-application
   
2.**Install the dependencies:**

npm install
   
