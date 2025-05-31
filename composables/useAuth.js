import { ref, computed } from 'vue';

// Mock user data
const mockUsers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    avatar: 'https://i.pravatar.cc/150?img=1'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
    avatar: 'https://i.pravatar.cc/150?img=5'
  }
];

// Create a global state for authentication
const currentUser = ref(null);
const authError = ref('');

// Create a mock bookings array for the current user
const userBookings = ref([]);

export function useAuth() {
  // Check if there's a saved user in localStorage on first load
  if (process.client && !currentUser.value) {
    const savedUser = localStorage.getItem('cinema_user');
    if (savedUser) {
      currentUser.value = JSON.parse(savedUser);
      // Load mock bookings
      loadMockBookings();
    }
  }

  const isLoggedIn = computed(() => !!currentUser.value);

  function loadMockBookings() {
    if (!currentUser.value) return;
    
    // Create some mock booking history for the user
    userBookings.value = [
      {
        id: 'BK1001',
        movieId: 1,
        movieTitle: 'Dune: Part Two',
        date: '2024-05-10',
        time: '19:30',
        seats: ['C4', 'C5'],
        totalAmount: 24.00,
        bookingDate: '2024-05-01'
      },
      {
        id: 'BK1002',
        movieId: 3,
        movieTitle: 'The Batman',
        date: '2024-04-20',
        time: '20:00',
        seats: ['D7', 'D8', 'D9'],
        totalAmount: 36.00,
        bookingDate: '2024-04-15'
      }
    ];
  }

  function login(email, password) {
    authError.value = '';
    
    const user = mockUsers.find(u => u.email === email && u.password === password);
    if (user) {
      // Create a copy without the password
      const { password, ...safeUser } = user;
      currentUser.value = safeUser;
      
      if (process.client) {
        localStorage.setItem('cinema_user', JSON.stringify(safeUser));
      }
      
      loadMockBookings();
      return true;
    } else {
      authError.value = 'Invalid email or password';
      return false;
    }
  }

  function register(name, email, password) {
    authError.value = '';
    
    // Check if user already exists
    if (mockUsers.some(u => u.email === email)) {
      authError.value = 'Email already in use';
      return false;
    }
    
    // Create a new user
    const newUser = {
      id: mockUsers.length + 1,
      name,
      email,
      avatar: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`
    };
    
    // Add to mock users (in a real app, this would be a server call)
    mockUsers.push({ ...newUser, password });
    
    // Set as current user (without password)
    currentUser.value = newUser;
    
    if (process.client) {
      localStorage.setItem('cinema_user', JSON.stringify(newUser));
    }
    
    // Initialize empty booking history
    userBookings.value = [];
    
    return true;
  }

  function logout() {
    currentUser.value = null;
    userBookings.value = [];
    
    if (process.client) {
      localStorage.removeItem('cinema_user');
    }
  }

  function addBooking(booking) {
    userBookings.value.unshift(booking);
  }

  return {
    currentUser,
    isLoggedIn,
    userBookings,
    authError,
    login,
    register,
    logout,
    addBooking
  };
}