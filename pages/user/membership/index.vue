<template>
    <div>
        <Header />
        
               <section id="membership" class="pt-36 pb-30 bg-slate-100 mb-24">
      <div class="container">
        <div class="w-full px-24">
          <div class="max-w-xl mx-auto text-center">
            <h1 class="font-bold text-4xl mb-4">MEMBERSHIPS LIST</h1>
          </div>
          <div class="flex flex-wrap ml-20">
            <div class="w-full  px-8 lg:w-1/2 xl:w-1/3" v-for="membership in memberships.data" :key="membership.id">
              <div class="rounded-xl bg-white shadow-lg overflow-hidden mb-10">
                  <!-- <img
                :src="$axios.defaults.baseURL + '/' + newsletter.image"
                alt=""
                class="w-full"
              /> -->
                  <div class="py-8 ">
                    <h3><a href="" class="ml-3 block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"> {{membership.type}}</a></h3>
                    <p class="ml-3 font-light text-base text-secondary mb-4">Rp. {{membership.price}}</p>
                      <p class="font-light">{{membership.description}}</p>
                      <a href="https://simulator.sandbox.midtrans.com/bni/va/index">
                    <button class="ml-3 bg-white hover:bg-gray-100 text-green-800 font-semibold py-2 px-4 border border-green-400 rounded shadow">
  Pay
</button>
                    </a>
                  </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </section>
    <Footer/>
    </div>
    
</template>
<script>
export default{
  async asyncData({ $axios }) {
    const memberships = await $axios.$get('/api/v1/membership/list')
    return { memberships }
  },
}
</script>