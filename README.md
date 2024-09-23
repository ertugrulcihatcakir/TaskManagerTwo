# MERN Task Manager Application

This is a full-stack task manager application built using the MERN stack (MongoDB, Express, React, and Node.js). The application allows users to create, update, and delete tasks, as well as mark tasks as complete or incomplete.

## Features

- Create a new task
- Update existing tasks
- Delete tasks
- Mark tasks as complete/incomplete
- Responsive user interface built with React
- Backend powered by Node.js and Express
- MongoDB for storing tasks
- RESTful API structure

## Tech Stack

### Frontend:
- React
- Axios for making HTTP requests
- CSS for styling

### Backend:
- Node.js
- Express.js
- MongoDB (using Mongoose)
- dotenv for environment variables

### Additional Tools:
- Postman (for API testing)
- Nodemon (for hot reloading during development)

## Project Structure


## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/en/) (v12 or higher)
- [MongoDB](https://www.mongodb.com/) (local instance or cloud-based using MongoDB Atlas)

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/task-manager-mern.git
cd task-manager-mern

Backend

cd server
npm install

Frontend

cd client
npm install

Task Routes
GET /api/tasks - Get all tasks
POST /api/tasks - Create a new task
GET /api/tasks/:id - Get a task by ID
PATCH /api/tasks/:id - Update a task
DELETE /api/tasks/:id - Delete a task

Add these variables in your .env file
MONGO_URI=your_mongo_uri
JWT_SECRET=secret or anything random
CLIENT_URL=http://localhost:3000 or any localhost port that you are using
PORT=8000

License
This project is licensed under the MIT License.
You can adjust the repository URL, MongoDB connection string, or any other relevant details.
