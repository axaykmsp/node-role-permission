const express = require('express');
const authRoutes = require('./routes/auth');
const app = express();
const authenticateToken = require('./middleware/authMiddleware')

app.use(express.json());

// Use the auth routes
app.use('/api/auth', authRoutes);

app.get('/api/protected', authenticateToken, (req, res) => {
    res.json({ message: 'This is a protected route', user: req.user });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
