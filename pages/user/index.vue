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
                class="block bg-transparent border border-green-400   border hover:bg-white hover:bg-opacity-25 text-green-300 font-light text-center px-4 py-2 text-xl "
              >
                Join Membership
              </button>
            </div>
          </div>
        </div>
      </section>
<Membership />
<Recomendedd />
<Content />
<Newsletter />
    <Footer />
      </div>
</template>
<script>
export default{
  computed: {
     UuerLogin(){
       return this.$auth.loggedIn
      }
  }
}
</script>