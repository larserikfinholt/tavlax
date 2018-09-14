<template>
    <v-layout v-bind="binding">
        
        <Day class="day" v-for="(d,i) in dates" :key="i"  :date="d" :class="{'is-past':(d<today)}" ></Day>
        <Day class="day" v-for="(d,i) in dates2" :key="i"  :date="d" sm-and-down ></Day>
        </v-layout>
</template>

<script>
import moment from 'moment';
import Day from '@/components/Day.vue';

export default {
  props: ["date"],
  data(){
      return {
          dates:[],
          dates2:[],
          today:new Date()
      }
  },
  mounted(){
    let monday = moment(this.date).weekday(0);
    let tmp = [];
    for (let i = 0; i < 7; i++) {
        tmp.push(moment(monday).add(i,'days'));
    }
    this.dates = tmp;
    let tmp2 = [];

    for (let i = 7; i < 14; i++) {
        tmp2.push(moment(monday).add(i,'days'));
    }
    this.dates2 = tmp2;
    console.log('week', this.dates);
  },
  components: {
    Day
  },
      computed: {
      binding () {
        const binding = {}

        if (this.$vuetify.breakpoint.smAndUp) {
          binding.column = false;
        } else {
          binding.column = true;
        }
          console.log('breakpoint', this.$vuetify.breakpoint);

        return binding
      }
    }

};
</script>

<style>
.scroll-x{
    /* width: 600px; */
}
@media (max-width: 480px) { 
.is-past{
display: none;
} 
}
.day{
  margin: 2px;
}
</style>
