<template>
<div id="detailclass">
             <Navbar />
              <img class="image_kelas" src="/image11.png" />
          <!-- <img :src="default_image" class="image_kelas"/> -->
          <div class="relative bg-gray-100 rounded-tl-3xl rounded-tr-3xl" style="width: 100%; height: 836px;">
    <p class="absolute text-4xl font-semibold text-black" style="left: 122px; top: 50px;">{{kelas.data.classname}}</p>
    <div class="inline-flex items-center justify-start w-40 h-10 p-2.5 absolute border rounded-full border-gray-400" style="left: 127px; top: 158px;">
        <p class="flex-1 text-base font-medium text-center text-green-400">{{kelas.data.clastype}}</p>
    </div>
    <div class="inline-flex space-x-1 items-center justify-start w-36 h-10 p-2.5 absolute border rounded-full border-gray-400" style="left: 307px; top: 158px;">
        <p class="flex-1 text-sm font-medium text-center text-green-400">{{kelas.data.date}}</p>
    </div>
    <div class="inline-flex space-x-1 items-center justify-start w-20 h-10 p-2.5 absolute border rounded-full border-gray-400" style="left: 467px; top: 158px;">
       <span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-green-400 mb-1.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </span> <p class="flex-1 text-sm font-medium text-center text-green-400">{{kelas.data.clock}}</p>
    </div>
    <p class="absolute text-3xl font-semibold text-black" style="left: 122px; top: 248px;">About this class</p>
    <p class="absolute text-3xl font-semibold text-black" style="left: 120px; top: 419px;">Information</p><br>
    <p class="absolute  font-semibold text-black" style="left: 120px; top: 460px;">Kapasitas : {{kelas.data.capacity}}</p>
     <p class="absolute  font-semibold text-black" style="left: 120px; top: 520px;">User Booked : {{kelas.data.user_booked}}</p>
    <p class="absolute text-xl text-gray-800" style="width: 839px; left: 122px; top: 307px;">{{kelas.data.description}}</p>
    <div class="inline-flex space-x-1 items-center justify-center w-24 h-10 p-2.5 absolute border rounded-full border-gray-400" style="left: 567px; top: 158px;">
        <p class="text-sm font-medium text-green-400">{{kelas.data.trainer}}</p>
    </div>
    <button style="left: 120px; top: 460px;" class="absolute mt-24 text-xl text-white bg-green-button py-4 px-10 rounded-xl shadow-lg">Book Now</button>
</div>
       
</div>
</template>
<script>
export default {
  auth : false,
  async asyncData({ $axios, params }) {
    const kelas = await $axios.$get('/api/v1/class/' + params.id)
    return { kelas }
  },
}
</script>