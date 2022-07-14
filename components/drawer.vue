<template>
  <v-app ligth>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      app
    >
      <v-list>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    
    <v-app-bar :clipped-left="clipped" fixed app>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-toolbar-title v-text="title" />
      <v-spacer />
    </v-app-bar>
    <v-main>
      <v-container>
        <Nuxt />
      </v-container>
    </v-main>
    <v-footer :absolute="!fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'Drawer',
  data() {
    return {
      clipped: true,
      drawer: true,
      fixed: false,
      items: [
        {
          icon: 'mdi-home',
          title: 'Home',
          to: '/home',
        },
        {
          icon: 'mdi-credit-card',
          title: 'Membership',
          to: '/Membership',
        },
        {
          icon: 'mdi-arm-flex',
          title: 'Manage Online Booking',
          to: '/Bonline',
        },
        {
          icon: 'mdi-radio-tower',
          title: 'Manage Offline Booking',
          to: '/Boffline',
        },
        {
          icon: 'mdi-email-newsletter',
          title: 'Newsletter',
          to: '/Newsletter',
        },
        {
          icon: 'mdi-message-video',
          title: 'Video Content',
          to: '/Videoc',
        },
      ],
    }
  },
}
</script>
