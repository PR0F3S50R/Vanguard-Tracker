# Vanguard Tracker - Quick Start Guide

## 🚀 Getting Started in 3 Steps

### Step 1: Configure Mapbox Token
1. Get your free token from: https://account.mapbox.com/access-tokens/
2. Open `frontend/config.js`
3. Replace `YOUR_MAPBOX_ACCESS_TOKEN_HERE` with your token

### Step 2: Start Backend
```bash
cd backend
node server.js
```
Server runs on: http://localhost:5000

### Step 3: Start Frontend
```bash
cd frontend
npm start
```
Dashboard opens at: http://localhost:3000

---

## 📁 Project Structure

```
Vanguard-Tracker/
├── backend/
│   ├── server.js          # WebSocket server
│   └── package.json
├── frontend/
│   ├── index.html         # Main HTML
│   ├── styles.css         # Premium dark theme
│   ├── app.js             # Application logic
│   ├── config.js          # Configuration (ADD TOKEN HERE)
│   ├── .env               # Environment variables
│   └── package.json
└── README.md
```

---

## ⚙️ Configuration Files

### frontend/.env
```env
MAPBOX_ACCESS_TOKEN=YOUR_MAPBOX_ACCESS_TOKEN_HERE
```

### frontend/config.js
```javascript
const config = {
    MAPBOX_ACCESS_TOKEN: 'YOUR_MAPBOX_ACCESS_TOKEN_HERE',
    BACKEND_URL: 'http://localhost:5000',
    MAP_STYLE: 'mapbox://styles/mapbox/dark-v11',
    MAP_CENTER: [75.7873, 26.9124],
    MAP_ZOOM: 13
};
```

---

## 🎨 Features

✅ Real-time vehicle tracking
✅ Interactive Mapbox map with 3D buildings
✅ Dark theme with glassmorphism effects
✅ Live dashboard metrics
✅ Driver score visualization
✅ Vehicle status monitoring
✅ Responsive design

---

## 🐛 Troubleshooting

### Map doesn't load
- Check if Mapbox token is configured in `config.js`
- Verify token is valid at https://account.mapbox.com/

### No vehicle updates
- Ensure backend server is running on port 5000
- Check browser console for WebSocket connection errors
- Verify `BACKEND_URL` in `config.js` is correct

### Port already in use
- Frontend: Change port in package.json script
- Backend: Change `PORT` variable in server.js

---

## 📝 Next Steps

1. Customize the route in `backend/server.js`
2. Add more vehicle metrics
3. Implement historical trip playback
4. Add database integration
5. Deploy to production

---

## 🔗 Useful Links

- Mapbox Documentation: https://docs.mapbox.com/
- Socket.IO Documentation: https://socket.io/docs/
- Project Repository: https://github.com/your-username/vanguard-project

---

**Need help?** Check the full walkthrough in the artifacts or README.md
