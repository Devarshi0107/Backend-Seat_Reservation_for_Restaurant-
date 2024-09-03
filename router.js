


const express = require('express');
const router = express.Router();
const Restaurant = require('./Restaurant.js');
const Reservation = require('./Reservation.js'); // Import the Reservation model

// Route to display all restaurant details
router.get('/restaurants', async (req, res) => {
  try {
    const restaurants = await Restaurant.find();
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to display restaurant details based on location
router.get('/restaurants/location/:location', async (req, res) => {
  const location = req.params.location;
  try {
    const restaurants = await Restaurant.find({ location: location });
    res.json(restaurants);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get('/restaurants/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const restaurant = await Restaurant.findById(id);
    if (!restaurant) {
      return res.status(404).json({ message: 'Restaurant not found' });
    }
    res.json(restaurant);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Route to fetch reservation data
router.get('/Reservation', async (req, res) => {
  try {
    // Fetch all reservations from the Reservation collection
    const reservations = await Reservation.find();

    // Send the reservations data as a JSON response
    res.json(reservations);
  } catch (err) {
    // Handle errors
    res.status(500).json({ message: err.message });
  }
});

router.post("/addrereservations",(req,res)=>{
  console.log(req.body);
  
  Reservation.create(req.body);
})


router.post('/reserved-seats', async (req, res) => {
  try {
    let seatbooked = [];
   console.log(req.body.time,req.body.date);
    const reservations = await Reservation.find({"date" : req.body.date,time_slot:req.body.time});
    reservations.map(reservation => reservation.seat_number.map(element=>seatbooked.push(element)));
    res.json({reservedSeats:seatbooked});
    console.log(seatbooked);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
})


  

module.exports = router;
