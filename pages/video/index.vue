<template>
    <div>
        <Navbar2 />
        <div class="mt-24 px-10">
            <h1 class="text-3xl py-6">Work Out From Home</h1>
            <p>Enjoy tons of free video-on-demand workouts from GYMTHIRTY. Find videos that match your preferences and goals!</p>

        </div>
        <div  class="grid grid-cols-3 gap-4 mt-12 px-10 mb-10">
            

          <div
          v-for="i in 6" :key="i"
            class="card-project w-full p-5 "
          >
            <div class="item">
              <figure class="item-image">
                <img
                  src="/image11.png"
                  alt=""
                  class="rounded-20 w-full"
                />
              </figure>
              <div class="item-meta">
                <h4 class="text-3xl font-medium text-gray-900 mt-1">
                 boxing
                </h4>
                <p class="text-md font-light text-gray-900">
                 deskripsi
                </p>
              </div>
            </div>
          </div>
        </div>
        <Footer />
    </div>
</template>
<script>
export default {
    auth : false,
}
</script>