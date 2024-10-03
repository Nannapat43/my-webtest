<template>
    <v-container>
      <v-row>
        <v-col
          v-for="project in projects"
          :key="project.id"
          cols="12"
          md="4"
        >
          <ProjectCard :project="project" />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  import ProjectCard from '~/components/ProjectCard.vue';
  
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'Description of Project 1',
      image: '/images/project1.jpg',
      link: '#',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'Description of Project 2',
      image: '/images/project2.jpg',
      link: '#',
    },
    // Add more projects as needed
  ];
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  