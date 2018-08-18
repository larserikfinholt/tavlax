<template>
   <v-container fluid>
    <v-slide-y-transition mode="out-in">
      <v-layout column align-center>
    <h1>Agenda</h1>
    <ul>
<li v-for="(task, i) in tasks" :key="i">{{task.name}}</li>

    </ul>
      </v-layout>
    </v-slide-y-transition>
  </v-container>
</template>


<script>
export default {
  mounted() {
    console.log("mounted agenda");
    this.$store.dispatch('addDummyData');
    // this.$store.commit("addTask", { name: "sdfsfd" });
  },

  computed: {
    tasks() {
      return this.$store.state.agenda.tasks;
    }
  }
};
</script>
