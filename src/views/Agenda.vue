<template>
   <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <h1>Agenda</h1>
        <Week :date="date" ></Week>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>


<script>
import Week from "@/components/Week.vue";
import moment from 'moment';

export default {
  data(){
    return {
      date:moment()
    }
  },
  mounted() {
    console.log("mounted agenda");
    this.$store.dispatch("addDummyData");
  },


  components: {
    Week
  }
};
</script>
