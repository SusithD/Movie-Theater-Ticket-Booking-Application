<template>
  <footer class="relative bg-gradient-to-b from-dark-300/50 to-dark-500 border-t border-white/10 py-16 mt-20 overflow-hidden">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <!-- Floating geometric shapes -->
      <div class="absolute top-10 left-1/4 w-24 h-24 bg-gradient-to-br from-primary-500/5 to-accent-500/5 rounded-full blur-xl animate-float-slow"></div>
      <div class="absolute bottom-10 right-1/4 w-32 h-32 bg-gradient-to-br from-accent-500/5 to-secondary-500/5 rounded-full blur-xl animate-float-reverse"></div>
      <div class="absolute top-1/2 right-10 w-20 h-20 bg-gradient-to-br from-secondary-500/5 to-primary-500/5 rounded-full blur-lg animate-float"></div>
      
      <!-- Floating cinema elements -->
      <div class="absolute top-8 right-20 opacity-3">
        <svg class="w-12 h-12 text-primary-400 animate-spin-slow" fill="currentColor" viewBox="0 0 24 24">
          <path d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/>
        </svg>
      </div>
      <div class="absolute bottom-12 left-16 opacity-3">
        <svg class="w-8 h-8 text-accent-400 animate-float" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      </div>
    </div>

    <!-- Glass overlay effect -->
    <div class="absolute inset-0 bg-gradient-to-t from-dark-500/80 via-transparent to-transparent backdrop-blur-sm"></div>
    
    <div class="relative z-10 container mx-auto px-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
        <!-- Brand Section -->
        <div class="md:col-span-1 lg:col-span-1">
          <div class="group relative">
            <!-- Glowing background effect -->
            <div class="absolute -inset-2 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-secondary-500/20 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative bg-gradient-to-br from-dark-200/30 to-dark-300/30 backdrop-blur-md border border-white/10 rounded-2xl p-6 transition-all duration-500 group-hover:scale-105">
              <!-- Logo -->
              <div class="flex items-center space-x-3 mb-6">
                <div class="relative">
                  <div class="w-12 h-12 bg-gradient-to-br from-primary-500/20 to-accent-500/20 backdrop-blur-md border border-primary-500/30 rounded-xl flex items-center justify-center">
                    <svg class="w-6 h-6 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z"/>
                    </svg>
                  </div>
                  <div class="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-accent-500 to-secondary-500 rounded-full opacity-60 animate-float"></div>
                </div>
                <div>
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 text-2xl font-black">Cinema</span>
                  <span class="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-secondary-400 text-2xl font-black">Box</span>
                </div>
              </div>
              
              <p class="text-gray-300 text-sm leading-relaxed">
                Your premier destination for 
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 font-semibold">cinematic experiences</span> 
                with seamless booking and exceptional service.
              </p>
              
              <!-- Social Media Icons -->
              <div class="flex gap-3 mt-6">
                <a href="#" class="group/social w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg flex items-center justify-center hover:bg-primary-500/20 hover:border-primary-500/30 transition-all duration-300">
                  <svg class="w-5 h-5 text-gray-400 group-hover/social:text-primary-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="#" class="group/social w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg flex items-center justify-center hover:bg-accent-500/20 hover:border-accent-500/30 transition-all duration-300">
                  <svg class="w-5 h-5 text-gray-400 group-hover/social:text-accent-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </a>
                <a href="#" class="group/social w-10 h-10 bg-white/5 backdrop-blur-md border border-white/10 rounded-lg flex items-center justify-center hover:bg-secondary-500/20 hover:border-secondary-500/30 transition-all duration-300">
                  <svg class="w-5 h-5 text-gray-400 group-hover/social:text-secondary-400 transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.219-.359-1.219c0-1.142.662-1.995 1.482-1.995.699 0 1.037.524 1.037 1.155 0 .703-.449 1.753-.68 2.725-.194.819.411 1.487 1.219 1.487 1.463 0 2.587-1.543 2.587-3.771 0-1.972-1.417-3.353-3.44-3.353-2.344 0-3.72 1.759-3.72 3.575 0 .708.273 1.466.614 1.878.067.082.077.154.057.237-.062.26-.199.798-.226.91-.035.146-.116.177-.268.107-1.001-.465-1.624-1.926-1.624-3.1 0-2.523 1.834-4.84 5.287-4.84 2.781 0 4.942 1.981 4.942 4.628 0 2.757-1.739 4.976-4.151 4.976-.811 0-1.573-.421-1.834-.924l-.498 1.902c-.181.695-.669 1.566-.995 2.097A12.013 12.013 0 0 0 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 text-lg font-bold mb-6 relative">
            Quick Links
            <div class="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full"></div>
          </h3>
          <ul class="space-y-4">
            <li><NuxtLink to="/" class="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300">
              <div class="w-2 h-2 bg-primary-500/50 rounded-full group-hover:bg-primary-500 group-hover:scale-125 transition-all duration-300"></div>
              <span class="group-hover:translate-x-1 transition-transform duration-300">Home</span>
            </NuxtLink></li>
            <li><NuxtLink to="/movies" class="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300">
              <div class="w-2 h-2 bg-accent-500/50 rounded-full group-hover:bg-accent-500 group-hover:scale-125 transition-all duration-300"></div>
              <span class="group-hover:translate-x-1 transition-transform duration-300">Movies</span>
            </NuxtLink></li>
            <li><NuxtLink to="/profile" class="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300">
              <div class="w-2 h-2 bg-secondary-500/50 rounded-full group-hover:bg-secondary-500 group-hover:scale-125 transition-all duration-300"></div>
              <span class="group-hover:translate-x-1 transition-transform duration-300">My Profile</span>
            </NuxtLink></li>
          </ul>
        </div>
        
        <!-- Help Section -->
        <div>
          <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 text-lg font-bold mb-6 relative">
            Support
            <div class="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-accent-500 to-secondary-500 rounded-full"></div>
          </h3>
          <ul class="space-y-4">
            <li><a href="#" class="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300">
              <div class="w-2 h-2 bg-primary-500/50 rounded-full group-hover:bg-primary-500 group-hover:scale-125 transition-all duration-300"></div>
              <span class="group-hover:translate-x-1 transition-transform duration-300">FAQs</span>
            </a></li>
            <li><a href="#" class="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300">
              <div class="w-2 h-2 bg-accent-500/50 rounded-full group-hover:bg-accent-500 group-hover:scale-125 transition-all duration-300"></div>
              <span class="group-hover:translate-x-1 transition-transform duration-300">Terms of Service</span>
            </a></li>
            <li><a href="#" class="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300">
              <div class="w-2 h-2 bg-secondary-500/50 rounded-full group-hover:bg-secondary-500 group-hover:scale-125 transition-all duration-300"></div>
              <span class="group-hover:translate-x-1 transition-transform duration-300">Privacy Policy</span>
            </a></li>
            <li><a href="#" class="group flex items-center gap-3 text-gray-400 hover:text-white transition-all duration-300">
              <div class="w-2 h-2 bg-primary-500/50 rounded-full group-hover:bg-primary-500 group-hover:scale-125 transition-all duration-300"></div>
              <span class="group-hover:translate-x-1 transition-transform duration-300">Contact Support</span>
            </a></li>
          </ul>
        </div>
        
        <!-- Contact Section -->
        <div>
          <h3 class="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-300 text-lg font-bold mb-6 relative">
            Get in Touch
            <div class="absolute -bottom-2 left-0 w-12 h-0.5 bg-gradient-to-r from-secondary-500 to-primary-500 rounded-full"></div>
          </h3>
          <div class="space-y-4">
            <div class="group">
              <a href="mailto:info@cinemabox.com" class="flex items-center gap-4 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-primary-500/10 hover:border-primary-500/20 transition-all duration-300">
                <div class="w-10 h-10 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-white text-sm font-medium">Email Us</p>
                  <p class="text-gray-400 text-xs">info@cinemabox.com</p>
                </div>
              </a>
            </div>
            
            <div class="group">
              <a href="tel:+1234567890" class="flex items-center gap-4 p-3 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl hover:bg-accent-500/10 hover:border-accent-500/20 transition-all duration-300">
                <div class="w-10 h-10 bg-gradient-to-br from-accent-500/20 to-secondary-500/20 rounded-lg flex items-center justify-center">
                  <svg class="w-5 h-5 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                  </svg>
                </div>
                <div>
                  <p class="text-white text-sm font-medium">Call Us</p>
                  <p class="text-gray-400 text-xs">+1 (234) 567-890</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Bottom Section -->
      <div class="relative mt-16 pt-8">
        <!-- Gradient divider -->
        <div class="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
        
        <div class="flex flex-col md:flex-row justify-between items-center gap-6">
          <div class="text-center md:text-left">
            <p class="text-gray-400 text-sm">
              © {{ new Date().getFullYear() }} 
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-accent-400 font-semibold">CinemaBox</span>. 
              All rights reserved.
            </p>
            <p class="text-gray-500 text-xs mt-1">
              Crafted with ❤️ for movie enthusiasts worldwide
            </p>
          </div>
          
          <!-- Decorative elements -->
          <div class="flex items-center gap-3">
            <div class="flex space-x-2">
              <div class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"></div>
              <div class="w-2 h-2 bg-accent-500 rounded-full animate-pulse" style="animation-delay: 0.3s;"></div>
              <div class="w-2 h-2 bg-secondary-500 rounded-full animate-pulse" style="animation-delay: 0.6s;"></div>
            </div>
            <span class="text-gray-500 text-xs">Demo Application</span>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>