# Server-Side Documentation

Welcome to the backend documentation for the **Assignment** project. This server is built using **Node.js**, **Express**, and **TypeScript** to provide a robust API for the frontend application. It manages data storage using **MongoDB** and ensures type safety and validation.

## 🚀 Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js
- **Language**: TypeScript
- **Database**: MongoDB (via Mongoose)
- **Validation**: class-validator, Zod
- **Logging**: Winston
- **Security**: Helmet, CORS

## 🛠 Prerequisites

Before running the server, make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or higher)
- [npm](https://www.npmjs.com/) (usually comes with Node.js)
- A MongoDB Connection URI

## 📥 Installation

1.  **Navigate to the server directory**:
    ```bash
    cd server
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

## ⚙️ Configuration

Create a `.env` file in the root of the `server` directory to configure environment variables. You can use the example below:

**File:** `.env`
```env
# Port for the server to run on
PORT=10000

# MongoDB Connection String
MONGO_URI=<MONGODB URI>
```

> **Note**: Replace the `MONGO_URI` with your own credentials 

## 🏃‍♂️ Running the Server

### Development Mode
To run the server in development mode with hot-reloading (using `nodemon`):
```bash
npm run dev
```
*The server will typically start at [http://localhost:10000](http://localhost:10000)*

### Production Build
To compile the TypeScript code into JavaScript:
```bash
npm run build
```
This will create a `dist` folder containing the compiled code.

### Start Production Server
To run the compiled JavaScript code:
```bash
npm start
```

## 📡 API Endpoints

The server exposes the following API endpoints (prefixed typically with `/api` depending on `server.ts` configuration, assuming standard setup):

### Requirements

-   **POST** `/api/requirements`
    -   **Description**: Create a new requirement entry.
    -   **Body**: JSON object containing requirement details (e.g., job role, event type, etc.).

-   **GET** `/api/requirements`
    -   **Description**: Retrieve a list of all requirements.

## 📂 Project Structure

```text
server/
├── dist/               # Compiled JavaScript files
├── src/
│   ├── config/         # Configuration (Logger, DB connection)
│   ├── controllers/    # Request handlers
│   ├── dtos/           # Data Transfer Objects & Validation
│   ├── models/         # Mongoose Models
│   ├── routes/         # API Routes
│   └── server.ts       # Entry point
├── .env                # Environment variables
├── package.json        # Dependencies and scripts
└── tsconfig.json       # TypeScript configuration
```

## 📝 Scripts Overview

| Script | Description |
| :--- | :--- |
| `npm run dev` | Runs the server in development mode using `nodemon`. |
| `npm run build` | Compiles TypeScript source files to the `dist` directory. |
| `npm start` | Runs the compiled application from the `dist` directory. |
| `npm test` | Placeholder for running tests (currently not implemented). |
