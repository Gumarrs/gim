<template>
      <div class="landing-page">
      <section class="landing-hero pt-5 ">
        <div class="header__bg "></div>
        <div class="container mx-auto relative">
          <Navbar />
                    <div class="flex items-center pt-10 px-5 md:px-0 mr-12 ml-24">
            <div class="w-1/2">
              <h1 class="text-7xl text-white mt-40 mb-5">
                NEVER GIVE UP <br />
                THE BEST FITNESS <br />
                FOR YOU.
              </h1>
              <p class="text-white text-xl font-thin mb-7">
                Fit healthy body is the best and eternal fashion. <br />
                Join the gym with wide variety of gear, <br />
                effective programs, flexible schedule and team <br />
                of sport professionals knowing the ways to <br />
                success.
              </p>
              <button
                @click="$router.push({ path: '/' })"
                class="block bg-teal-300 border border-white   border hover:bg-transparent hover:bg-opacity-25 text-white  text-center px-8 py-2 text-xl rounded-full "
              >
                Join Membership
              </button>
            </div>
          </div>
        </div>
      </section>
<Membership />
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
    <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500" v-for="kelas in kelass.data"
          :key="kelas.id">
      <div class="relative">
         <img
                :src="$axios.defaults.baseURL + '/' + kelas.image"
                alt=""
                class="rounded-20 w-full"
              />
        <!-- <p class="absolute top-0 bg-green-400 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">Online Class</p> -->
      </div>
      <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{{kelas.classname}}</h1>
      <div class="my-4">
        <div class="flex space-x-1 items-center">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
          <p> {{kelas.clock}}</p>
        </div>
        <button
           @click="
                $router.push({
                  name: 'kelas-id',
                  params: { id: kelas.id },
                })
              ">
        <button class="mt-24 text-xl w-full text-white bg-green-button py-4 px-10 rounded-xl shadow-lg">Book</button>
        </button>

      </div>
    </div>
  </div>
      </div>
    </section>
</template>
<Content />
<Newsletter />
    <Footer />
      </div>
</template>
<script>
export default {
  auth : false,
   async asyncData({ $axios }) {
    const kelass = await $axios.$get('/api/v1/class/list')
    // const memberships = await $axios.$get('/api/v1/memberships/list')
    return { kelass }
  },
  
}
</script>