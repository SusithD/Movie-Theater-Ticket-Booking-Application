import { ref, computed } from 'vue';

// Mock movie data
const movies = [
  {
    id: 1,
    title: 'Dune: Part Two',
    rating: 8.7,
    genre: ['Sci-Fi', 'Adventure', 'Drama'],
    duration: '166 min',
    releaseYear: 2024,
    thumbnail: 'https://images.pexels.com/photos/3117550/pexels-photo-3117550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Paul Atreides unites with Chani and the Fremen while seeking revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the universe, he must prevent a terrible future only he can foresee.',
    cast: [
      { name: 'Timothée Chalamet', role: 'Paul Atreides' },
      { name: 'Zendaya', role: 'Chani' },
      { name: 'Rebecca Ferguson', role: 'Lady Jessica' },
      { name: 'Josh Brolin', role: 'Gurney Halleck' },
      { name: 'Austin Butler', role: 'Feyd-Rautha Harkonnen' }
    ],
    director: 'Denis Villeneuve',
    showtimes: [
      { id: 11, time: '12:30', date: '2025-06-01', screen: 1, availableSeats: 84 },
      { id: 12, time: '15:45', date: '2025-06-01', screen: 3, availableSeats: 65 },
      { id: 13, time: '19:30', date: '2025-06-01', screen: 2, availableSeats: 90 },
      { id: 14, time: '13:15', date: '2025-06-02', screen: 1, availableSeats: 80 },
      { id: 15, time: '16:30', date: '2025-06-02', screen: 2, availableSeats: 72 },
      { id: 16, time: '20:00', date: '2025-06-02', screen: 3, availableSeats: 68 }
    ]
  },
  {
    id: 2,
    title: 'Interstellar',
    rating: 8.6,
    genre: ['Sci-Fi', 'Adventure', 'Drama'],
    duration: '169 min',
    releaseYear: 2014,
    thumbnail: 'https://images.pexels.com/photos/6647119/pexels-photo-6647119.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.',
    cast: [
      { name: 'Matthew McConaughey', role: 'Cooper' },
      { name: 'Anne Hathaway', role: 'Dr. Amelia Brand' },
      { name: 'Jessica Chastain', role: 'Murphy' },
      { name: 'Michael Caine', role: 'Professor Brand' }
    ],
    director: 'Christopher Nolan',
    showtimes: [
      { id: 21, time: '14:00', date: '2025-06-01', screen: 4, availableSeats: 70 },
      { id: 22, time: '17:45', date: '2025-06-01', screen: 5, availableSeats: 85 },
      { id: 23, time: '21:15', date: '2025-06-01', screen: 4, availableSeats: 60 },
      { id: 24, time: '13:30', date: '2025-06-02', screen: 5, availableSeats: 88 },
      { id: 25, time: '17:00', date: '2025-06-02', screen: 4, availableSeats: 74 },
      { id: 26, time: '20:30', date: '2025-06-02', screen: 5, availableSeats: 79 }
    ]
  },
  {
    id: 3,
    title: 'The Batman',
    rating: 7.8,
    genre: ['Action', 'Crime', 'Drama'],
    duration: '176 min',
    releaseYear: 2022,
    thumbnail: 'https://images.pexels.com/photos/3132388/pexels-photo-3132388.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'When a sadistic serial killer begins murdering key political figures in Gotham, Batman is forced to investigate the city\'s hidden corruption and question his family\'s involvement.',
    cast: [
      { name: 'Robert Pattinson', role: 'Bruce Wayne / Batman' },
      { name: 'Zoë Kravitz', role: 'Selina Kyle / Catwoman' },
      { name: 'Paul Dano', role: 'Edward Nashton / Riddler' },
      { name: 'Jeffrey Wright', role: 'James Gordon' },
      { name: 'Colin Farrell', role: 'Oz Cobb / Penguin' }
    ],
    director: 'Matt Reeves',
    showtimes: [
      { id: 31, time: '13:00', date: '2025-06-01', screen: 6, availableSeats: 82 },
      { id: 32, time: '16:45', date: '2025-06-01', screen: 7, availableSeats: 67 },
      { id: 33, time: '20:00', date: '2025-06-01', screen: 6, availableSeats: 55 },
      { id: 34, time: '14:15', date: '2025-06-02', screen: 7, availableSeats: 90 },
      { id: 35, time: '18:00', date: '2025-06-02', screen: 6, availableSeats: 77 },
      { id: 36, time: '21:30', date: '2025-06-02', screen: 7, availableSeats: 63 }
    ]
  },
  {
    id: 4,
    title: 'Parasite',
    rating: 8.5,
    genre: ['Drama', 'Thriller'],
    duration: '132 min',
    releaseYear: 2019,
    thumbnail: 'https://images.pexels.com/photos/3692550/pexels-photo-3692550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.',
    cast: [
      { name: 'Song Kang-ho', role: 'Kim Ki-taek' },
      { name: 'Lee Sun-kyun', role: 'Park Dong-ik' },
      { name: 'Cho Yeo-jeong', role: 'Choi Yeon-gyo' },
      { name: 'Choi Woo-shik', role: 'Kim Ki-woo' },
      { name: 'Park So-dam', role: 'Kim Ki-jung' }
    ],
    director: 'Bong Joon-ho',
    showtimes: [
      { id: 41, time: '15:30', date: '2025-06-01', screen: 8, availableSeats: 75 },
      { id: 42, time: '18:45', date: '2025-06-01', screen: 9, availableSeats: 68 },
      { id: 43, time: '21:00', date: '2025-06-01', screen: 8, availableSeats: 83 },
      { id: 44, time: '14:45', date: '2025-06-02', screen: 9, availableSeats: 92 },
      { id: 45, time: '18:15', date: '2025-06-02', screen: 8, availableSeats: 61 },
      { id: 46, time: '20:45', date: '2025-06-02', screen: 9, availableSeats: 73 }
    ]
  },
  {
    id: 5,
    title: 'Everything Everywhere All at Once',
    rating: 8.0,
    genre: ['Action', 'Adventure', 'Comedy'],
    duration: '139 min',
    releaseYear: 2022,
    thumbnail: 'https://images.pexels.com/photos/2174661/pexels-photo-2174661.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'A middle-aged Chinese immigrant is swept up in an insane adventure where she alone can save existence by exploring other universes and connecting with the lives she could have led.',
    cast: [
      { name: 'Michelle Yeoh', role: 'Evelyn Wang' },
      { name: 'Ke Huy Quan', role: 'Waymond Wang' },
      { name: 'Jamie Lee Curtis', role: 'Deirdre Beaubeirdre' },
      { name: 'Stephanie Hsu', role: 'Joy Wang / Jobu Tupaki' },
      { name: 'James Hong', role: 'Gong Gong' }
    ],
    director: 'Daniel Kwan, Daniel Scheinert',
    showtimes: [
      { id: 51, time: '13:45', date: '2025-06-01', screen: 1, availableSeats: 80 },
      { id: 52, time: '16:30', date: '2025-06-01', screen: 2, availableSeats: 70 },
      { id: 53, time: '19:45', date: '2025-06-01', screen: 3, availableSeats: 85 },
      { id: 54, time: '15:00', date: '2025-06-02', screen: 1, availableSeats: 77 },
      { id: 55, time: '18:30', date: '2025-06-02', screen: 2, availableSeats: 64 },
      { id: 56, time: '21:15', date: '2025-06-02', screen: 3, availableSeats: 89 }
    ]
  },
  {
    id: 6,
    title: 'Inception',
    rating: 8.8,
    genre: ['Action', 'Adventure', 'Sci-Fi'],
    duration: '148 min',
    releaseYear: 2010,
    thumbnail: 'https://images.pexels.com/photos/6898961/pexels-photo-6898961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
    cast: [
      { name: 'Leonardo DiCaprio', role: 'Dom Cobb' },
      { name: 'Joseph Gordon-Levitt', role: 'Arthur' },
      { name: 'Ellen Page', role: 'Ariadne' },
      { name: 'Tom Hardy', role: 'Eames' },
      { name: 'Ken Watanabe', role: 'Mr. Saito' }
    ],
    director: 'Christopher Nolan',
    showtimes: [
      { id: 61, time: '14:30', date: '2025-06-01', screen: 4, availableSeats: 73 },
      { id: 62, time: '17:15', date: '2025-06-01', screen: 5, availableSeats: 65 },
      { id: 63, time: '20:45', date: '2025-06-01', screen: 4, availableSeats: 82 },
      { id: 64, time: '15:45', date: '2025-06-02', screen: 5, availableSeats: 69 },
      { id: 65, time: '19:00', date: '2025-06-02', screen: 4, availableSeats: 76 },
      { id: 66, time: '22:15', date: '2025-06-02', screen: 5, availableSeats: 88 }
    ]
  },
  {
    id: 7,
    title: 'The Shawshank Redemption',
    rating: 9.3,
    genre: ['Drama'],
    duration: '142 min',
    releaseYear: 1994,
    thumbnail: 'https://images.pexels.com/photos/3709369/pexels-photo-3709369.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.',
    cast: [
      { name: 'Tim Robbins', role: 'Andy Dufresne' },
      { name: 'Morgan Freeman', role: 'Ellis Boyd "Red" Redding' },
      { name: 'Bob Gunton', role: 'Warden Norton' },
      { name: 'William Sadler', role: 'Heywood' },
      { name: 'Clancy Brown', role: 'Captain Hadley' }
    ],
    director: 'Frank Darabont',
    showtimes: [
      { id: 71, time: '13:15', date: '2025-06-01', screen: 6, availableSeats: 78 },
      { id: 72, time: '16:00', date: '2025-06-01', screen: 7, availableSeats: 86 },
      { id: 73, time: '19:15', date: '2025-06-01', screen: 6, availableSeats: 67 },
      { id: 74, time: '14:30', date: '2025-06-02', screen: 7, availableSeats: 81 },
      { id: 75, time: '17:45', date: '2025-06-02', screen: 6, availableSeats: 74 },
      { id: 76, time: '20:30', date: '2025-06-02', screen: 7, availableSeats: 70 }
    ]
  },
  {
    id: 8,
    title: 'The Dark Knight',
    rating: 9.0,
    genre: ['Action', 'Crime', 'Drama'],
    duration: '152 min',
    releaseYear: 2008,
    thumbnail: 'https://images.pexels.com/photos/4048182/pexels-photo-4048182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.',
    cast: [
      { name: 'Christian Bale', role: 'Bruce Wayne / Batman' },
      { name: 'Heath Ledger', role: 'Joker' },
      { name: 'Aaron Eckhart', role: 'Harvey Dent' },
      { name: 'Michael Caine', role: 'Alfred' },
      { name: 'Gary Oldman', role: 'Commissioner Gordon' }
    ],
    director: 'Christopher Nolan',
    showtimes: [
      { id: 81, time: '15:00', date: '2025-06-01', screen: 8, availableSeats: 69 },
      { id: 82, time: '18:30', date: '2025-06-01', screen: 9, availableSeats: 75 },
      { id: 83, time: '21:45', date: '2025-06-01', screen: 8, availableSeats: 82 },
      { id: 84, time: '14:15', date: '2025-06-02', screen: 9, availableSeats: 90 },
      { id: 85, time: '17:30', date: '2025-06-02', screen: 8, availableSeats: 77 },
      { id: 86, time: '21:00', date: '2025-06-02', screen: 9, availableSeats: 68 }
    ]
  }
];

// Define screen layouts (for seat selection)
const screenLayouts = {
  1: { rows: 8, cols: 12, reserved: ['A1', 'A2', 'F5', 'F6', 'H11', 'H12'] },
  2: { rows: 10, cols: 10, reserved: ['A5', 'A6', 'E1', 'E2', 'J9', 'J10'] },
  3: { rows: 9, cols: 14, reserved: ['A7', 'A8', 'D13', 'D14', 'I1', 'I2'] },
  4: { rows: 12, cols: 8, reserved: ['A4', 'B4', 'F7', 'F8', 'L1', 'L2'] },
  5: { rows: 7, cols: 16, reserved: ['A15', 'A16', 'D1', 'D2', 'G8', 'G9'] },
  6: { rows: 11, cols: 9, reserved: ['A8', 'A9', 'F1', 'F2', 'K4', 'K5'] },
  7: { rows: 8, cols: 15, reserved: ['A14', 'A15', 'D7', 'D8', 'H1', 'H2'] },
  8: { rows: 10, cols: 12, reserved: ['A11', 'A12', 'E1', 'E2', 'J6', 'J7'] },
  9: { rows: 9, cols: 10, reserved: ['A9', 'A10', 'E1', 'E2', 'I5', 'I6'] }
};

export function useMovies() {
  const searchQuery = ref('');
  const selectedGenres = ref([]);
  const allGenres = computed(() => {
    const genreSet = new Set();
    movies.forEach(movie => {
      movie.genre.forEach(g => genreSet.add(g));
    });
    return Array.from(genreSet).sort();
  });

  // Get all movies
  const allMovies = () => movies;

  // Get a movie by ID
  const getMovie = (id) => {
    const movieId = parseInt(id);
    return movies.find(movie => movie.id === movieId) || null;
  };

  // Filter movies based on search and genre selection
  const filteredMovies = computed(() => {
    return movies.filter(movie => {
      // Filter by search query
      const matchesSearch = searchQuery.value === '' || 
        movie.title.toLowerCase().includes(searchQuery.value.toLowerCase());
      
      // Filter by genre
      const matchesGenre = selectedGenres.value.length === 0 || 
        movie.genre.some(g => selectedGenres.value.includes(g));
      
      return matchesSearch && matchesGenre;
    });
  });

  // Get a screen layout by screen ID
  const getScreenLayout = (screenId) => {
    return screenLayouts[screenId] || null;
  };

  // Get a showtime by movie ID and showtime ID
  const getShowtime = (movieId, showtimeId) => {
    const movie = getMovie(movieId);
    if (!movie) return null;
    
    const showtime = movie.showtimes.find(s => s.id === parseInt(showtimeId));
    return showtime || null;
  };

  // Generate a random seat map for a specific showtime
  const generateSeatMap = (screenId, showtimeId) => {
    const layout = screenLayouts[screenId];
    if (!layout) return null;
    
    const { rows, cols, reserved } = layout;
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    
    const seatMap = [];
    
    for (let r = 0; r < rows; r++) {
      const row = [];
      const rowLetter = alphabet[r];
      
      for (let c = 1; c <= cols; c++) {
        const seatId = `${rowLetter}${c}`;
        const isReserved = reserved.includes(seatId);
        
        // Generate some random already booked seats based on the showtime id as a seed
        const randomBookingFactor = (showtimeId * c * r) % 10;
        const isBooked = !isReserved && randomBookingFactor < 3; // ~30% of seats are booked
        
        row.push({
          id: seatId,
          row: rowLetter,
          col: c,
          status: isReserved ? 'reserved' : (isBooked ? 'booked' : 'available')
        });
      }
      
      seatMap.push(row);
    }
    
    return seatMap;
  };

  return {
    allMovies,
    getMovie,
    searchQuery,
    selectedGenres,
    filteredMovies,
    allGenres,
    getScreenLayout,
    getShowtime,
    generateSeatMap
  };
}