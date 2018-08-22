<template>
    <div>
        <h3>{{date|dayName}}</h3>
        <TaskList :date="date"></TaskList>
    </div>
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
