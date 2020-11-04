<template>
  <nav>
    <v-navigation-drawer
      v-model="drawer"
      app
      mini-variant
      mini-variant-width="100"
    >
      <v-card class="" min-height="100vh" color="pink">
        <v-list nav dense class="mb-2 pt-4 pl-6">
          
            <v-avatar height="50" width="50" color="white" ></v-avatar>
          
        </v-list>
        <v-divider></v-divider>

        <v-list dense>
          <v-list-item v-for="item in items" :key="item.title" link class="mt-2" router :to="item.route">
            <v-list-item-icon>
              <v-icon color="white">{{ item.icon }}</v-icon>
            </v-list-item-icon>
          </v-list-item>
        </v-list>
      </v-card>
    </v-navigation-drawer>
    <v-app-bar app color="pink" flat dark dense> 
            <v-list-item-title class="white--text font-weight-bold">B-Salumu</v-list-item-title>
        <v-spacer></v-spacer>
        <v-btn text>Logout</v-btn>
    </v-app-bar>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawer: true,
      items: [
        { title: "Home", icon: "dashboard" ,route:"/"},
        { title: "My Account", icon: "store" ,route:"/store"},
        { title: "Ventes", icon: "shopping_basket",route:"ventes" },
        
      ],
      mini: true,
    };
  },
};
</script>