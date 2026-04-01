# PingMe - Full Stack Realtime Chat Application ✨

A modern, real-time chat application built with the MERN stack (MongoDB, Express.js, React.js, Node.js) featuring real-time messaging, user authentication, and a beautiful UI.

## 🌟 Features

- Real-time messaging using Socket.io
- User authentication and authorization with JWT
- Online user status tracking
- Modern UI with TailwindCSS and DaisyUI
- Global state management with Zustand
- File sharing capabilities
- Responsive design for all devices
- Error handling and validation
- Cloud storage integration with Cloudinary

## 🛠️ Tech Stack

- **Frontend:**
  - React.js
  - TailwindCSS
  - DaisyUI
  - Socket.io-client
  - Zustand
  - Axios
  - React Router

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB
  - Socket.io
  - JWT
  - Cloudinary
  - Bcrypt

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB
- npm or yarn
- Cloudinary account

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd fullstack-chat-app
```

2. Install dependencies:
```bash
# Install backend dependencies
cd backend
npm install

# Install frontend dependencies
cd ../frontend
npm install
```

3. Create a `.env` file in the backend directory with the following variables:
```env
PORT=5001
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NODE_ENV=development
```

4. Start the development servers:
```bash
# Start backend server (from backend directory)
npm run dev

# Start frontend server (from frontend directory)
npm start
```

## 📝 Project Structure

```
fullstack-chat-app/
├── backend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── context/
│   │   ├── pages/
│   │   ├── store/
│   │   └── utils/
│   └── package.json
└── README.md
```

## 🔒 Environment Variables

Create a `.env` file in the backend directory with the following variables:

```env
PORT=5001
MONGODB_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
NODE_ENV=development
```

## 🚀 Deployment

The application can be deployed on various platforms:

- Frontend: Vercel, Netlify, or GitHub Pages
- Backend: Render, Heroku, or Railway
- Database: MongoDB Atlas


## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
