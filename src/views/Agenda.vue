<template>
   <v-container fluid>
      <v-layout column _align-center>
        <Week :date="date" ></Week>
      </v-layout>
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
