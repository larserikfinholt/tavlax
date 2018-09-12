
<template>
        <v-list two-line subheader>

            <Task v-for="(task, i) in tasks" :key="i" :task="task"></Task>

          <v-divider inset></v-divider>

          <v-subheader inset>Files</v-subheader>


          <v-list-tile
            v-for="item in items2"
            :key="item.title"
            avatar
            @click="dialog=true"
          >
            <!-- <v-list-tile-avatar>
              <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
            </v-list-tile-avatar> -->

            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
                       <v-dialog
      v-model="dialog"
      max-width="290"
    >
      <v-card>
        <v-card-title class="headline">Use Google's location service?</v-card-title>

        <v-card-text>
          Let Google help apps determine location. This means sending anonymous location data to Google, even when no apps are running.
        </v-card-text>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Disagree
          </v-btn>

          <v-btn
            color="green darken-1"
            flat="flat"
            @click="dialog = false"
          >
            Agree
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

        </v-list>

</template>

<script>
import Task from "@/components/Task.vue";
import moment from 'moment';

export default {
    data(){
        return {
            dialog:false,
             items2: [
          { icon: 'assignment', iconClass: 'blue white--text', title: 'Vacation itinerary', subtitle: 'Jan 20, 2014' },
          { icon: 'call_to_action', iconClass: 'amber white--text', title: 'Kitchen remodel', subtitle: 'Jan 10, 2014' }
        ]
        }
    },
    filters: {
    dayName: function(date) {
      return moment(date).format("dddd");
    },
    },
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
