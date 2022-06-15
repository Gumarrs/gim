<template>
      <div class="landing-page">
      <section class="landing-hero pt-5 ">
        <div class="header__bg "></div>
        <div class="container mx-auto relative">
          <Navbar />
                    <div class="flex items-center pt-10 px-5 md:px-0">
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
    <section id="content" class="pt-36 pb-30">
      <div class="container">
        <div class="flex flex-wrap pt-36 mx-10">
          <div class="px-20 mb-10 w-1/2">
            <h1>INI VIDEO  NANTINYA</h1>
          </div>
          <div class="w-1/2 px-10">
            <h1 class="font-bold text-4xl mb-4 w-1/2">WORK OUT FROM HOME</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vel ipsum penatibus congue ipsum nisl. In massa elit amet sed morbi. Leo, cras adipiscing cursus netus eu pharetra. Aliquam, est, ultrices odio posuere elit.</p>
            <br>
            <button class="bg-green-button block text-white font-semibold px-16 py-3 text-xl">See All Video</button>
          </div>
        </div>
        <div class="flex flex-wrap pt-36 mx-10">
          <div class="px-20 mb-10 w-1/6">
           <img src="/avatar.jpg" alt="">
          </div>
            <div class="px-20 w-1/6">
           <img src="/avatar.jpg" alt="">
          </div>
            <div class="px-20 w-1/6">
           <img src="/avatar.jpg" alt="">
          </div>
        </div>
      </div>
    </section>
    <section id="news" class="pt-36 pb-30 bg-slate-100 mb-24">
      <div class="container">
        <div class="w-full px-24">
          <div class="max-w-xl mx-auto text-center">
            <h1 class="font-bold text-4xl mb-10">Newsletter</h1>
          </div>
          <div class="flex flex-wrap ml-20">
            <div class="w-full  px-4 lg:w-1/2 xl:w-1/3">
              <div class="rounded-xl bg-white shadow-lg overflow-hidden mb-10">
                  <img src="/project-thumbnail-1.jpg" alt="" class="w-full">
                  <div class="py-8 px6">
                    <h3><a href="" class="ml-3 block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"> How To Bulking</a></h3>
                    <p class="ml-3 font-light text-base text-secondary mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum tempora, totam corporis libero culpa nam quia, doloribus blanditiis voluptatum adipisci quas est tenetur reprehenderit ratione laborum autem? Est, a!</p>
                    <button class="ml-3 bg-white hover:bg-gray-100 text-green-800 font-semibold py-2 px-4 border border-green-400 rounded shadow">
  Read More
</button>
                  </div>
              </div>
            </div>
            <div class="w-full  px-4 lg:w-1/2 xl:w-1/3">
              <div class="rounded-xl bg-white shadow-lg overflow-hidden mb-10">
                  <img src="/project-thumbnail-1.jpg" alt="" class="w-full">
                  <div class="py-8 px6">
                    <h3><a href="" class="ml-3 block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"> How To Bulking</a></h3>
                    <p class="ml-3 font-light text-base text-secondary mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum tempora, totam corporis libero culpa nam quia, doloribus blanditiis voluptatum adipisci quas est tenetur reprehenderit ratione laborum autem? Est, a!</p>
                    <button class="ml-3 bg-white hover:bg-gray-100 text-green-800 font-semibold py-2 px-4 border border-green-400 rounded shadow">
  Read More
</button>
                  </div>
              </div>
            </div><div class="w-full  px-4 lg:w-1/2 xl:w-1/3">
              <div class="rounded-xl bg-white shadow-lg overflow-hidden mb-10">
                  <img src="/project-thumbnail-1.jpg" alt="" class="w-full">
                  <div class="py-8 px6">
                    <h3><a href="" class="ml-3 block mb-3 font-semibold text-xl text-dark hover:text-primary truncate"> How To Bulking</a></h3>
                    <p class="ml-3 font-light text-base text-secondary mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum rerum tempora, totam corporis libero culpa nam quia, doloribus blanditiis voluptatum adipisci quas est tenetur reprehenderit ratione laborum autem? Est, a!</p>
                    <button class=" ml-3 bg-white hover:bg-gray-100 text-green-800 font-semibold py-2 px-4 border border-green-400 rounded shadow">
  Read More
</button>
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