<template>
   <v-container grid-list-xl>
    <v-layout v-bind="binding">
      <v-flex>
        <v-card dark title="Steg 1" color="primary">
          <v-card-text>one</v-card-text>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card dark color="secondary">
          <v-card-text>two</v-card-text>
        </v-card>
      </v-flex>
      <v-flex>
        <v-card dark color="accent">
          <v-card-text>three</v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
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
  }
</script>