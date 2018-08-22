<template>
          <v-list-tile>
            <v-list-tile-avatar>
              <v-icon class="blue white--text">assignment</v-icon>
            </v-list-tile-avatar>

            <v-list-tile-content>
              <v-list-tile-title>{{ task.name }}</v-list-tile-title>
              <v-list-tile-sub-title>beskrivelse</v-list-tile-sub-title>
            </v-list-tile-content>

            <v-list-tile-action>
              <v-btn icon ripple>
                <v-icon color="grey lighten-1">info</v-icon>
              </v-btn>
            </v-list-tile-action>
          </v-list-tile>
          
</template>

<script>
export default {
    props:["task"]

}
</script>

<style>

</style>
