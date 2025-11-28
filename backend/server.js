const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

const PORT = 5000;

// A predefined route for our vehicle to follow
const route = [
    [75.7873, 26.9124], // Start: Jaipur
    [75.7984, 26.9056],
    [75.8145, 26.8999],
    [75.8242, 26.8973],
    [75.8341, 26.9011],
    [75.8402, 26.9103],
    [75.8443, 26.9224], // Hawa Mahal Area
    [75.8381, 26.9312],
    [75.8282, 26.9351],
    [75.8183, 26.9325],
    [75.8074, 26.9278],
    [75.7951, 26.9201],
    [75.7873, 26.9124]  // End: Back to start
const express = require('express');
const http = require('http');
const { Server } = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

const PORT = 5000;

// A predefined route for our vehicle to follow
const route = [
    [75.7873, 26.9124], // Start: Jaipur
    [75.7984, 26.9056],
    [75.8145, 26.8999],
    [75.8242, 26.8973],
    [75.8341, 26.9011],
    [75.8402, 26.9103],
    [75.8443, 26.9224], // Hawa Mahal Area
    [75.8381, 26.9312],
    [75.8282, 26.9351],
    [75.8183, 26.9325],
    [75.8074, 26.9278],
    [75.7951, 26.9201],
    [75.7873, 26.9124]  // End: Back to start
];

app.get('/', (req, res) => {
    res.send('Welcome to the Project Vanguard Backend!');
});

io.on('connection', (socket) => {
    console.log('A user connected');

    // Send the full route to the client immediately on connection
    socket.emit('fullRoute', route);

    let currentIndex = 0; // Keep track of our position in the route array

    // This function will simulate sending GPS data every 2 seconds
    const interval = setInterval(() => {
        if (currentIndex >= route.length) {
            currentIndex = 0; // Loop the route
        }

        const [longitude, latitude] = route[currentIndex];

        // Simulate dynamic data
        const speed = 45 + (Math.random() - 0.5) * 10; // speed in km/h

        // Simulate driver score (decreases slightly with high speed)
        let driverScore = 95;
        if (speed > 50) driverScore -= Math.floor(Math.random() * 5);
        if (speed > 80) driverScore -= Math.floor(Math.random() * 10);

        // Simulate vehicle status
        const vehicleStatus = {
            engine: Math.random() > 0.95 ? 'warning' : 'good',
            brakes: Math.random() > 0.98 ? 'warning' : 'good',
            tires: Math.random() > 0.98 ? 'warning' : 'good',
            oil: Math.random() > 0.90 ? 'warning' : 'good'
        };

        const mockData = {
            longitude,
            latitude,
            speed,
            driverScore: Math.max(0, Math.min(100, driverScore)), // Clamp between 0-100
            vehicleStatus
        };

        socket.emit('vehicleData', mockData);
        console.log('Emitted data:', mockData);
        currentIndex++; // Move to the next point
    }, 2000); // Emit every 2 seconds for a smoother path

    socket.on('disconnect', () => {
        console.log('User disconnected');
        clearInterval(interval);
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});