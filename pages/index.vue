<template>
  <v-app>
    <!-- About Section -->
    <v-container id="about" class="py-20">
      <v-row>
        <v-col cols="12" md="6">
          <h2 class="display-1 font-weight-bold" data-aos="fade-right">
            About Me
          </h2>
          <p data-aos="fade-left">
            Brief description about yourself goes here. Highlight your skills,
            experiences, and what makes you unique.
          </p>
        </v-col>
        <v-col cols="12" md="6" data-aos="fade-up">
          <v-img src="https://via.placeholder.com/400" height="400" />
        </v-col>
      </v-row>
    </v-container>

    <!-- Projects Section -->
    <v-container id="projects" class="py-20">
      <h2 class="text-center display-1 font-weight-bold" data-aos="fade-up">
        Projects
      </h2>
      <v-row>
        <v-col
          v-for="project in projects"
          :key="project.title"
          cols="12"
          md="4"
        >
          <v-card class="mb-4" data-aos="fade-up" data-aos-delay="300">
            <v-img :src="project.image" height="200px"></v-img>
            <v-card-title class="font-weight-bold">{{
              project.title
            }}</v-card-title>
            <v-card-subtitle>{{ project.subtitle }}</v-card-subtitle>
            <v-card-text>{{ project.description }}</v-card-text>
            <v-card-actions>
              <v-btn :href="project.link" target="_blank" color="primary"
                >View Project</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Contact Section -->
    <v-container id="contact" class="py-20">
      <h2 class="text-center display-1 font-weight-bold" data-aos="fade-up">
        Contact Me
      </h2>
      <v-form class="max-w-md mx-auto" @submit.prevent="submitForm">
        <v-text-field
          label="Name"
          outlined
          required
          data-aos="fade-up"
        ></v-text-field>
        <v-text-field
          label="Email"
          outlined
          type="email"
          required
          data-aos="fade-up"
        ></v-text-field>
        <v-textarea
          label="Message"
          outlined
          required
          data-aos="fade-up"
        ></v-textarea>
        <v-btn
          type="submit"
          class="bg-blue-500 hover:bg-blue-700"
          data-aos="fade-up"
          >Send Message</v-btn
        >
      </v-form>
    </v-container>
  </v-app>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

const projects = ref([
  {
    title: 'Project One',
    subtitle: 'Web Application',
    description: 'Description of the project goes here.',
    image: 'https://via.placeholder.com/400',
    link: 'https://example.com'
  },
  {
    title: 'Project Two',
    subtitle: 'Mobile App',
    description: 'Description of the project goes here.',
    image: 'https://via.placeholder.com/400',
    link: 'https://example.com'
  },
  {
    title: 'Project Three',
    subtitle: 'E-commerce Site',
    description: 'Description of the project goes here.',
    image: 'https://via.placeholder.com/400',
    link: 'https://example.com'
  }
])

const submitForm = () => {
  // Handle form submission logic here
  alert('Form submitted!')
}

// Scroll to specific section
const scrollToSection = (refName) => {
  const element = document.getElementById(refName)
  element.scrollIntoView({ behavior: 'smooth' })
}

// Initialize AOS
onMounted(() => {
  AOS.init({
    duration: 1000, // Animation duration
    once: true // Whether animation should happen only once
  })
})
</script>

<style scoped>
.hero-section {
  background-image: url('/image/test.jpg'); /* Adjust with your background image */
  background-size: cover;
  background-position: center;
  color: white;
  position: relative;
}
</style>
