<template>
  <v-container>
    <v-card flat>
      <v-layout row>
        <v-col sm="12" md="4">
          <span class="black--text">Nouveau produit</span>
          <v-form @submit.prevent="addP">
          <v-dialog v-model="dialog" persistent max-width="600px">
            <template v-slot:activator="{ on, attrs }">
              <v-img
                v-if="!imageSelected"
                src="../assets/default.jpg"
                width="100"
                height="100"
                v-bind="attrs"
                v-on="on"
              ></v-img>
              <v-img
                v-else
                :src="imageSelected"
                width="100"
                height="100"
                v-bind="attrs"
                v-on="on"
              >
              </v-img>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">User Profile</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col
                      v-for="(n ,i) in images"
                      :key="i"
                      class="d-flex child-flex"
                      @click="setLocalImage(n)"
                      cols="4"
                    >
                      <v-img
                        :src="n.url"
                        aspect-ratio="1"
                        class="grey lighten-2"
                      ></v-img
                    ></v-col>
                  </v-row>
                </v-container>
                
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false">
                  Fermer
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-text-field v-model="newProduct.name" label="nom produit"></v-text-field>
          <v-row>
            <v-col sm="12" md="6">
              <v-text-field v-model.number="newProduct.price" label="price" type="number"></v-text-field>
            </v-col>
            <v-col sm="12" md="6">
              <v-overflow-btn
                class="my-2"
                :items="currencies"
                label="Monnaie"
                flat
                v-model="newProduct.monnaie"
                item-value="text"
                dense
              ></v-overflow-btn>
            </v-col>
          </v-row>
          <v-textarea
            full-width
            name="input-7-1"
            label="Description"
            v-model="newProduct.details"
            hint="Une description de 255 (c)"
          ></v-textarea>
          <v-row>
            <v-col>
              <v-btn class="pink--text">Annuler</v-btn>
            </v-col>
            <v-col>
              <v-btn @click.prevent="addP()" color="pink" class="white--text">Creer produit</v-btn>
            </v-col>
          </v-row>
          </v-form>
        </v-col>
        <v-col sm="12" md="8">
          <v-row>
            <v-col>
              <v-card class="px-8 py-4 white--text" color="black">
                <v-row>
                  <span>Produits en stock</span>
                  <v-spacer></v-spacer> {{getTotalProd}} produits
                </v-row>
              </v-card>
            </v-col>
          </v-row>

          <v-row max-height="72vh" wrap>
            <v-card
              class="mx-auto my-4"
              max-width="160"
              v-for="item in products"
              :key="item.id"
            >
              <v-img height="120" width="160" :src="item.imageUrl"></v-img>
              <div class="ml-4">
                <v-label>{{ item.name }}</v-label>
              </div>
              <v-divider class="mx-4"></v-divider>
              <v-row>
                <v-col md="8">
                  <div class="ml-4 pink--text">
                <span class="pink--text">{{
                  item.price + " " + item.monnaie
                }}</span>
              </div>
                </v-col>
                <v-col><v-btn @click.prevent="deleteProduct(item)" icon><v-icon>delete</v-icon></v-btn></v-col>
              </v-row>
            </v-card>
          </v-row>
        </v-col>
      </v-layout>
    </v-card>
  </v-container>
</template>

<script>
// @ is an alias to /src
import { mapActions,mapState ,mapGetters} from "vuex";
export default {
  name: "Stock",
  components: {},
  data() {
    return {
      imageSelected: null,
      currencies: ["USD", "CDF"],
      dialog: false,
     newProduct:{
       name:"",
       detail:"",
       monnaie:"",
       qty:1,
       price:"",
       
     }
    };
  },
  methods:{
    ...mapActions(['addProduct','deleteProduct']),
    setLocalImage(n){
      this.imageSelected=n.url;
      this.dialog=false;
      
    },
    addP(){
      this.addProduct({...this.newProduct,imageUrl:this.imageSelected});
      this.newProduct=""
      this.imageSelected=null;
    },

  },
  computed: {
    
    ...mapState(['images','products']),
    ...mapGetters(['getTotalProd'])
    
  },
  
};
</script>