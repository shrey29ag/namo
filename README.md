# Namo - Premium Video Conferencing

**Namo** is a high-quality, secure, and user-friendly video conferencing application designed to connect people seamlessly. Built with a modern tech stack, it offers crystal-clear video calls, real-time chat, and screen sharing capabilities wrapped in a premium, glassmorphic "Apple-style" aesthetic.

## 🚀 Features

*   **High-Definition Video Calls:** Stable and clear video streaming using WebRTC.
*   **Real-time Chat:** Integrated messaging during meetings.
*   **Screen Sharing:** collaborative work made easy.
*   **Secure Authentication:** User registration and login system.
*   **Meeting History:** Track your past meetings and rejoin them easily.
*   **Premium UI/UX:** Dark mode, glassmorphism, and intuitive controls.
*   **Responsive Design:** Works beautifully across different screen sizes.

## 🛠️ Technology Stack

*   **Frontend:** React.js (Vite), Material UI, CSS Modules
*   **Backend:** Node.js, Express.js
*   **Real-time Communication:** Socket.io, WebRTC
*   **Database:** MongoDB
*   **Styling:** Custom CSS with Glassmorphism effects

## 📦 Installation & Setup

### Prerequisites

*   Node.js (v14 or higher)
*   MongoDB Atlas account or local MongoDB instance

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Namo
```

### 2. Backend Setup

Navigate to the backend directory and install dependencies:

```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory with the following variables:

```env
MONGO_URI=your_mongodb_connection_string
PORT=5000
CLIENT_URL=http://localhost:5173
```

Start the backend server:

```bash
npm run dev
```

### 3. Frontend Setup

Open a new terminal, navigate to the frontend directory and install dependencies:

```bash
cd frontend
npm install
```

Create a `.env` file in the `frontend` directory:

```env
VITE_SERVER_URL=http://localhost:5000
```

Start the development server:

```bash
npm run dev
```

The application should now be running at `http://localhost:5173`.

## 📂 Project Structure

```
Namo/
├── backend/            # Express server & API
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   └── app.js
│   └── .env
├── frontend/           # React Application
│   ├── src/
│   │   ├── pages/
│   │   ├── contexts/
│   │   ├── styles/
│   │   └── App.jsx
│   └── .env
└── README.md
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.
