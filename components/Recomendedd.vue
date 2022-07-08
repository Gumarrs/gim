<template>
        <section id="recomended" class="pb-30 bg-slate-100 mb-24 pl-24">
      <div class="container">
       <div class="w-full p-auto">
          <div class="max-w-xl mx-auto text-center">
            <h1 class="font-bold text-4xl mb-4 mt-24">Our Classes</h1>
            <p>Enjoy some of our services, and do your workout with streaming classes or live. </p>
          </div>
        </div>
          <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
    <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500" v-for="i in 3" :key="i">
      <div class="relative">
        <img class="w-full rounded-xl" src="/image11.png" />
        <!-- <p class="absolute top-0 bg-green-400 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">Online Class</p> -->
      </div>
      <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">Boxing</h1>
      <div class="my-4">
        <div class="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <p> 16:40</p>
        </div>
        <nuxt-link
        :to="'/kelas/' + i">
        <button class="mt-24 text-xl w-full text-white bg-green-button py-2 rounded-xl shadow-lg">Book</button>
        </nuxt-link>

      </div>
    </div>
  </div>
      </div>
    </section>
</template>