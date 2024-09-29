const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');
const path = require('path');


dotenv.config();



const app = express();
app.use(cors());


app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(path.join(__dirname, 'frontend')));


app.use('/api/users', userRoutes);




mongoose.connect('mongodb://localhost:27017/userAddressDB')
.then(() => {
  console.log('Connected to MongoDB');
})
.catch(err => {
  console.error('Failed to connect to MongoDB', err);
});



const PORT = process.env.PORT || 8070;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
