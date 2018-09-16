<template>
   <v-container fluid>
      <v-layout column _align-center>
        <CalendarView :view="view" :startDate="startDate" ></CalendarView>
        <v-layout row justify-end>

          
        <v-btn small @click="setView()">view</v-btn>
        <v-btn small @click="navigate(true)">next</v-btn>
        <v-btn small @click="navigate(false)">prev</v-btn>
        </v-layout>
      </v-layout>
  </v-container>
</template>


<script>
import CalendarView from "@/components/CalendarView.vue";
import { mapState } from 'vuex'

export default {
  data(){
    return {
    }
  },
  mounted() {
    console.log("mounted agenda");
    this.$store.dispatch("addDummyData");
  },

  methods:{
    navigate(isForward){
      this.$store.dispatch("navigate",isForward);
    },
    setView(){
      this.$store.dispatch("setView");
    }
  },

  components: {
    CalendarView
  },

  computed:mapState({
    view: state => state.calendar.view,
    startDate: state => state.calendar.viewStartDate
  })
};
</script>
