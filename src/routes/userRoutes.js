import { Router } from 'express';
import { create, findOne } from '../models/Users';
const router = Router();

// Signup route
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;

    const user = await create({ username, email, password });

    if (!user) {
        res.status( 401).json({ message: 'Invalid credentials' });
        return;

    }

    res.json({ message: 'Signup successful' });
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    const user = await findOne({ email });



    if (user) {
        res.json({ message: 'Login successful' });
    } else {
        res.status( 401).json({ message: 'Invalid credentials' });
    }
});

export default router;

