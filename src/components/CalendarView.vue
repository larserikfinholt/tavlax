<template>
    <v-layout v-bind="binding">
        <Day class="day" v-for="(d,i) in dates" :key="i"  :date="d" :class="{'is-past':(d<today)}" ></Day>
    </v-layout>
</template>

<script>
import moment from "moment";
import Day from "@/components/Day.vue";

export default {
  props: ["startDate", "view"],
  data() {
    return {
      today: new Date()
    };
  },
  mounted() {},
  components: {
    Day
  },
  computed: {
    dates() {
      console.log("computed dates", this.startDate);
      let daysInView = 7;
      let firstDayInView = moment(this.startDate);
      switch (this.view) {
        case "week":
          daysInView = 7;
          firstDayInView = moment(this.startDate);
          break;
        case "3days":
          daysInView = 3;
          firstDayInView = moment(this.startDate);
          break;
        case "month":
          console.error("not implementd");
          break;
      }
      let days = [];
      for (let i = 0; i < daysInView; i++) {
        days.push(moment(firstDayInView).add(i, "days"));
      }
      console.log("View", days);
      return days;
    },
    binding() {
      const binding = {};

      if (this.$vuetify.breakpoint.smAndUp) {
        binding.column = false;
      } else {
        binding.column = true;
      }
      console.log("breakpoint", this.$vuetify.breakpoint);

      return binding;
    }
  }
};
</script>

<style>
.scroll-x {
  /* width: 600px; */
}
/* @media (max-width: 480px) { */
.is-past {
  /* display: none; */
}
/* } */
.day {
  margin: 2px;
  width: 10%;
}
</style>
