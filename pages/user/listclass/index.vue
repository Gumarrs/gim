<template>

        <div>
                <Navbar />
        <div  class="mt-24 px-10">
            <h1 class="text-3xl py-6">Offline Class</h1>
            <p>Enjoy tons of free video-on-demand workouts from GYMTHIRTY. Find videos that match your preferences and goals!</p>

        </div>
        <div  class="grid grid-cols-3 gap-4 mt-12 px-10 mb-10">
            

          <div
           v-for="offline in offlineclass.data" :key="offline.id"
            class="card-project w-full p-5 "
          >
                      <div class="item">
              <figure class="item-image">
                
                <img width="560" height="315" src="/image11.png" />
              </figure>
             
            </div>
                 <div class="my-4">
        <div class="flex space-x-1 items-center">
           <p class="mr-52">{{offline.clastype}}</p>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
         
          <p> {{offline.clock}}</p>
        </div>
           <div class="item-meta">
                <h4 class="text-2xl font-medium text-gray-900 mt-1 mb-4">
               {{offline.classname}}
                </h4>
        <nuxt-link
           :to="`kelas/${offline.id}`" class="mt-24 text-xl w-full text-white bg-green-button py-2 px-10 rounded-xl shadow-lg">Book</nuxt-link>
              </div>

          </div>
        </div>
        </div>
        <Footer />
    </div>
</template>
<script>
export default{
  async asyncData({ $axios }) {
    const offlineclass = await $axios.$get('/api/v1/class/offline/list')
    return {offlineclass }
  },
}
</script>