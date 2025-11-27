Project Vanguard - Real-Time Vehicle Tracking & Fleet Intelligence Dashboard
Project Vanguard is a web-based platform for real-time vehicle tracking and intelligent fleet management. Evolving from the initial "V-Track" proof-of-concept, this application provides a live dashboard to monitor a vehicle's location, visualize its route, and display key performance metrics. The backend is built with Node.js and Express, using WebSockets for real-time data transmission, while the frontend is a dynamic and responsive dashboard built with React.js and Mapbox GL JS.

This project serves as the foundational software component for a larger system designed to integrate with real-world vehicle OBD-II data to provide insights into driver safety, vehicle health, and operational efficiency.

(You can replace this link with a screenshot of your own running application)

✨ Features (Current Phase)
Live Location Tracking: A vehicle's position is updated on the map in real-time without needing to refresh the page.

Real-Time Route Simulation: The backend simulates a realistic trip, broadcasting sequential GPS coordinates.

Dynamic Route Visualization: The complete path of the vehicle is drawn on the map, providing clear visual context.

Interactive Map: Users can pan, zoom, and interact with the map, powered by Mapbox GL JS.

Modern Dashboard UI: A clean, professional user interface with a sidebar displaying placeholder information for driver details, vehicle status, and a driver score.

Live Data Display: The vehicle's speed is dynamically updated in the UI based on the live data feed.

🛠️ Tech Stack
Backend:

Node.js - JavaScript Runtime

Express.js - Web Framework

Socket.IO - Real-time, Bidirectional Communication Engine

Frontend:

HTML5 - Semantic Structure

CSS3 - Modern Styling with Glassmorphism

Vanilla JavaScript - ES6+ Application Logic

Mapbox GL JS - Interactive Mapping Library

Socket.IO Client - Client-side library for WebSocket communication

Development Tools:

Nodemon (optional, for backend auto-restarts)

http-server - Simple HTTP server for frontend

🚀 Getting Started
Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

Prerequisites
Node.js & npm: You must have Node.js (which includes npm) installed on your system. You can download it from nodejs.org.

Mapbox Access Token: You will need a free public access token from Mapbox.

Installation & Setup
Clone the Repository

git clone [https://github.com/your-username/vanguard-project.git](https://github.com/your-username/vanguard-project.git)
cd vanguard-project

Setup the Backend Server

Navigate to the backend directory:

cd backend

Install the required npm packages:

npm install

Start the backend server:

node server.js

The server will be running on http://localhost:5000.

Setup the Frontend Dashboard

Open a new terminal window and navigate to the project's root directory.

Navigate to the frontend directory:

cd frontend

Install the required npm packages:

npm install

Configure Your Mapbox Token:

**Option 1: Using config.js (Recommended for quick setup)**

Open the file `frontend/config.js`.

Find the line: `MAPBOX_ACCESS_TOKEN: 'YOUR_MAPBOX_ACCESS_TOKEN_HERE'`

Replace `'YOUR_MAPBOX_ACCESS_TOKEN_HERE'` with your actual public token from Mapbox.

**Option 2: Using .env file (Recommended for production)**

Open the file `frontend/.env`.

Replace `YOUR_MAPBOX_ACCESS_TOKEN_HERE` with your actual Mapbox access token:

```
MAPBOX_ACCESS_TOKEN=pk.eyJ1IjoieW91cnVzZXJuYW1lIiwi...
```

Start the frontend development server:

npm start

Your browser will automatically open to http://localhost:3000, and you should see the dashboard in action.

🔮 Future Work
The next phase of Project Vanguard will focus on implementing the core intelligence features:

Dynamic Driver Score: Develop a backend algorithm to analyze the incoming data stream for events like overspeeding, harsh braking, and rapid acceleration to calculate a live driver score.

Predictive Maintenance Alerts: Implement a rules engine to monitor vehicle telemetry (e.g., coolant temperature, engine load) and generate alerts for potential mechanical issues.

Database Integration: Connect the backend to a MongoDB database to store trip history, driver events, and vehicle data for historical playback and analysis.
