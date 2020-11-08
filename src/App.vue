<template>
  <v-app>
    
    <Navbar :drawer="drawer"/>
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
    ...mapActions(['getImages','getProducts','getVentes',"getUsers"]),
  },

  data: () => ({
    drawer: true,
  }),
  mounted(){
    this.getImages();
    this.getProducts();
    this.getVentes();
    this.getUsers();

  }
};
</script>
