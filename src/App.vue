<template>
  <v-app>
    
    <Navbar/>
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import { mapActions} from "vuex";
import Navbar from "./components/Navbar.vue";
export default {
  name: 'App',

  components: {
    Navbar
  },
  methods:{
    ...mapActions(['getImages','getProducts']),
  },

  data: () => ({
    //
  }),
  mounted(){
    this.getImages();
    this.getProducts();
  }
};
</script>
