# To-Do List Backend

This is the backend implementation of a To-Do List application. The purpose of this project is to provide a backend API that allows users to manage and track their tasks effectively. The backend is built using Node.js and Express framework.

## Features

The backend API provides the following features:

- Create a new task
- Read a list of tasks
- Read a specific task by ID
- Update a task
- Delete a task

Each task consists of the following properties:

- Title: The title or name of the task
- Description: A description or additional information about the task
- Date: The due date or deadline of the task
- Status: The status of the task (either "pending" or "completed")

## API Endpoints

The following API endpoints are available:

- `GET /api/tasks`: Retrieves a list of all tasks
- `GET /api/tasks/:id`: Retrieves a specific task by ID
- `POST /api/tasks`: Creates a new task
- `PUT /api/tasks/:id`: Updates a specific task by ID
- `DELETE /api/tasks/:id`: Deletes a specific task by ID

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js: [Download and install Node.js](https://nodejs.org/en/download/)
- MongoDB: [Download and install MongoDB](https://www.mongodb.com/try/download/community)

## Getting Started

1. Clone the repository:

    ```git clone https://github.com/your-username/todo-list-backend.git```

2. Navigate to the project directory:

    ```cd todo-list-backend```

3. Install dependencies:

    ```npm install```

4. Set up the environment variables:
   - Create a new file named `.env` in the root directory.
   - Add the following environment variables to the `.env` file:

   ```MONGO_DB_URI=<your-mongodb-uri>```

   Replace `<your-mongodb-uri>` with the URI of your MongoDB database.

5. Start the server:

    ```npm start```

6. The server should now be running on `http://localhost:3005`.

## Usage

You can use tools like Postman or cURL to interact with the API endpoints.

Here are some example API requests:

- GET all tasks: `GET http://localhost:3005/api/tasks`
- GET a specific task: `GET http://localhost:3005/api/tasks/:id`
- POST a new task: `POST http://localhost:3005/api/tasks`
  - Request body:

    ```json
        {
        "title": "Complete Project Proposal",
        "description": "Write and finalize the project proposal document.",
        "date": "2023-07-06",
        "status": "pending"
        }
    ```

- PUT (update) a task: `PUT http://localhost:3005/api/tasks/:id`
  - Request body:
    
    ```json
        {
        "title": "Updated Task Title",
        "description": "Updated task description",
        "date": "2023-07-07",
        "status": "completed"
        }
    ```

- DELETE a task: `DELETE http://localhost:3005/api/tasks/:id`

## Contribution

Contributions to this project are welcome. Here are some ways you can contribute:

- Report issues or bugs
- Suggest new features or improvements
- Submit pull requests

Please make sure to follow the [contribution guidelines](CONTRIBUTING.md) when contributing to this project.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)

## Contact

For any questions or inquiries, please contact [luisamartinez030503@gmail.com].

Thank you for using the To-Do List Backend!
