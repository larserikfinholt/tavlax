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
                <span v-if="step==2" class="headline">Steg 3 - Litt om dere</span>
              </v-card-title>
              <v-card-text>
                <v-form>
                <v-container grid-list-md>
                  <v-layout wrap>
                    <v-flex v-if="step==0">
                      <v-layout wrap>
                    <v-flex xs12 sm6 >
                      <v-text-field label="Fornavn (ditt navn)" ref="f11" :rules="nameRules"  v-model="family.persons[0].name"></v-text-field>
                    </v-flex>
                    <v-flex xs12 sm6 >
                      <v-text-field v-model="family.name" ref="f12"
                        label="Familenavn (eks Hansen)"
                         :rules="nameRules" 
                      ></v-text-field>
                    </v-flex>
                    <v-flex xs12>
                      <v-text-field label="Epost (din epost)" ref="f13"  :rules="emailRules" v-model="family.persons[0].email"></v-text-field>
                    </v-flex>
                      </v-layout>
                    </v-flex>
                   <v-flex v-if="step==1">
                      <v-layout wrap>
                    <v-flex xs12 v-for="(person,index) of family.persons" :key="index">
                      <v-layout>
                      <v-flex xs12 sm6 >
                        <v-text-field label="Fornavn" :ref="'f2a'+index" :disabled="index==0" :rules="nameRules"  required v-model="person.name"></v-text-field>
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
                      <v-btn flat :disabled="!family.persons[family.persons.length-1].name"  small @click="add()">Legg til</v-btn>
                      <v-btn flat color="error" v-if="family.persons.length>3" small @click="remove()">Fjern </v-btn>
                      </v-layout>
                    </v-flex>
                      </v-layout>
                   </v-flex>
                   <v-flex v-if="step==2">
                     <v-layout>
                       <v-flex xs12 sm12>
                          <v-autocomplete
                            :items="['Fotball', 'Håndball','Skolemusikk','Speider', 'Barnehage', 'SFO', 'Trening', 'Husvask', 'Tøyvask', 'Middagslaging']"
                            label="Plukk ut et par aktiviteter som du har lyst å få bedre kontroll på"
                            multiple
                            chips
                            v-model="family.topics"
                          ></v-autocomplete>
                      </v-flex>
                     </v-layout>

                   </v-flex>
                  </v-layout>
                
                </v-container>
                <!-- <small>*indicates required field</small> -->
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn  v-if="step==0" flat @click.native="dialog = false">Avbryt</v-btn>
                <v-btn v-if="step==0" color="success"  :disabled="isStep1Invalid()"  @click.native="step = 1">Neste</v-btn>
                <v-btn  v-if="step==2 || step==1" flat  @click.native="step--">Forrige</v-btn>
                <v-btn v-if="step==1" color="success"    :disabled="isStep2Invalid()"   @click.native="step = 2">Neste</v-btn>
                <v-btn v-if="step==2" color="success" :disabled="isStep3Invalid()"   @click.native="finish()">Ferdig</v-btn>
              </v-card-actions>
              
            </v-card>
          </v-dialog>
        </v-flex>
        <v-flex>
          <v-btn flat small>Allerede bruker?</v-btn>
        </v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
   </v-container>
</template>

<script>
import { familyService } from "../services/family-service";
import Person from "../components/Person";

export default {
  data() {
    return {
      dialog: false,
      step: 0,
      family: {
        name: undefined,
        topics: undefined,
        persons: [
          {
            name: "",
            age: "25+"
          },
          {
            name: "",
            age: "25+"
          },
          {
            name: "",
            age: "0-5"
          }
        ]
      },

      nameRules: [
        v => !!v || "Dette klarer du",
        v => (v && v.length >= 2) || "Det var et kort navn"
      ],
      emailRules: [
        v => !!v || "Du glemte kanskje denne",
        v => /.+@.+/.test(v) || "Snodig epostadresse"
      ]
    };
  },
  methods: {
    add() {
      this.family.persons.push({ name: null, age: null });
    },
    remove() {
      this.family.persons.splice(-1, 1);
    },
    finish() {
      familyService.saveFamily(this.family.name, this.family);
      this.dialog = false;
    },
    isStep1Invalid() {
      if (this.$refs.f11 && this.$refs.f12 && this.$refs.f13) {
        return (
          this.$refs.f11.hasError ||
          this.$refs.f12.hasError ||
          this.$refs.f13.hasError
        );
      }
      return true;
    },
    isStep2Invalid() {
      for (let i = 0; i < this.family.persons.length; i++) {
        const p = this.family.persons[i];
        if (!p.name || p.name.length < 2) {
          return true;
        }
      }
      return false;
    },
    isStep3Invalid() {
      console.log("topics", this.family.topics);
      return !this.family.topics || this.family.topics.length < 2;
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