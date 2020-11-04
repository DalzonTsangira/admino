<template>
  <v-container>
    <v-layout row justify-center align-center>
      <v-flex class="md2">
        <v-card min-height="12vh" class="d-flex" flat> 
            <v-card class="align-self-center" flat>
              ADMINISTRATION
            </v-card>
        </v-card>
      </v-flex>
      <v-flex class="md3">
        <v-card min-height="12vh" color="purple">
          <v-row class="ml-14 pt-5 white--text">
            <v-flex class="md3"><span class="headline">55</span></v-flex>
            <v-flex class="md3">users</v-flex>
            <v-spacer></v-spacer>
            <v-flex class="md3  mr-2">
              <v-avatar color="white" class="mr-2">
                <v-icon color="black">people</v-icon>
              </v-avatar></v-flex>
          </v-row>
           </v-card>
      </v-flex>
      <v-flex class="md3 ml-4">
        <v-card min-height="12vh" color="blue"> 
          <v-row class="ml-14 pt-5 white--text">
            <v-flex class="md3"><span class="headline">340</span> </v-flex>
            <v-flex class="md3">ventes</v-flex>
            <v-spacer></v-spacer>
            <v-flex class="md3 mr-2">
              <v-avatar color="white" class="mr-2">
                  <v-icon color="black">shopping_basket</v-icon>
              </v-avatar></v-flex>
          </v-row>
        </v-card>
      </v-flex>
      <v-flex class="md3 ml-4">
        <v-card min-height="12vh" color="black">
          <v-row class="ml-14 pt-5 white--text">
            <v-flex class="md3"><span class="headline">{{getTotalProd}}</span></v-flex>
            <v-flex class="md3">produits en stock</v-flex>
            <v-spacer></v-spacer>
            <v-flex class="md3  mr-2" >
              <v-avatar color="white" class="">
              <v-icon color="black">store</v-icon>
              </v-avatar></v-flex>
          </v-row>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-col sm="10" md="9">
        <v-card min-height="74vh" class="pa-2">
          <v-simple-table dense>
    <template v-slot:default>
      <thead  class="black">
        <tr >
          <th class="text-left white--text">
            Image
          </th>
          <th class="text-left  white--text">
            name
          </th>
          <th class="text-left  white--text">
            prix
          </th>
          <th class="text-left  white--text">
            monnaie
          </th>
          <th class="text-left  white--text">
            etat
          </th>
          <th class="text-left  white--text">
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(item,index) in desserts"
          :key="index"
        >
          <td><v-avatar><v-img :src="item.imageUrl"></v-img></v-avatar></td>
          <td>{{ item.name }}</td>
          <td>{{ item.prix }}</td>
          <td>{{ item.monnaie }}</td>
          <td>{{ item.etat }}</td>
          <td><v-btn v-if="!item.accepted"   icon><v-icon color="red">highlight_off</v-icon> </v-btn>
            <v-btn v-else icon>
            <v-icon  color="blue">done</v-icon>
            </v-btn>
            </td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
        </v-card>
      </v-col>
      <v-col sm="12" md="3">
        <v-card min-height="74vh"></v-card>
      </v-col>
    </v-layout>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from "vuex";
export default {
  name: "Home",
  components: {},
  data () {
      return {

        
      }
    },
    computed:{
      ...mapGetters(['getTotalProd'])

    }
};

</script>
