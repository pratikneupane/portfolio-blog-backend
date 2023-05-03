# 📝 Portfolio Blog Backend

Portfolio Blog Backend is a Node.js/Express application that serves as the backend for a blogging platform. It uses MongoDB as the database and implements authentication using JWT tokens.

## 🚀 Getting Started

### Prerequisites

Before you get started, you will need to have the following installed on your machine:

- Node.js (v14 or higher)
- MongoDB (v4.2 or higher)

### Installation

1. Clone the repository using Git:

   ```bash
   git clone https://github.com/pratikneupane/portfolio-blog-backend.git
   ```

2. Navigate into the project directory:

   ```bash
   cd portfolio-blog-backend
   ```

3. Install the dependencies using npm:

   ```bash
   npm install
   ```

### Configuration

The application requires a `.env` file to be present in the root directory. You can copy the `.env.example` file and modify it according to your needs:

```bash
cp .env.example .env
```

You should update the `MONGODB_URI` variable to point to your MongoDB instance.

### Running the Application

To start the application, run:

```bash
npm start
```

The application should now be running on `http://localhost:5000`.

## 🔑 Authentication

The application uses JSON Web Tokens (JWT) for authentication. To obtain a JWT token, you will need to make a `POST` request to `/login` with valid credentials. The response will contain a token that you can use for subsequent requests that require authentication.

## 📚 API Reference

The following routes are available:

### POST `/register`

Registers a new user. The request body should contain the following fields:

- `username` (string, required)
- `email` (string, required)
- `password` (string, required)

### POST `/login`

Logs in a user. The request body should contain the following fields:

- `email` (string, required)
- `password` (string, required)

### GET `/posts`

Returns a list of all posts.

### GET `/posts/:id`

Returns a specific post with the given ID.

### POST `/posts`

Creates a new post. The request body should contain the following fields:

- `title` (string, required)
- `body` (string, required)

### PUT `/posts/:id`

Updates an existing post with the given ID. The request body should contain the following fields:

- `title` (string, optional)
- `body` (string, optional)

### DELETE `/posts/:id`

Deletes an existing post with the given ID.

## 📝 License

Will add Licensing soon hehe

## 🤝 Contributing

Contributions are welcome! If you find a bug or have a feature request, please open an issue on GitHub. If you want to contribute code, please fork the repository and submit a pull request.