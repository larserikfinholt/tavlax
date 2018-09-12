<template>
 <v-flex >
      <v-card :color="date|color">
            <v-card-title>
              <v-layout justify-space-between="true">
              <h4>{{ date|dayName }}</h4>
              <p>{{date|date}}</p>
              </v-layout>
              </v-card-title>
            <v-divider></v-divider>
       
   <TaskList :date="date"></TaskList>
      </v-card>
 </v-flex>
</template>


<script>
import moment from "moment";
import TaskList from "@/components/TaskList.vue";

export default {
  props: ["date"],
  filters: {
    dayName: function(date) {
      return moment(date).format("dddd");
    },
    date: function(date) {
      return moment(date).format("DD MMM");
    },
    color: function(date) {
      if (moment(date).isSame(moment(), "day")) {
        return "lime";
      }
      return "lime lighten-4";
    }
  },
  components: {
    TaskList
  }
};
</script>

<style>
</style>
