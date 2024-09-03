

// Function to add event listeners for seat selection
async function addSeatSelectionListeners() {
  document.querySelectorAll('.seat').forEach(async seat => {
    seat.addEventListener('click', async function() {
      const seatNumber = this.getAttribute('data-seat-name'); // Get the seat number from data-seat-name attribute
      const name = "John Doe"; // Assuming you have a way to capture the user's name
      const date = new Date(); // Use the current date for demonstration purposes
      const timeSlot = "5-6";

      // Check if the seat is already reserved
      const isSeatReserved = await checkSeatReservation(date, timeSlot, seatNumber);
      
      // If the seat is reserved, do not book it
      if (isSeatReserved) {
        console.log("Seat already reserved!");
        return;
      }

      // If the seat is not reserved, proceed with booking
      bookSeat(name, date, timeSlot, seatNumber);
    });
  });
}

// Function to check if a seat is already reserved
async function checkSeatReservation(date, timeSlot, seatNumber) {
  try {
    const response = await fetch(`/check-reservation?date=${date}&timeSlot=${timeSlot}&seatNumber=${seatNumber}`);
    const data = await response.json();
    console.log('seat reserved');

    return data.reserved; // true if seat is reserved, false otherwise
  } catch (error) {
    console.error("Error checking seat reservation:", error);
    return false; // Assume seat is not reserved in case of error
  }
}

// Function to book a seat
async function bookSeat(name, date, timeSlot, seatNumber) {
  // Your booking logic remains unchanged
}
