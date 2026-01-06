const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Serve static files
app.use(express.static(__dirname));

// Mock API endpoints
app.get('/api/dashboard', (req, res) => {
    res.json({
        success: true,
        data: {
            stats: {
                totalCheckins: 247,
                highRiskStudents: 8,
                mediumRiskStudents: 23,
                activeStudents: 1284
            }
        }
    });
});

// Mock login page
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'login.html'));
});

// Mock login API
app.post('/api/login', (req, res) => {
    res.json({
        success: true,
        token: 'mock-token-123',
        user: { name: 'Counselor', role: 'admin' }
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
    console.log(`Dashboard: http://localhost:${PORT}/index.html`);
});