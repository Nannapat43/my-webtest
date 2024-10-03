<template>
    <v-card>
      <v-img :src="project.image" height="200px"></v-img>
      <v-card-title>{{ project.title }}</v-card-title>
      <v-card-text>{{ project.description }}</v-card-text>
      <v-card-actions>
        <v-btn :href="project.link" target="_blank">View Project</v-btn>
      </v-card-actions>
    </v-card>
  </template>
  
  <script setup>
  defineProps({
    project: {
      type: Object,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>

