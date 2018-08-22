<template>
    <div>
        {{date}}
        <Day v-for="(d,i) in dates" :key="i"  :date="d"></Day>
    </div>
</template>

<script>
import moment from 'moment';
import Day from '@/components/Day.vue';

export default {
  props: ["date"],
  data(){
      return {
          dates:[]
      }
  },
  mounted(){
    let monday = moment(this.date).weekday(0);
    let tmp = [];
    for (let i = 0; i < 7; i++) {
        tmp.push(moment(monday).add(i,'days'));
    }
    this.dates = tmp;
    console.log('week', this.dates);
  },
  components: {
    Day
  }
};
</script>

<style>
</style>
