<template>
<div>
<div class="header__bg_login "></div>
        <div class="container mx-auto relative pt-5">
          <Navbar />
        </div>
            <section id="form" class="pt-36 pb-30">
      <div class="flex justify-center items-center">
                <div class="w-auto md:w-2/4 lg:w-2/3 flex justify-center items-center">
          <div class="w-full lg:w-1/2 px-10 lg:px-0 ">
            <h2 class="font-normal mb-6 text-3xl mx-auto text-center ">
              Login
            </h2>
            <div class="mb-6">
              <div class="mb-4">
                <label class="font-normal text-lg  block mb-3"
                  >Email Address</label
                >
                <input
                  type="email"
                  class="auth-form "
                  placeholder="Enter Email"
                />
              </div>
            </div>
            <div class="mb-6">
              <div class="mb-4">
                <label class="font-normal text-lg  block mb-3"
                  >Password</label
                >
                <input
                  type="password"
                  class="auth-form "
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <div class="mb-6">
              <div class="mb-4">
                <button
                  @click="$router.push({ path: '/' })"
                  class="block w-full bg-green-button  font-semibold px-6 py-4 text-lg rounded-full"
                >
                  Login
                </button>
              </div>
            </div>
                       <div class="text-right pb-10">
              <p class=" text-md text-green-300">
                Forgot Password ?
              </p>
            </div>
            <div class="text-center">
              <p class=" text-md mb-28">
                Don't have account?
                <nuxt-link to="/register" class="no-underline text-green-button"
                  >Sign Up</nuxt-link
                >.
              </p>
            </div>
          </div>
        </div>
      </div>

    </section>
              <Footer />
</div>



</template>
<script>
export default {
    layout: 'auth'
}
</script>
<style scoped>
      .hitam {
  background-color: #1A2E39;
      }
      .white_bg{
        background-color: #F8F8F8;
      }
    </style>