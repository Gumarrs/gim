<template>
          <header class="flex items-center px-5"  style="height: 100px; background-color: rgb(26 46 57);" >
            <div class="pr-5 mr-12 ml-24"  >
              <img src="/ph_barbell.png" alt="logo" class="h-full" />
            </div>
            <ul class="flex items-center ">
              <li>
                <a
                  class="text-white hover:text-teal-500 text-lg px-8 py-3"
                  href="/"
                  >Home</a
                >
              </li>
              <li>
                <a
                  class="text-white hover:text-teal-500 text-lg px-8 py-3"
                  href="#"
                  >About</a
                >
              </li>
              <li>
                <a
                  class="text-white hover:text-teal-500 text-lg px-8 py-3"
                  href="#"
                  >Content</a
                >
              </li>
              <li>
                <a
                  class="text-white hover:text-teal-500 text-lg px-8 py-3"
                  href="#"
                  >News</a
                >
              </li>
            </ul>
            <ul class="flex ml-auto items-center mt-2">
              <li>
                <nuxt-link
                  to="/login"
                  class="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full mr-4"
                >
                  Login
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/register"
                  class="inline-block bg-transparent border-white border hover:bg-white hover:bg-opacity-25 text-white font-light w-40 text-center px-6 py-1 text-lg rounded-full"
                >
                  Register
                </nuxt-link>
              </li>
            </ul>
          </header>
</template>
