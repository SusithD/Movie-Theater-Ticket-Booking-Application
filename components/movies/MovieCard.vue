<template>
  <div class="movie-card-container group perspective-1000">
    <div class="movie-card relative h-full overflow-hidden bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-slate-900/95 backdrop-blur-xl rounded-3xl shadow-2xl transition-all duration-700 ease-out hover:shadow-slate-500/20 hover:shadow-2xl transform-gpu hover:scale-[1.02] hover:-translate-y-3 border border-slate-700/50 hover:border-slate-600/70">
      
      <!-- Animated Background Mesh -->
      <div class="absolute inset-0 opacity-30 bg-gradient-to-br from-violet-600/10 via-blue-600/10 to-cyan-500/10 animate-pulse-slow"></div>
      <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(120,119,198,0.1),transparent_50%)] group-hover:opacity-80 transition-opacity duration-700"></div>
      
      <!-- Floating Particles Effect -->
      <div class="absolute inset-0 overflow-hidden">
        <div class="particle particle-1 absolute w-1 h-1 bg-blue-400/40 rounded-full animate-float-1"></div>
        <div class="particle particle-2 absolute w-0.5 h-0.5 bg-violet-400/40 rounded-full animate-float-2"></div>
        <div class="particle particle-3 absolute w-1.5 h-1.5 bg-cyan-400/30 rounded-full animate-float-3"></div>
      </div>

      <!-- Image Container with Advanced Effects -->
      <div class="relative h-56 md:h-72 overflow-hidden rounded-t-3xl">
        <img 
          :src="movie.thumbnail" 
          :alt="movie.title" 
          class="w-full h-full object-cover transition-all duration-1000 ease-out group-hover:scale-110 group-hover:rotate-1 filter brightness-90 group-hover:brightness-110 contrast-110 group-hover:contrast-125 saturate-110 group-hover:saturate-150" 
          loading="lazy" 
        />
        
        <!-- Dynamic Gradient Overlays -->
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-90 group-hover:opacity-75 transition-opacity duration-500"></div>
        <div class="absolute inset-0 bg-gradient-to-br from-violet-600/0 via-blue-600/0 to-cyan-500/0 group-hover:from-violet-600/20 group-hover:via-blue-600/10 group-hover:to-cyan-500/20 transition-all duration-700"></div>
        <div class="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-slate-900/20 group-hover:to-slate-900/40 transition-all duration-500"></div>
        
        <!-- Glassmorphism Rating Badge -->
        <div class="absolute top-4 right-4 group/rating">
          <div class="relative bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl px-4 py-2 shadow-lg transform transition-all duration-300 group-hover/rating:scale-110 group-hover/rating:bg-white/15">
            <div class="flex items-center gap-2">
              <div class="relative">
                <svg class="w-4 h-4 text-yellow-400 drop-shadow-sm animate-pulse-subtle" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
                <div class="absolute inset-0 bg-yellow-400/30 rounded-full blur-sm animate-glow"></div>
              </div>
              <span class="text-white font-bold text-sm tracking-wide">{{ movie.rating.toFixed(1) }}</span>
            </div>
          </div>
        </div>

        <!-- Interactive Play Button -->
        <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
          <div class="play-button relative">
            <div class="w-20 h-20 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center border border-white/20 shadow-2xl transition-all duration-300 hover:scale-110 hover:bg-white/15 cursor-pointer group/play">
              <svg class="w-8 h-8 text-white ml-1 transition-transform duration-300 group-hover/play:scale-110" fill="currentColor" viewBox="0 0 20 20">
                <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z"/>
              </svg>
            </div>
            <!-- Ripple Effect -->
            <div class="absolute inset-0 rounded-full border border-white/30 animate-ping opacity-20"></div>
            <div class="absolute inset-0 rounded-full border border-white/20 animate-ping opacity-10" style="animation-delay: 0.5s;"></div>
          </div>
        </div>

        <!-- Corner Accent Lines -->
        <div class="absolute top-0 right-0 w-16 h-16">
          <div class="absolute top-4 right-4 w-8 h-0.5 bg-gradient-to-r from-transparent to-white/30 transform rotate-45 origin-right"></div>
          <div class="absolute top-6 right-4 w-6 h-0.5 bg-gradient-to-r from-transparent to-white/20 transform rotate-45 origin-right"></div>
        </div>
      </div>
      
      <!-- Content Section with Glass Effect -->
      <div class="relative flex-grow p-6 backdrop-blur-sm">
        <!-- Floating Content Background -->
        <div class="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
        
        <div class="relative z-10 space-y-4">
          <!-- Title with Advanced Typography -->
          <div class="space-y-2">
            <h3 class="text-xl font-bold leading-tight">
              <span class="bg-gradient-to-r from-white via-slate-100 to-slate-300 group-hover:from-violet-200 group-hover:via-blue-200 group-hover:to-cyan-200 bg-clip-text text-transparent transition-all duration-500 hover:scale-[1.02] transform-gpu inline-block">
                {{ movie.title }}
              </span>
            </h3>
            
            <!-- Animated Underline -->
            <div class="w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 group-hover:w-full transition-all duration-700 ease-out"></div>
          </div>
          
          <!-- Movie Meta Info -->
          <div class="flex items-center space-x-3 text-sm">
            <div class="flex items-center space-x-2">
              <div class="px-3 py-1.5 bg-slate-800/60 backdrop-blur-sm rounded-full border border-slate-600/50 text-slate-300 font-medium transition-all duration-300 hover:bg-slate-700/60 hover:border-slate-500/50 hover:text-white">
                {{ movie.releaseYear }}
              </div>
              <div class="w-1.5 h-1.5 bg-gradient-to-r from-violet-500 to-cyan-500 rounded-full animate-pulse-subtle"></div>
              <div class="px-3 py-1.5 bg-slate-800/60 backdrop-blur-sm rounded-full border border-slate-600/50 text-slate-300 font-medium transition-all duration-300 hover:bg-slate-700/60 hover:border-slate-500/50 hover:text-white">
                {{ movie.duration }}
              </div>
            </div>
          </div>
          
          <!-- Enhanced Genre Tags -->
          <div class="flex flex-wrap gap-2">
            <span 
              v-for="(genre, index) in movie.genre" 
              :key="genre" 
              :style="{ 
                animationDelay: `${index * 150}ms`,
                transform: `translateY(${index * 2}px)`
              }"
              class="genre-tag px-3 py-1.5 bg-gradient-to-r from-slate-800/70 to-slate-700/70 backdrop-blur-sm text-slate-300 rounded-xl text-xs font-semibold border border-slate-600/30 transition-all duration-300 hover:border-violet-500/50 hover:text-violet-300 hover:shadow-lg hover:shadow-violet-500/20 transform hover:scale-105 hover:-translate-y-1 cursor-pointer animate-slide-up"
            >
              {{ genre }}
            </span>
          </div>
          
          <!-- Description with Fade Effect -->
          <div class="relative">
            <p class="text-sm text-slate-400 leading-relaxed line-clamp-3 group-hover:text-slate-300 transition-colors duration-500">
              {{ movie.description }}
            </p>
            <div class="absolute bottom-0 right-0 w-8 h-6 bg-gradient-to-l from-slate-900 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500"></div>
          </div>
        </div>
        
        <!-- CTA Button with Magnetic Effect -->
        <div class="relative z-10 mt-6">
          <NuxtLink 
            :to="`/movies/${movie.id}`" 
            class="cta-button group/cta relative block w-full overflow-hidden rounded-2xl transition-all duration-500 hover:shadow-2xl hover:shadow-violet-500/25 transform hover:scale-[1.02]"
          >
            <!-- Button Background -->
            <div class="absolute inset-0 bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-600 opacity-90 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
            <div class="absolute inset-0 bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-500 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-300"></div>
            
            <!-- Button Content -->
            <div class="relative px-6 py-4 backdrop-blur-sm">
              <span class="flex items-center justify-center gap-3 text-white font-bold text-base tracking-wide">
                <span class="transition-transform duration-300 group-hover/cta:scale-105">View Details</span>
                <svg class="w-5 h-5 transition-all duration-300 group-hover/cta:translate-x-2 group-hover/cta:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M17 8l4 4m0 0l-4 4m4-4H3"/>
                </svg>
              </span>
            </div>
            
            <!-- Shine Effect -->
            <div class="absolute inset-0 -translate-x-full group-hover/cta:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out"></div>
          </NuxtLink>
        </div>
      </div>

      <!-- Advanced Border Effects -->
      <div class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
        <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-600/20 via-blue-600/20 to-cyan-500/20 animate-gradient-shift"></div>
      </div>
      
      <!-- Glow Effect -->
      <div class="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-60 transition-opacity duration-700 pointer-events-none -z-10">
        <div class="absolute inset-0 rounded-3xl bg-gradient-to-r from-violet-600/30 via-blue-600/30 to-cyan-500/30 blur-xl scale-105"></div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  movie: {
    type: Object,
    required: true
  }
});
</script>

<style scoped>
.perspective-1000 {
  perspective: 1000px;
}

.movie-card {
  transform-style: preserve-3d;
}

/* Particle Positioning */
.particle-1 {
  top: 20%;
  right: 15%;
}

.particle-2 {
  top: 60%;
  left: 10%;
}

.particle-3 {
  top: 40%;
  right: 8%;
}

/* Advanced Animations */
@keyframes float-1 {
  0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
  25% { transform: translateY(-10px) translateX(5px) rotate(90deg); }
  50% { transform: translateY(-5px) translateX(-3px) rotate(180deg); }
  75% { transform: translateY(-12px) translateX(2px) rotate(270deg); }
}

@keyframes float-2 {
  0%, 100% { transform: translateY(0px) translateX(0px) scale(1); }
  33% { transform: translateY(-8px) translateX(-4px) scale(1.2); }
  66% { transform: translateY(-3px) translateX(6px) scale(0.8); }
}

@keyframes float-3 {
  0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg) scale(1); }
  20% { transform: translateY(-6px) translateX(3px) rotate(72deg) scale(1.1); }
  40% { transform: translateY(-12px) translateX(-2px) rotate(144deg) scale(0.9); }
  60% { transform: translateY(-8px) translateX(4px) rotate(216deg) scale(1.2); }
  80% { transform: translateY(-4px) translateX(-3px) rotate(288deg) scale(0.8); }
}

@keyframes gradient-shift {
  0%, 100% { 
    background: linear-gradient(45deg, rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2), rgba(6, 182, 212, 0.2));
    background-size: 300% 300%;
    background-position: 0% 50%;
  }
  25% {
    background-position: 100% 50%;
  }
  50% { 
    background: linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(139, 92, 246, 0.2), rgba(59, 130, 246, 0.2));
    background-position: 50% 100%;
  }
  75% {
    background-position: 0% 0%;
  }
}

@keyframes pulse-slow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.5; transform: scale(1.02); }
}

@keyframes pulse-subtle {
  0%, 100% { opacity: 1; transform: scale(1); }
  50% { opacity: 0.8; transform: scale(1.05); }
}

@keyframes glow {
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 0.6; transform: scale(1.2); }
}

@keyframes slide-up {
  from {
    opacity: 0;
    transform: translateY(20px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Animation Classes */
.animate-float-1 { animation: float-1 8s ease-in-out infinite; }
.animate-float-2 { animation: float-2 6s ease-in-out infinite; }
.animate-float-3 { animation: float-3 10s ease-in-out infinite; }
.animate-gradient-shift { animation: gradient-shift 4s ease-in-out infinite; }
.animate-pulse-slow { animation: pulse-slow 4s ease-in-out infinite; }
.animate-pulse-subtle { animation: pulse-subtle 2s ease-in-out infinite; }
.animate-glow { animation: glow 2s ease-in-out infinite; }
.animate-slide-up { 
  animation: slide-up 0.8s ease-out forwards;
  opacity: 0;
}

/* Enhanced Text Utilities */
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* Hover Effects */
.genre-tag:hover {
  animation-play-state: paused;
}

.cta-button::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: 1rem;
  padding: 1px;
  background: linear-gradient(45deg, rgba(139, 92, 246, 0.5), rgba(59, 130, 246, 0.5), rgba(6, 182, 212, 0.5));
  mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  mask-composite: xor;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.cta-button:hover::before {
  opacity: 1;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  .movie-card {
    transform: none;
  }
  
  .particle {
    display: none;
  }
  
  .movie-card:hover {
    transform: translateY(-8px) scale(1.01);
  }
}

/* Reduced Motion Support */
@media (prefers-reduced-motion: reduce) {
  .movie-card,
  .genre-tag,
  .cta-button,
  .animate-float-1,
  .animate-float-2,
  .animate-float-3,
  .animate-gradient-shift,
  .animate-pulse-slow,
  .animate-pulse-subtle,
  .animate-glow {
    animation: none;
    transition-duration: 0.2s;
  }
  
  .particle {
    display: none;
  }
}
</style>