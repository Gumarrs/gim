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
   <section id="membership"  class="pt-36 pb-30 bg-slate-100 mb-24">
        <div class="container">

          <div class="flex flex-row ">
              <div class="w-1/2"> <img src="/image2.png" alt=""></div>
              <div class="w-1/4 pt-16" style="background-color:#357E7C;" v-for="membership in memberships.data"
          :key="membership.id">
              <div class="text-center text-white">
 <h2 class=" mb-2">{{membership.type}}</h2>
               <h2 class=" text-2xl mb-6">Rp. {{membership.price}}</h2>
              <p class="font-light">{{membership.description}}</p>
              <nuxt-link
           :to="`user/membership/${membership.id}`">
<button  class="border-soli bg-transparent border border-white font-light py-1 px-5 mt-1">READ MORE ></button> </nuxt-link>
              </div>  
               </div>
          </div>
        </div>
      </section>
        <section id="recomended" class="pb-30 bg-slate-100 mb-24 pl-24">
      <div class="container">
       <div class="w-full p-auto">
          <div class="max-w-xl mx-auto text-center">
            <h1 class="font-bold text-4xl mb-4 mt-24">Our Classes</h1>
            <p>Enjoy some of our services, and do your workout with streaming classes or live. </p>
          </div>
        </div>
          <div class="md:px-4 md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 space-y-4 md:space-y-0">
    <div class="max-w-sm bg-white px-6 pt-6 pb-2 rounded-xl shadow-lg transform hover:scale-105 transition duration-500" v-for="kelas in kelass.data "
          :key="kelas.id">
      <div class="relative">
         <img class="w-full rounded-xl" src="/image11.png" />
         <!-- <img
                :src="$axios.defaults.baseURL + '/' + kelas.image"
                alt=""
                class="rounded-20 w-full"
              /> -->
        <!-- <p class="absolute top-0 bg-green-400 text-gray-800 font-semibold py-1 px-3 rounded-br-lg rounded-tl-lg">Online Class</p> -->
      </div>
  
      <div class="my-4">
        <div class="flex space-x-1 items-center">
           <p class="mr-52">{{kelas.clastype}}</p>
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span>
         
          <p> {{kelas.clock}}</p>
        </div>
            <h1 class="mt-4 text-gray-800 text-2xl font-bold cursor-pointer">{{kelas.classname}}</h1>
        <nuxt-link
           :to="`user/kelas/${kelas.id}`">
        <button class="mt-24 text-xl w-full text-white bg-green-button py-4 px-10 rounded-xl shadow-lg">Book</button>
        </nuxt-link>

      </div>
    </div>
  </div>
      </div>
    </section>
        <section id="content" class="pt-36 pb-30">
      <div class="container">
        <div class="flex flex-wrap pt-36 mx-10">
          <div class="px-20 mb-10 w-1/2">
            <iframe width="600" height="315" src="https://www.youtube.com/embed/Us9dkATkwlQ" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div class="w-1/2 px-10">
            <h1 class="font-bold text-4xl mb-4 w-1/2">WORK OUT FROM HOME</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ipsum penatibus congue ipsum nisl. In massa elit amet sed morbi. Leo, cras adipiscing cursus netus eu pharetra. Aliquam, est, ultrices odio posuere elit.</p>
            <br>
            <nuxt-link to="/user/video">
            <button class="bg-green-button block text-white font-semibold px-16 py-3 text-xl">See All Video</button>
            </nuxt-link>
          </div>
          
        </div>
        <div class="flex flex-wrap pt-36 mx-10">
          <div class="px-20 mb-10 w-1/6">
          <iframe width="200px" src="https://www.youtube.com/embed/UDJx2WfuF6w" title="YouTube video player" frameborder="0" allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
            <div class="px-20 w-1/6">
           <iframe width="200px" src="https://www.youtube.com/embed/Rit0m5QqKWg" title="YouTube video player" frameborder="0" allow="accelerometer;clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
            <div class="px-20 w-1/6">
           <iframe width="200px"  src="https://www.youtube.com/embed/OIkh4qPJE6A" title="YouTube video player" frameborder="0" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
        </div>
      </div>
    </section>
       <section id="news" class="pt-36 pb-30 bg-slate-100 mb-24">
      <div class="container">
        <div class="w-full px-24">
          <div class="max-w-xl mx-auto text-center">
            <h1 class="font-bold text-4xl mb-4">Health Tips For You</h1>
            <p class="mb-8">We have some interesting tips that might suit your needs. Here are some interesting articles that might be of use to you.</p>
          </div>
          <div class="flex flex-wrap ml-20">
            <div class="w-full  px-8 lg:w-1/2 xl:w-1/3" v-for="newsletter in newsletters.data" :key="newsletter.id">
              <div class="rounded-xl bg-white shadow-lg overflow-hidden mb-10">
                  <img
                :src="$axios.defaults.baseURL + '/' + newsletter.image"
                alt=""
                class="w-full"
              />
                  <div class="py-8 ">
                    <h3><a href="" class="ml-3 block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"> {{newsletter.title}}</a></h3>
                    <p class="ml-3 font-light text-base text-secondary mb-4">{{newsletter.content}}</p>
                    <nuxt-link :to="`user/newsletter/${newsletter.id}`">
                    <button class="ml-3 bg-white hover:bg-gray-100 text-green-800 font-semibold py-2 px-4 border border-green-400 rounded shadow">
  Read More
</button>
                    </nuxt-link>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Footer />
      </div>
</template>
<script>
export default{
  async asyncData({ $axios }) {
    const kelass = await $axios.$get('/api/v1/class/list',{
      params:{
        limit : 3,
      },
    })
    const newsletters = await $axios.$get('/api/v1/newsletter/list')
    const memberships = await $axios.$get('/api/v1/membership/list')
    return { kelass,newsletters,memberships }
  },
  computed: {
     UserLogin(){
       return this.$auth.loggedIn
      }
  }
}
</script>