<template>
  <footer class="bg-dark-500 border-t border-gray-800 py-8 mt-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center space-x-2 mb-4">
            <span class="text-primary-500 text-xl font-bold">Cinema</span>
            <span class="text-accent-500 font-bold">Box</span>
          </div>
          <p class="text-gray-400 text-sm">
            Your premier destination for movie ticket booking with the best experience and customer service.
          </p>
        </div>
        
        <div>
          <h3 class="text-white font-medium mb-4">Quick Links</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><NuxtLink to="/" class="hover:text-white transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/movies" class="hover:text-white transition-colors">Movies</NuxtLink></li>
            <li><NuxtLink to="/profile" class="hover:text-white transition-colors">My Profile</NuxtLink></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-white font-medium mb-4">Help</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li><a href="#" class="hover:text-white transition-colors">FAQs</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Terms of Service</a></li>
            <li><a href="#" class="hover:text-white transition-colors">Privacy Policy</a></li>
          </ul>
        </div>
        
        <div>
          <h3 class="text-white font-medium mb-4">Contact Us</h3>
          <ul class="space-y-2 text-sm text-gray-400">
            <li class="flex items-center">
              <span class="mr-2">📧</span>
              <a href="mailto:info@cinemabox.com" class="hover:text-white transition-colors">info@cinemabox.com</a>
            </li>
            <li class="flex items-center">
              <span class="mr-2">📱</span>
              <a href="tel:+1234567890" class="hover:text-white transition-colors">+1 (234) 567-890</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div class="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
        <p>© {{ new Date().getFullYear() }} CinemaBox. All rights reserved. This is a demo application.</p>
      </div>
    </div>
  </footer>
</template>