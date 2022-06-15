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
                  >Username</label
                >
                <input
                  type="text"
                  class="auth-form "
                  placeholder="Enter username"
                />
              </div>
            </div>
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
                  >Phone Number</label
                >
                <input
                  type="Tel"
                  class="auth-form "
                  placeholder="Enter phone number"
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
                <label class="font-normal text-lg  block mb-3"
                  >Confirm Password</label
                >
                <input
                  type="password"
                  class="auth-form "
                  placeholder="Re-Enter your password"
                />
              </div>
            </div>
            <div class="mb-6">
              <div class="mb-4">
                <button
                  @click="$router.push({ path: '/' })"
                  class="block w-full text-white bg-green-button  font-semibold px-6 py-4 text-lg rounded-full"
                >
                  Register
                </button>
              </div>
            </div>
            <div class="text-center">
              <p class=" text-md mb-28">
                Have Account ?
                <nuxt-link to="/login" class="no-underline text-green-button"
                  >Sign In</nuxt-link
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