<template>
   <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
        <h1>Agenda</h1>
        <TaskList :tasks="tasks"></TaskList>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>


<script>
import TaskList from "@/components/TaskList.vue";

export default {
  mounted() {
    console.log("mounted agenda");
    this.$store.dispatch("addDummyData");
  },

  computed: {
    tasks() {
      return this.$store.state.agenda.tasks;
    }
  },
  components: {
    TaskList
  }
};
</script>
