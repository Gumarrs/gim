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
                @click="$router.push({ path: '/login' })"
                class="block bg-teal-300 border border-white   border hover:bg-transparent hover:bg-opacity-25 text-white  text-center px-8 py-2 text-xl rounded-full "
              >
                Join Membership
              </button>
            </div>
          </div>
        </div>
      </section>
       <Membership/>
<Recomendedd />
<Content />
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
                    <nuxt-link :to="`newsletter/${newsletter.id}`">
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
export default {
  auth : false,
   async asyncData({ $axios }) {
    const newsletters = await $axios.$get('/api/v1/newsletter/list')
    return { newsletters }
  },
  
}
</script>