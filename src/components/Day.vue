<template>
 <v-flex >
   
  <!-- <v-layout row>
    <v-flex xs12 sm3> -->
        <TaskList :date="date"></TaskList>

      <!-- <v-card>
        <v-toolbar color="light-blue" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-toolbar-title>{{date|dayName}}</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>view_module</v-icon>
          </v-btn>
        </v-toolbar>

        <TaskList :date="date"></TaskList>
        
      </v-card> -->
    <!-- </v-flex>
  </v-layout> -->
 </v-flex>
</template>


<script>
import moment from 'moment'
import TaskList from '@/components/TaskList.vue'

export default {
  props: [ "date"],
  filters: {
    dayName: function(date) {
      return moment(date).format("dddd");
    },
    date:function(date) {
      return moment(date).format("dd");
    }
  },
   components: {
    TaskList
  }
};
</script>

<style>
</style>
