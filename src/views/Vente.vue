<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="px-8 py-4 black--text" max-height="10vh" dense>
          <v-row>
            <span>Gestion Vente</span>
            <v-spacer></v-spacer>
            <v-col md="3">
              <v-text-field type="date" label="A partir de" dense></v-text-field>
            </v-col>
            <v-col md="3">
              <v-text-field type="date" label="jusqu'a" dense></v-text-field>
            </v-col>

            <v-col>
              <v-dialog v-model="dialog" persistent max-width="600px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="pink" dark v-bind="attrs" v-on="on">Ajouter vente</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">Nouvelle vente</span>
                  </v-card-title>
                  <v-card-text>
                    <v-container>
                      <v-row>
                        
                        <v-col cols="12" sm="6" md="4">
                          <select v-model="productId" id="select" @change="onChanged($event)">
                              <option v-for="(product,i) in products" :key="i" :value="product.id" >{{product.name}}</option>
                          </select>
                           <v-text-field v-model="currentProduct.id" outlined dense disabled class="mt-2" label="ID produit"></v-text-field>
                           <v-text-field  type="number" v-model="currentProduct.qty" outlined dense  class="mt-2" label="Quantite"></v-text-field>
                        </v-col>
                        <v-col md="4">
                        <v-text-field  v-model="currentProduct.client" outlined dense  class="mt-2" label="Nom client"></v-text-field>
                        <v-text-field  type="phone" v-model="currentProduct.phone" outlined dense  class="mt-2" label="Phone"></v-text-field>
                        </v-col>
                        
                        <v-col cols="12" md="2">
                         {{getTotal}}
                        </v-col>
                      </v-row>
                    </v-container>
                    
                  </v-card-text>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="createVente0()">Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="12">
        <v-simple-table>
          <template v-slot:default>
            <thead class="black">
              <tr>
                <th class="text-left white--text">Id</th>
                <th class="text-left white--text">Nom Produit</th>
                <th class="text-left white--text">Quantite</th>
                <th class="text-left white--text">Prix Total</th>
                <th class="text-left white--text">Monnaie</th>
                <th class="text-left white--text">Date-vente</th>
                <th class="text-left white--text">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, i) in ventes" :key="i">
                <td>{{ item.id }}</td>
                <td>{{ item.products.name }}</td>
                <td>{{ item.total }}</td>
                <td>{{ item.total *item.products.price }}</td>
                <td>{{ item.monnaie }}</td>
                <td>{{ item.created_at|moment("DD/MMM/YYYY") }}</td>
                <td>
                  <v-btn color="green" class="white--text" small>ok</v-btn>
                  <v-btn color="red" class="ml-4 white--text" small>non</v-btn>
                </td>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapState,mapActions } from "vuex";
export default {
  name: "Vente",
  components: {},
  computed:{
    ...mapState(["products","ventes"]),
    getTotal(){
      return this.currentProduct.price * this.currentProduct.qty;
    }
  },
  methods:{
    ...mapActions(["createVente"]),
    onChanged(event){
      this.currentProduct=this.products.find(el=>el.id==event.target.value);
    },
    createVente0(){
      this.createVente(
        {...this.currentProduct,total:this.getTotal}
      );
      this.dialog=false;
    }
    
  },

  

 
  data() {
    return {
      dialog: false,
      currentProduct:{
        price:0,
        qty:1,
      },

      productId:null,
      name:"",
      price:"",
      qty:1,
      total:0,
      desserts: [
        {
          id: "1",
          nam: "Movit Hair",
          qty: 159,
          Prix: "2500",
          monnaie: "CDF",
          date: "02-04-2020"
        },
        {
          id: "2",
          nam: "Movit Shambo",
          qty: 158,
          Prix: "5000",
          monnaie: "CDF",
          date: "02-04-2020"
        }
      ]
    };
  }
};
</script>

<style scoped>
#select{
  padding: 2px;
  width: 160px;
  height: 40px;
  border-radius:4px ;
  background-color: white;
  outline: none;
  border: 1px solid grey;
  
}
</style>