<template>
<div>
    <Navbar />
       <img class="image_kelas" src="/image11.png"/>
       <div class="container flex flex-wrap pt-24 pb-10 bg-slate-100">
            <div class="mx-28">
                
                <h1 class="font-bold text-2xl mb-4 ">{{member.data.type}}</h1>
                <h2 class="font-bold text-3xl mb-4 text-teal-300 ">Rp. {{member.data.price}}</h2>
                <p class="font-bold text-2xl ">Description</p><br>
                <p class="font-medium  mb-4">{{member.data.description}}</p>
            </div>
       </div>
       <nuxt-link
           :to="`/user/transaksi/${member.data.id}`">
                          <button

                class="block bg-teal-300 border border-white   border text-center px-8 py-2 ml-24 mb-24 text-xl rounded-full "
              >
                Join Membership
              </button>
       </nuxt-link>
       <Footer/>

</div>
</template>
<script>
export default {
    auth: false,
    async asyncData({ $axios, params }) {
    const member = await $axios.$get('/api/v1/membership/' + params.id)
    return { member }
  },
}
</script>