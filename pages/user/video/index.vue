
<template >
    <div>
        <Navbar />
        <div  class="mt-24 px-10">
            <h1 class="text-3xl py-6">Work Out From Home</h1>
            <p>Enjoy tons of free video-on-demand workouts from GYMTHIRTY. Find videos that match your preferences and goals!</p>

        </div>
        <div  class="grid grid-cols-3 gap-4 mt-12 px-10 mb-10">
            

          <div
           v-for="item in video" :key="item.id"
            class="card-project w-full p-5 "
          >
           <div class="item-meta">
                <h4 class="text-2xl font-medium text-gray-900 mt-1">
                 {{item.judul}}
                </h4>
              </div>
            <div class="item">
              <figure class="item-image">
                <iframe width="560" height="315" :src="`${item.video_url}`" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
              </figure>
             
            </div>
          </div>
        </div>
        <Footer />
    </div>
</template>

<script>
import gql from 'graphql-tag';
export default {
    auth : false,
apollo : {
    video: gql `query {
  video {
    judul
    video_url
    id
  }
}
`,},
}
</script>
