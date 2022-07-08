<template>
        <section id="news" class="pt-36 pb-30 bg-slate-100 mb-24">
      <div class="container">
        <div class="w-full px-24">
          <div class="max-w-xl mx-auto text-center">
            <h1 class="font-bold text-4xl mb-4">Health Tips For You</h1>
            <p class="mb-8">We have some interesting tips that might suit your needs. Here are some interesting articles that might be of use to you.</p>
          </div>
          <div class="flex flex-wrap ml-20">
            <div class="w-full  px-8 lg:w-1/2 xl:w-1/3" v-for="i in 3" :key="i">
              <div class="rounded-xl bg-white shadow-lg overflow-hidden mb-10">
                  <img src="/project-thumbnail-1.jpg" alt="" class="w-full">
                  <div class="py-8 ">
                    <h3><a href="" class="ml-3 block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"> How To Bulking</a></h3>
                    <p class="ml-3 font-light text-base text-secondary mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum tempora, totam corporis libero culpa nam quia, doloribus blanditiis voluptatum adipisci quas est tenetur reprehenderit ratione laborum autem? Est, a!</p>
                    <nuxt-link :to="'/newsletter/' + i">
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
</template>