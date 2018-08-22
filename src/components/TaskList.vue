<template>
    <div>
        <div v-for="(task, i) in tasks" :key="i">
            <Task :task="task"></Task>
        </div>
    </div>
</template>

<script>
import Task from "@/components/Task.vue";
import moment from 'moment';

export default {
  props: ["date"],
  computed: {
    tasks() {
      return this.$store.state.agenda.tasks.filter(x => moment(x.startTime).isSame(moment(this.date),'day'));
    }
  },
  components: {
    Task
  }
};
</script>

<style>
</style>
