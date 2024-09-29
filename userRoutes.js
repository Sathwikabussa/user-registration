const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Address = require('../models/address');


router.post('/register', async (req, res) => {
  const { name, address } = req.body;
  
  if (!name || !address) {
    return res.status(400).json({ message: 'Name and Address are required' });
  }

  try {
   
    const newUser = new User({ name });
    const savedUser = await newUser.save();

    
    const newAddress = new Address({ userId: savedUser._id, address });
    await newAddress.save();

    res.status(201).json({ message: 'User and Address created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server Error', error });
  }
});

module.exports = router;
