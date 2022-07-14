<template>
<div id="detailclass">
             <Navbar />
              <img class="image_kelas" src="/image11.png" />
          <!-- <img :src="default_image" class="image_kelas"/> -->
          <div class="relative bg-gray-100 rounded-tl-3xl rounded-tr-3xl" style="width: 100%; height: 836px;">
    <p class="absolute text-2xl font-semibold" style="left: 1063px; top: 212px;">Our class</p>
    <p class="absolute text-4xl font-semibold text-black" style="left: 122px; top: 50px;">{{kelas.data.classname}}</p>
    <div class="inline-flex items-center justify-start w-40 h-10 p-2.5 absolute border rounded-full border-gray-400" style="left: 127px; top: 158px;">
        <p class="flex-1 text-base font-medium text-center text-green-400">{{kelas.data.clastype}}</p>
    </div>
    <div class="inline-flex space-x-1 items-center justify-start w-36 h-10 p-2.5 absolute border rounded-full border-gray-400" style="left: 307px; top: 158px;">
        <p class="flex-1 text-sm font-medium text-center text-green-400">{{kelas.data.date}}</p>
    </div>
    <div class="inline-flex space-x-1 items-center justify-start w-20 h-10 p-2.5 absolute border rounded-full border-gray-400" style="left: 467px; top: 158px;">
        <p class="flex-1 text-sm font-medium text-center text-green-400">{{kelas.data.clock}}</p>
    </div>
    <div class="inline-flex space-x-2.5 items-start justify-start w-72 absolute" style="left: 122px; top: 114px;">
        <img class="w-6 h-full rounded-lg" src="https://via.placeholder.com/24x24"/>
        <div class="flex space-x-1 items-center justify-start flex-1">
            <p class="w-32 text-xl font-medium text-gray-400">Gym Studio</p>
            <p class="w-2 text-xl font-medium text-gray-400">-</p>
            <p class="w-28 text-xl font-medium text-gray-400">Bandung</p>
        </div>
    </div>
    <p class="absolute text-3xl font-semibold text-black" style="left: 122px; top: 248px;">About this class</p>
    <p class="absolute text-3xl font-semibold text-black" style="left: 120px; top: 419px;">Information</p><br>
    <p class="absolute  font-semibold text-black" style="left: 120px; top: 460px;">Kapasitas : {{kelas.data.capacity}}</p>
     <p class="absolute  font-semibold text-black" style="left: 120px; top: 520px;">User Booked : {{kelas.data.user_booked}}</p>
    <p class="absolute text-xl text-gray-800" style="width: 839px; left: 122px; top: 307px;">{{kelas.data.description}}</p>
    <div class="inline-flex space-x-1 items-center justify-center w-24 h-10 p-2.5 absolute border rounded-full border-gray-400" style="left: 567px; top: 158px;">
        <p class="text-sm font-medium text-green-400">{{kelas.data.trainer}}</p>
    </div>
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