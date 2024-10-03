<template>
    <v-container>
      <v-row>
        <v-col>
          <h1>Contact Me</h1>
          <v-form>
            <v-text-field label="Your Name" required></v-text-field>
            <v-text-field label="Your Email" required></v-text-field>
            <v-textarea label="Message" required></v-textarea>
            <v-btn type="submit">Send</v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  /* Add custom styles if needed */
  </style>
  