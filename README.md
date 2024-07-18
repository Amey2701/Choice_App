# What Next??? Application

This project is a full-stack web application designed to help users decide their next career move by allowing them to select between job, MS, and MBA options. The frontend is built using React.js and deployed on Firebase, while the backend server is built using Express.js and hosted on Render. The data is stored in a MongoDB Atlas database.

## Features

- Collects user input including name and choice (job, MS, or MBA)
- Submits data to the backend server using Axios
- Stores data in MongoDB Atlas
- Provides user feedback upon successful submission

## Technologies Used

- **Frontend:**
  - React.js
  - CSS for styling
  - Axios for HTTP requests

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB Atlas

- **Deployment:**
  - Frontend: Firebase
  - Backend: Render

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account
- Firebase account
- Render account

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/what-next-app.git
   cd what-next-app
   ```

2. **Install dependencies for the client:**
   ```bash
   cd client
   npm install
   ```

3. **Install dependencies for the server:**
   ```bash
   cd ../server
   npm install
   ```

### Configuration

1. **MongoDB Atlas:**
   - Create a new cluster on MongoDB Atlas.
   - Whitelist your IP address.
   - Create a new database and collection.

2. **Firebase:**
   - Create a new project on Firebase.
   - Add a new web app to your Firebase project.
   - Copy the Firebase configuration and replace the placeholder in `client/src/firebase-config.js`.

3. **Render:**
   - Create a new web service on Render.
   - Connect your repository and deploy the server.

### Environment Variables

Create a `.env` file in the `server` directory and add the following:
   ```
   MONGODB_URI=your_mongodb_atlas_connection_string
   ```

### Running the Application

1. **Start the server:**
   ```bash
   cd server
   npm start
   ```

2. **Start the client:**
   ```bash
   cd ../client
   npm start
   ```

### Deployment

1. **Deploy the frontend to Firebase:**
   ```bash
   cd client
   npm run build
   firebase deploy
   ```

2. **Deploy the backend to Render:**
   - Follow the instructions on Render to deploy your server.

### Accessing the Application

The application is accessible via the following URL:
[https://choiceapp-6281d.web.app](https://choiceapp-6281d.web.app)

## Usage

1. Open the application in your browser.
2. Enter your name and select your choice (job, MS, or MBA).
3. Submit the form.
4. You will receive a thank you message upon successful submission.

## Code Overview

### Client

- `client/src/WhatNext.js`: Main component containing the form and handling user input.
- `client/src/App.js`: Root component rendering `WhatNext`.
- `client/src/App.css`: Styling for the application.

### Server

- `server/index.js`: Express server handling the POST request and storing data in MongoDB.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to reach out if you have any questions or need further assistance. Happy coding!
