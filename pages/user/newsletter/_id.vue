<template>
    <div>
        <Navbar />
 <div class="relative bg-gray-100" style="width: 1440px; height: 1163px;">
    <p class="absolute text-2xl font-semibold text-black" style="left: 1092px; top: 429px;">Recomendation</p>
    <div class="inline-flex flex-col space-y-1 items-start justify-start w-48 absolute bg-green-400 rounded" style="left: 1092px; top: 990px;">
        <div class="inline-flex space-x-2.5 items-center justify-start w-full flex-1 px-2.5 bg-green-400 rounded">
            <p class="flex-1 text-sm font-semibold text-center text-white">See More Newsletter</p>
        </div>
    </div>
    <div class="absolute bg-gray-900 shadow rounded-lg" style="width: 1200px; height: 189px; left: 120px; top: 190px;">
        <div class="inline-flex flex-col space-y-5 items-start justify-end py-10 pl-10 pr-96 bg-gradient-to-r from-black via-black to-black rounded-lg" style="width: 1200px; height: 189px;">
            <p class="text-5xl font-semibold text-gray-100">{{berita.data.title}}</p>
            <div class="inline-flex space-x-2.5 items-center justify-start w-56">
                <p class="text-xl font-semibold leading-loose text-gray-400">{{berita.data.date}}</p>
            </div>
        </div>
    </div>
    <div class="inline-flex items-start justify-center px-5 pt-5 pb-16 absolute bg-gray-50 shadow rounded-lg" style="width: 893px; height: 634px; left: 120px; top: 429px;">
 <p>{{berita.data.content}}</p>
    </div>
    <div class="inline-flex flex-col space-y-40 items-end justify-end w-64 px-2.5 pt-2.5 absolute bg-gray-50 shadow rounded-lg" style="left: 1063px; top: 478px;">
        <div class="flex flex-col space-y-2.5 items-start justify-start w-full">
            <img class="w-full h-36 rounded-lg" src=""/>
            <div class="flex flex-col space-y-1 items-start justify-start w-full">
                <p class="w-full text-xs font-medium text-green-400">Cardio</p>
                <p class="w-full text-xl font-semibold text-black">Tips Great Running</p>
            </div>
        </div>
    </div>
    <div class="inline-flex flex-col space-y-40 items-end justify-end w-64 px-2.5 pt-2.5 absolute bg-gray-50 shadow rounded-lg" style="left: 1063px; top: 724px;">
        <div class="flex flex-col space-y-2.5 items-start justify-start w-full">
            <img class="w-full h-36 rounded-lg" src=""/>
            <div class="flex flex-col space-y-1 items-start justify-start w-full">
                <p class="w-full text-xs font-medium text-green-400">Calisthenics</p>
                <p class="w-full text-xl font-semibold text-black">Tips Great Push Up</p>
            </div>
        </div>
    </div>
</div>
<Footer/>
    </div>
</template>
<script>
export default {
    auth: false,
    async asyncData({ $axios, params }) {
    const berita = await $axios.$get('/api/v1/newsletter/' + params.id)
    return { berita }
  },
}
</script>