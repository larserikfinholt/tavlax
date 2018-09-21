<template>
<v-layout>
         <v-flex xs12 sm6 md3>
           <v-text-field  v-model="person.name"  label="Fornavn"  required></v-text-field>
        </v-flex>

        <v-flex xs12 sm6 md3>
           <v-text-field type="number"  v-model.number="person.age"  label="Alder"  required></v-text-field>
        </v-flex>
</v-layout>
           
</template>

<script>
export default {
  props: ["person"],
};
</script>

<style>
</style>
