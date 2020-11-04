<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card class="px-8 py-4 black--text" max-height="10vh" dense>
          <v-row>
            <span>Gestion Vente</span>
            <v-spacer></v-spacer>
            <v-col md="3"
              ><v-text-field
                type="date"
                label="A partir de"
                dense
              ></v-text-field
            ></v-col>
            <v-col md="3"
              ><v-text-field type="date" label="jusqu'a" dense></v-text-field
            ></v-col>
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
              <tr v-for="(item, i) in desserts" :key="i">
                <td>{{ item.id }}</td>
                <td>{{ item.nam }}</td>
                <td>{{ item.qty }}</td>
                <td>{{ item.Prix }}</td>
                <td>{{ item.monnaie }}</td>
                <td>{{ item.date }}</td>
                <td><v-btn color="green" class="white--text" small>ok</v-btn><v-btn color="red" class="ml-4 white--text" small>non</v-btn></td>
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

export default {
  name: "Vente",
  components: {},
  data() {
    return {
      desserts: [
        {
          id: "1",
          nam: "Movit Hair",
          qty: 159,
          Prix: "2500",
          monnaie: "CDF",
          date: "02-04-2020",
        },
        {
          id: "2",
          nam: "Movit Shambo",
          qty: 158,
          Prix: "5000",
          monnaie: "CDF",
          date: "02-04-2020",
        },
      ],
    };
  },
};
</script>