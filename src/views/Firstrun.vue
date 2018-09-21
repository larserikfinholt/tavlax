<template>
   <v-container fluid fill-height>
      <v-layout row wrap align-center >
        <v-flex>
          <v-layout column align-center>
        <v-flex>
          <v-dialog v-model="dialog" persistent max-width="500px">
            <v-btn slot="activator" large color="success" dark>Kom igang</v-btn>
            <v-card>
              <v-card-title>
                <span v-if="step==0" class="headline">Steg 1 - Basisinformasjon</span>
                <span v-if="step==1" class="headline">Steg 2 - Familemedlemmer</span>
              </v-card-title>
              <v-card-text>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex v-if="step==0">
                      <v-layout wrap>
                    <v-flex xs12 sm6 >
                      <v-text-field label="Fornavn (ditt navn)" required  v-model="persons[0].name"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 >
                      <v-text-field v-model="family.name"
                        label="Familenavn (eks Hansen)"
                        required
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field label="Epost (din epost)" required v-model="persons[0].email"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm12>
                      <v-autocomplete
                        :items="['Fotball', 'Håndball','Skolemusikk','Speider', 'Barnehage', 'SFO', 'Trening', 'Husvask', 'Tøyvask', 'Middagslaging']"
                        label="Plukk ut et par aktiviteter som du har lyst å få bedre kontroll på"
                        multiple
                        chips
                      ></v-autocomplete>
                    </v-flex>
                      </v-layout>
                    </v-flex>
                   <v-flex v-if="step==1">
                      <v-layout wrap>
                    <v-flex xs12 v-for="(person,index) of persons" :key="index">
                      <v-layout>
                      <v-flex xs12 sm6 >
                        <v-text-field label="Fornavn" required v-model="person.name"></v-text-field>
                      </v-flex>
                      <v-flex xs12 sm6>
                        <v-select v-model="person.age"
                          :items="['0-5', '6-12', '13-25', '25+']"
                          label="Alder"
                          required
                        ></v-select>
                      </v-flex>
                      </v-layout>
                    </v-flex>
                    <v-flex xs12>
                      <v-layout justify-end="">
                      <v-btn flat v-if="persons[persons.length-1].name" small @click="add()">Legg til</v-btn>
                      <v-btn flat color="error" v-if="persons.length>3" small @click="remove()">Fjern </v-btn>
                      </v-layout>
                    </v-flex>
                      </v-layout>
                   </v-flex>
                  </v-layout>
                </v-container>
                <!-- <small>*indicates required field</small> -->
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn  v-if="step==0" flat @click.native="dialog = false">Avbryt</v-btn>
                <v-btn v-if="step==0" color="success"  @click.native="step = 1">Neste</v-btn>
                <v-btn  v-if="step==1" flat @click.native="step = 0">Forrige</v-btn>
                <v-btn v-if="step==1" color="success"  @click.native="dialog = false">Ferdig</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-flex>
        <v-flex>
          <v-btn small>Allerede bruker?</v-btn>
        </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
   </v-container>
</template>

<script>
import Person from "../components/Person";

export default {
  data() {
    return {
      dialog:false,
      step:0,
      family: {},
      persons: [
        {
          name: "",
          age: '25+'
        },
        {
          name: "",
          age: '25+'
        },
        {
          name: "",
          age: '0-5'
        }
      ],
    };
  },
  methods: {
    add() {
      this.persons.push({ name: null, age: null });
    },
    remove() {
      this.persons.splice(-1,1);
    }
  },

  computed: {
    binding() {
      const binding = {};

      if (this.$vuetify.breakpoint.smAndUp) {
        binding.column = false;
      } else {
        binding.column = true;
      }
      console.log("breakpoint", this.$vuetify.breakpoint);

      return binding;
    }
  },
  components: {
    Person
  }
};
</script>