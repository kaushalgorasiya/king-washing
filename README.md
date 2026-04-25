# King Washing

## Project Documentation
King Washing is a comprehensive solution for managing washing services effectively. It provides an intuitive interface for both customers and service providers, handling all aspects of the washing process.

### Setup Instructions

#### Frontend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/kaushalgorasiya/king-washing.git
   cd king-washing/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

#### Backend Setup
1. Navigate to backend directory:
   ```bash
   cd king-washing/backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the server:
   ```bash
   npm run start
   ```

### API Endpoints
- **GET** `/api/washings`
  - Retrieves a list of washing requests.
- **POST** `/api/washings`
  - Creates a new washing request.
- **GET** `/api/washings/:id`
  - Retrieves details of a specific washing request.
- **PUT** `/api/washings/:id`
  - Updates a specific washing request.
- **DELETE** `/api/washings/:id`
  - Deletes a specific washing request.

### Features
- User Authentication
- Create, Read, Update, and Delete (CRUD) operations for washing requests
- Real-time tracking of washing services
- Notifications for service updates

## License
This project is licensed under the MIT License.