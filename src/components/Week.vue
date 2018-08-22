<template>
        <v-layout class="scroll-x" align-space-between justify-start row fill-height>
        
        <Day v-for="(d,i) in dates" :key="i"  :date="d"></Day>
        </v-layout>
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
.scroll-x{
    /* width: 600px; */
}
</style>
