<template>
<div>
        <div class="container mx-auto relative pt-5">
          <Header />
        </div>
            <section id="form" class="pt-36 pb-30 ">

      <div class="flex justify-center items-center bg-white shadow-lg">
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
                  v-model="login.email"
                  class="auth-form "
                  placeholder="Enter Email"
                  required
                />
              </div>
            </div>
            <div class="mb-6">
              <div class="mb-4">
                <label class="font-normal text-lg  block mb-3"
                  >Password</label
                >
                <input
             @keyup.enter="userLogin"
              type="password"
              v-model="login.password"
                  class="auth-form "
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            <div class="mb-6">
              <div class="mb-4">
                <button
                  @click="userLogin"
                  class="block w-full bg-green-button  font-semibold px-6 py-4 text-white text-lg rounded-full"
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

<style scoped>
      .hitam {
  background-color: #1A2E39;
      }
    </style>
<script>
export default {
  layout: 'auth',
  data() {
    return {
      login: {
        email: '',
        password: ''
      },
    }
  },
  methods: {
    async userLogin(){
      try{
        let response = await this.$auth.loginWith('local', {data: this.login})
        this.$auth.setUser(response.data.data)
        this.$router.push('/user')
        console.log(response)
      }catch(error){
        console.log(error)
      }
    },
    
  },
}
</script>