<template>
  <v-app dark>
    <NavigationNavbar />

    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>

    <Footer />
  </v-app>
</template>
<script>
import NavigationNavbar from "~/components/master/navigation";
import Footer from "~/components/master/footer";
export default {
  components: {
    NavigationNavbar,
    Footer
  }
};
</script>