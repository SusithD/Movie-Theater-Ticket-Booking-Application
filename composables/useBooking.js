import { ref, computed } from 'vue';
import { useAuth } from './useAuth';

const currentBooking = ref({
  movieId: null,
  movieTitle: '',
  showtimeId: null,
  date: '',
  time: '',
  screen: null,
  seats: [],
  ticketPrice: 12.00, // Default ticket price
  totalAmount: 0
});

export function useBooking() {
  const { addBooking } = useAuth();
  
  // Reset the current booking
  function resetBooking() {
    currentBooking.value = {
      movieId: null,
      movieTitle: '',
      showtimeId: null,
      date: '',
      time: '',
      screen: null,
      seats: [],
      ticketPrice: 12.00,
      totalAmount: 0
    };
  }
  
  // Set the movie and showtime for the booking
  function setMovieAndShowtime(movie, showtime) {
    if (!movie || !showtime) return;
    
    currentBooking.value.movieId = movie.id;
    currentBooking.value.movieTitle = movie.title;
    currentBooking.value.showtimeId = showtime.id;
    currentBooking.value.date = showtime.date;
    currentBooking.value.time = showtime.time;
    currentBooking.value.screen = showtime.screen;
    currentBooking.value.seats = [];
    updateTotalAmount();
  }
  
  // Toggle seat selection
  function toggleSeat(seat) {
    if (seat.status !== 'available') return false;
    
    const index = currentBooking.value.seats.findIndex(s => s === seat.id);
    
    if (index === -1) {
      // Add seat if not already selected
      currentBooking.value.seats.push(seat.id);
    } else {
      // Remove seat if already selected
      currentBooking.value.seats.splice(index, 1);
    }
    
    updateTotalAmount();
    return true;
  }
  
  // Check if a seat is selected
  function isSeatSelected(seatId) {
    return currentBooking.value.seats.includes(seatId);
  }
  
  // Update the total amount based on selected seats
  function updateTotalAmount() {
    currentBooking.value.totalAmount = currentBooking.value.seats.length * currentBooking.value.ticketPrice;
  }
  
  // Complete the booking process
  function completeBooking() {
    // In a real app, this would call an API to save the booking
    // For this mock app, we'll just generate a confirmation number and save to local state
    
    const booking = {
      ...currentBooking.value,
      id: `BK${Math.floor(1000 + Math.random() * 9000)}`, // Generate a random booking ID
      bookingDate: new Date().toISOString().split('T')[0] // Today's date
    };
    
    // Add to the user's booking history
    addBooking(booking);
    
    // Return the booking details
    return booking;
  }
  
  return {
    currentBooking: computed(() => currentBooking.value),
    resetBooking,
    setMovieAndShowtime,
    toggleSeat,
    isSeatSelected,
    completeBooking
  };
}