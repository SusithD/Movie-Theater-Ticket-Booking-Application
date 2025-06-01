<template>
  <div class="min-h-screen bg-gradient-to-br from-dark-400 via-dark-300 to-dark-400">
    <!-- Animated background -->
    <div class="absolute inset-0 overflow-hidden opacity-20">
      <div class="absolute top-10 left-1/4 w-2 h-2 bg-primary-400 rounded-full animate-float"></div>
      <div class="absolute top-20 right-1/3 w-1 h-1 bg-accent-400 rounded-full animate-float-slow"></div>
      <div class="absolute bottom-32 left-1/2 w-3 h-3 bg-secondary-400 rounded-full animate-float-reverse"></div>
      <div class="absolute top-40 right-1/4 w-1.5 h-1.5 bg-primary-300 rounded-full animate-float"></div>
    </div>

    <div class="container mx-auto px-4 py-8 relative z-10">
      <div v-if="isLoggedIn">
        <!-- Profile Header -->
        <div class="mb-8">
          <div class="flex items-center gap-4 mb-4">
            <h1 class="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-white to-accent-400">
              My Profile
            </h1>
          </div>
          <p class="text-gray-400 text-lg">Manage your account and track your cinema journey</p>
        </div>
        
        <div class="grid grid-cols-1 xl:grid-cols-4 gap-8">
          <!-- Enhanced User Profile Card -->
          <div class="xl:col-span-1">
            <div class="space-y-6">
              <!-- Main Profile Card -->
              <div class="relative overflow-hidden bg-gradient-to-br from-dark-300/90 via-dark-200/90 to-dark-300/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-dark-500/20">
                <!-- Card background overlay -->
                <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5"></div>
                
                <div class="relative z-10 p-8">
                  <!-- Avatar Section -->
                  <div class="flex flex-col items-center mb-6">
                    <div class="relative group">
                      <!-- Animated border -->
                      <div class="absolute -inset-1 bg-gradient-to-r from-primary-500 via-accent-500 to-primary-500 rounded-full opacity-75 group-hover:opacity-100 animate-gradient-x transition-opacity duration-300"></div>
                      <img 
                        :src="currentUser.avatar" 
                        :alt="currentUser.name" 
                        class="relative w-24 h-24 rounded-full object-cover border-4 border-dark-400 group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                      <!-- Status indicator -->
                      <div class="absolute bottom-1 right-1 w-6 h-6 bg-green-500 border-2 border-dark-400 rounded-full flex items-center justify-center">
                        <div class="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      </div>
                    </div>
                    
                    <div class="text-center mt-4">
                      <h2 class="text-2xl font-bold text-white mb-1">{{ currentUser.name }}</h2>
                      <p class="text-primary-400 font-medium">{{ currentUser.email }}</p>
                      <div class="flex items-center justify-center gap-2 mt-2">
                        <svg class="w-4 h-4 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                        </svg>
                        <span class="text-sm text-gray-300">Verified Member</span>
                      </div>
                    </div>
                  </div>

                  <!-- Quick Stats -->
                  <div class="grid grid-cols-2 gap-4 mb-6">
                    <div class="text-center p-4 bg-gradient-to-br from-primary-500/10 to-primary-600/10 rounded-xl border border-primary-500/20">
                      <div class="text-2xl font-bold text-primary-400">{{ userBookings.length }}</div>
                      <div class="text-xs text-gray-400 mt-1">Total Bookings</div>
                    </div>
                    <div class="text-center p-4 bg-gradient-to-br from-accent-500/10 to-accent-600/10 rounded-xl border border-accent-500/20">
                      <div class="text-2xl font-bold text-accent-400">{{ totalMoviesWatched }}</div>
                      <div class="text-xs text-gray-400 mt-1">Movies Watched</div>
                    </div>
                  </div>

                  <!-- Member Details -->
                  <div class="space-y-3">
                    <div class="flex items-center justify-between py-2 border-b border-white/5">
                      <span class="text-gray-400 text-sm">Member Since</span>
                      <span class="text-white font-medium text-sm">{{ memberSince }}</span>
                    </div>
                    <div class="flex items-center justify-between py-2 border-b border-white/5">
                      <span class="text-gray-400 text-sm">Total Spent</span>
                      <span class="text-green-400 font-bold text-sm">${{ totalSpent }}</span>
                    </div>
                    <div class="flex items-center justify-between py-2 border-b border-white/5">
                      <span class="text-gray-400 text-sm">Favorite Genre</span>
                      <span class="text-primary-400 font-medium text-sm">{{ favoriteGenre }}</span>
                    </div>
                    <div class="flex items-center justify-between py-2">
                      <span class="text-gray-400 text-sm">Loyalty Points</span>
                      <span class="text-accent-400 font-bold text-sm">{{ loyaltyPoints }}</span>
                    </div>
                  </div>

                  <!-- Edit Profile Button -->
                  <button class="w-full mt-6 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-accent-500 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25 flex items-center justify-center gap-2">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                    </svg>
                    Edit Profile
                  </button>
                </div>
              </div>

              <!-- Achievement Card -->
              <div class="relative overflow-hidden bg-gradient-to-br from-dark-300/90 via-dark-200/90 to-dark-300/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-dark-500/20">
                <div class="absolute inset-0 bg-gradient-to-br from-accent-500/5 via-transparent to-secondary-500/5"></div>
                
                <div class="relative z-10 p-6">
                  <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
                    <svg class="w-5 h-5 text-accent-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                    Achievements
                  </h3>
                  
                  <div class="space-y-3">
                    <div class="flex items-center gap-3 p-3 bg-gradient-to-r from-primary-500/10 to-primary-600/10 rounded-lg border border-primary-500/20">
                      <div class="w-8 h-8 bg-primary-500 rounded-full flex items-center justify-center">
                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                        </svg>
                      </div>
                      <div>
                        <div class="text-sm font-medium text-white">First Booking</div>
                        <div class="text-xs text-gray-400">Welcome to CinemaBox!</div>
                      </div>
                    </div>
                    
                    <div v-if="userBookings.length >= 5" class="flex items-center gap-3 p-3 bg-gradient-to-r from-accent-500/10 to-accent-600/10 rounded-lg border border-accent-500/20">
                      <div class="w-8 h-8 bg-accent-500 rounded-full flex items-center justify-center">
                        <svg class="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                        </svg>
                      </div>
                      <div>
                        <div class="text-sm font-medium text-white">Movie Buff</div>
                        <div class="text-xs text-gray-400">5+ movies booked</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Main Content Area -->
          <div class="xl:col-span-3 space-y-8">
            <!-- Stats Overview -->
            <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div class="relative overflow-hidden bg-gradient-to-br from-dark-300/90 via-dark-200/90 to-dark-300/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl shadow-dark-500/20 p-6">
                <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-primary-600/5"></div>
                <div class="relative z-10">
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold text-white">This Month</h3>
                    <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 9h12v8a1 1 0 01-1 1H5a1 1 0 01-1-1V9z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                  </div>
                  <div class="text-3xl font-bold text-primary-400 mb-2">{{ monthlyBookings }}</div>
                  <div class="text-sm text-gray-400">Movies Watched</div>
                  <div class="mt-3 flex items-center text-sm">
                    <svg class="w-4 h-4 text-green-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-green-400">+25% from last month</span>
                  </div>
                </div>
              </div>

              <div class="relative overflow-hidden bg-gradient-to-br from-dark-300/90 via-dark-200/90 to-dark-300/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl shadow-dark-500/20 p-6">
                <div class="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-accent-600/5"></div>
                <div class="relative z-10">
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold text-white">Total Saved</h3>
                    <div class="w-12 h-12 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                      </svg>
                    </div>
                  </div>
                  <div class="text-3xl font-bold text-accent-400 mb-2">${{ totalSaved }}</div>
                  <div class="text-sm text-gray-400">With member discounts</div>
                  <div class="mt-3 flex items-center text-sm">
                    <svg class="w-4 h-4 text-accent-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span class="text-accent-400">Member benefits active</span>
                  </div>
                </div>
              </div>

              <div class="relative overflow-hidden bg-gradient-to-br from-dark-300/90 via-dark-200/90 to-dark-300/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-xl shadow-dark-500/20 p-6">
                <div class="absolute inset-0 bg-gradient-to-br from-secondary-500/5 to-secondary-600/5"></div>
                <div class="relative z-10">
                  <div class="flex items-center justify-between mb-4">
                    <h3 class="text-lg font-semibold text-white">Next Level</h3>
                    <div class="w-12 h-12 bg-gradient-to-br from-secondary-500 to-secondary-600 rounded-xl flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                      </svg>
                    </div>
                  </div>
                  <div class="text-3xl font-bold text-secondary-400 mb-2">{{ pointsToNextLevel }}</div>
                  <div class="text-sm text-gray-400">Points needed</div>
                  <div class="mt-3">
                    <div class="w-full bg-dark-500 rounded-full h-2">
                      <div class="bg-gradient-to-r from-secondary-500 to-secondary-400 h-2 rounded-full transition-all duration-300" :style="{ width: `${progressToNextLevel}%` }"></div>
                    </div>
                    <div class="text-xs text-gray-400 mt-1">{{ progressToNextLevel }}% to VIP status</div>
                  </div>
                </div>
              </div>
            </div>

            <!-- Booking History Enhanced -->
            <div class="relative overflow-hidden bg-gradient-to-br from-dark-300/90 via-dark-200/90 to-dark-300/90 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl shadow-dark-500/20">
              <div class="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5"></div>
              
              <div class="relative z-10 p-8">
                <div class="flex items-center justify-between mb-8">
                  <div class="flex items-center gap-4">
                    <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
                      <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"/>
                        <path fill-rule="evenodd" d="M4 5a2 2 0 012-2v1a2 2 0 002 2h8a2 2 0 002-2V3a2 2 0 012 2v6a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 3a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <div>
                      <h2 class="text-2xl font-bold text-white">Booking History</h2>
                      <p class="text-gray-400">Your cinema journey so far</p>
                    </div>
                  </div>
                  
                  <!-- Filter buttons -->
                  <div class="flex gap-2">
                    <button class="px-4 py-2 bg-primary-500/20 text-primary-400 rounded-lg border border-primary-500/30 hover:bg-primary-500/30 transition-colors text-sm font-medium">
                      All Time
                    </button>
                    <button class="px-4 py-2 text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors text-sm font-medium">
                      This Year
                    </button>
                  </div>
                </div>
                
                <div v-if="userBookings.length > 0" class="space-y-6">
                  <div v-for="booking in userBookings" :key="booking.id" class="group relative overflow-hidden bg-gradient-to-r from-dark-400/50 to-dark-300/50 backdrop-blur-sm border border-white/5 rounded-xl p-6 hover:border-primary-500/30 hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300">
                    <!-- Booking content -->
                    <div class="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                      <div class="flex-1">
                        <div class="flex items-start gap-4">
                          <!-- Movie poster placeholder -->
                          <div class="w-16 h-24 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg flex items-center justify-center border border-white/10">
                            <svg class="w-8 h-8 text-primary-400" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                            </svg>
                          </div>
                          
                          <div class="flex-1">
                            <h3 class="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">{{ booking.movieTitle }}</h3>
                            
                            <!-- Movie details -->
                            <div class="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                              <div class="flex items-center gap-1">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 9h12v8a1 1 0 01-1 1H5a1 1 0 01-1-1V9z" clip-rule="evenodd"/>
                                </svg>
                                {{ formatDate(booking.date) }}
                              </div>
                              <div class="flex items-center gap-1">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                                </svg>
                                {{ booking.time }}
                              </div>
                              <div class="flex items-center gap-1">
                                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                                  <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
                                  <path fill-rule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clip-rule="evenodd"/>
                                </svg>
                                Screen {{ booking.screen }}
                              </div>
                            </div>
                            
                            <!-- Seats -->
                            <div class="flex items-center gap-2 mb-3">
                              <span class="text-sm text-gray-400">Seats:</span>
                              <div class="flex flex-wrap gap-1">
                                <span 
                                  v-for="seat in booking.seats" 
                                  :key="seat"
                                  class="px-3 py-1 bg-gradient-to-r from-primary-500/20 to-accent-500/20 border border-primary-500/30 rounded-lg text-xs font-medium text-primary-300"
                                >
                                  {{ seat }}
                                </span>
                              </div>
                            </div>
                            
                            <!-- Booking metadata -->
                            <div class="text-xs text-gray-500">
                              Booked on {{ formatBookingDate(booking.bookingDate) }}
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <!-- Booking actions -->
                      <div class="flex flex-col items-end gap-4 lg:min-w-[200px]">
                        <div class="text-right">
                          <div class="text-2xl font-bold text-accent-400 mb-1">${{ booking.totalAmount.toFixed(2) }}</div>
                          <div class="text-xs text-gray-400">Total Amount</div>
                        </div>
                        
                        <div class="flex gap-2">
                          <NuxtLink 
                            :to="`/booking/confirmation/${booking.id}`" 
                            class="px-4 py-2 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-accent-500 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 text-sm"
                          >
                            View Ticket
                          </NuxtLink>
                          <button class="px-4 py-2 bg-white/5 hover:bg-white/10 text-gray-300 hover:text-white rounded-lg border border-white/10 hover:border-white/20 transition-all duration-300 text-sm">
                            Download
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div v-else class="text-center py-16">
                  <div class="w-24 h-24 mx-auto mb-6 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-12 w-12 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </div>
                  <h3 class="text-xl font-semibold text-white mb-2">No bookings yet</h3>
                  <p class="text-gray-400 mb-8 max-w-md mx-auto">Start your cinema journey today! Browse our latest movies and book your first show.</p>
                  <NuxtLink to="/movies" class="inline-flex items-center gap-2 bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-accent-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 6a2 2 0 012-2h6l2 2h6a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V6z"/>
                    </svg>
                    Browse Movies
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Not Logged In - Enhanced -->
      <div v-else class="min-h-screen flex items-center justify-center">
        <div class="text-center max-w-md mx-auto">
          <div class="relative mb-8">
            <div class="w-32 h-32 mx-auto bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full flex items-center justify-center backdrop-blur-xl border border-white/10">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-16 w-16 text-primary-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <!-- Floating elements -->
            <div class="absolute top-4 -right-2 w-3 h-3 bg-primary-500 rounded-full animate-float"></div>
            <div class="absolute -bottom-2 -left-2 w-2 h-2 bg-accent-500 rounded-full animate-float-slow"></div>
          </div>
          
          <h3 class="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 mb-4">
            Access Your Profile
          </h3>
          <p class="text-gray-400 mb-8 text-lg leading-relaxed">
            Sign in to view your booking history, manage preferences, and unlock exclusive member benefits.
          </p>
          
          <div class="space-y-4">
            <NuxtLink 
              to="/login" 
              class="block w-full bg-gradient-to-r from-primary-600 to-primary-500 hover:from-primary-500 hover:to-accent-500 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary-500/25"
            >
              Sign In to Your Account
            </NuxtLink>
            
            <NuxtLink 
              to="/signup" 
              class="block w-full bg-white/5 backdrop-blur-md border border-white/20 hover:border-primary-400/50 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-white/10"
            >
              Create New Account
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useAuth } from '~/composables/useAuth';
import { computed } from 'vue';

const { isLoggedIn, currentUser, userBookings } = useAuth();

// Computed properties for enhanced stats
const totalMoviesWatched = computed(() => {
  return new Set(userBookings.value.map(booking => booking.movieTitle)).size;
});

const totalSpent = computed(() => {
  return userBookings.value.reduce((total, booking) => total + booking.totalAmount, 0).toFixed(2);
});

const totalSaved = computed(() => {
  // Simulate member savings (10% of total spent)
  return (totalSpent.value * 0.1).toFixed(2);
});

const favoriteGenre = computed(() => {
  // Simulate favorite genre based on bookings
  const genres = ['Action', 'Drama', 'Comedy', 'Sci-Fi', 'Thriller'];
  return genres[Math.floor(Math.random() * genres.length)];
});

const loyaltyPoints = computed(() => {
  return userBookings.value.length * 100 + Math.floor(Math.random() * 500);
});

const monthlyBookings = computed(() => {
  const currentMonth = new Date().getMonth();
  return userBookings.value.filter(booking => {
    const bookingMonth = new Date(booking.date).getMonth();
    return bookingMonth === currentMonth;
  }).length;
});

const pointsToNextLevel = computed(() => {
  const currentPoints = loyaltyPoints.value;
  const nextLevelThreshold = Math.ceil(currentPoints / 1000) * 1000;
  return nextLevelThreshold - currentPoints;
});

const progressToNextLevel = computed(() => {
  const currentPoints = loyaltyPoints.value;
  const currentLevelBase = Math.floor(currentPoints / 1000) * 1000;
  const nextLevelThreshold = currentLevelBase + 1000;
  const progressInLevel = currentPoints - currentLevelBase;
  return Math.round((progressInLevel / 1000) * 100);
});

// Generate a random member date in the past 2 years
const memberSince = computed(() => {
  const now = new Date();
  const randomMonths = Math.floor(Math.random() * 24); // 0-24 months ago
  const memberDate = new Date(now.setMonth(now.getMonth() - randomMonths));
  return memberDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
});

// Format date for display
function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    weekday: 'short', 
    month: 'short', 
    day: 'numeric'
  });
}

// Format booking date
function formatBookingDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { 
    month: 'short', 
    day: 'numeric',
    year: 'numeric'
  });
}

definePageMeta({
  layout: 'default'
});
</script>

<style scoped>
/* Enhanced animations */
@keyframes float {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-8px);
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-4px);
  }
}

@keyframes float-reverse {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(4px);
  }
}

@keyframes gradient-x {
  0%, 100% {
    transform: translateX(-100%);
  }
  50% {
    transform: translateX(100%);
  }
}

.animate-gradient-x {
  animation: gradient-x 3s ease infinite;
}
</style>