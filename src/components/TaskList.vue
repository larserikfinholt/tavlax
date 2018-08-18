<template>
    <div>
        <div v-for="(task, i) in tasks" :key="i">
            <Task :task="task"></Task>
        </div>
    </div>
</template>

<script>
import Task from '@/components/Task.vue';
export default {
  props: ["tasks"],
  components: {
    Task
  }
};
</script>

<style>
</style>
