<template>
  <v-app>
    <!-- Hero Section -->
    <v-container fluid class="hero-section d-flex align-center justify-center">
      <v-row class="text-center">
        <v-col cols="12">
          <!-- Conditional Rendering of Menu or Header -->
          <div v-if="!isScrolled">
            <div class="menu-container">
              <div
                class="text-white mb-4 mr-7 menu-button"
                @click="navigateTo('/')"
              >
                หน้าแรก
              </div>
              <div
                class="text-white mb-4 mr-7 menu-button"
                @click="navigateTo('/about')"
              >
                บริการของเรา
              </div>
              <div
                class="text-white mb-4 mr-7 menu-button"
                @click="navigateTo('projects')"
              >
                เกี่ยวกับเรา
              </div>
              <div
                class="text-white mb-4 mr-7 menu-button"
                @click="navigateTo('contact')"
              >
                ติดต่อเรา
              </div>
            </div>
          </div>
          <Header v-else class="sticky-header" />
          
          <h1 class="display-1 font-weight-bold mb-4" data-aos="fade-right">
            Welcome
          </h1>
          <p class="subheading" data-aos="fade-left">
            Showcasing my skills and projects with a touch of elegance
          </p>
          <v-btn
            color="primary"
            class="mt-6"
            large
            outlined
            data-aos="fade-up"
            href="#contact"
          >
            Get in Touch
          </v-btn>
        </v-col>
      </v-row>
    </v-container>

    <!-- About Section -->
    <v-container id="about" class="py-16">
      <v-row>
        <v-col cols="12" md="6" data-aos="fade-right">
          <h1 class="display-2 font-weight-bold text-blue">แนะนำตัว</h1>
          <p class="mt-4">
            โวด้า เทค เอ็นจิเนียริ่ง รับออกแบบระบบ ก่อสร้าง ติดตั้ง ควบคุมดูแล
            ปรับปรุง ซ่อมแซม จำหน่ายอุปกรณ์ ระบบบำบัดน้ำเสีย ระบบผลิตน้ำประปา
            ระบบคอนโทรลมอเตอร์ ตู้คอนโทรลต่างๆ
            ระบบการมอนิเตอร์การทำงาน-รายงานปัญหาและควบคุมผ่านมือถือ ระบบไฟฟ้า
            และอื่นๆ
            โดยบริษัทเรามีผู้เชี่ยวชาญในงานด้านต่างๆและควมคุมงานโดยวิศวะกรที่มีประสบการณ์
            จึงมั่นใจได้ว่างานที่ออกมาจะมีประสิทธิภาพสูงสุด
          </p>
        </v-col>
        <v-col
          cols="12"
          md="6"
          class="d-flex justify-center"
          data-aos="fade-up"
        >
          <v-img
            src="//cdn.vuetifyjs.com/images/parallax/material2.jpg"
            height="350"
            class="rounded"
          />
        </v-col>
      </v-row>
    </v-container>

    <!-- Projects Section -->
    <v-container id="projects" class="py-16 bg-light-blue">
      <h1
        class="text-center display-1 font-weight-bold mb-10"
        data-aos="fade-up"
      >
        Projects
      </h1>
      <v-row>
        <v-col
          v-for="project in projects"
          :key="project.title"
          cols="12"
          md="4"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <v-card class="mb-6">
            <v-img :src="project.image" height="200px" class="rounded-t" />
            <v-card-title class="font-weight-bold">{{
              project.title
            }}</v-card-title>
            <v-card-subtitle>{{ project.subtitle }}</v-card-subtitle>
            <v-card-text>{{ project.description }}</v-card-text>
            <v-card-actions>
              <v-btn
                :href="project.link"
                target="_blank"
                color="primary"
                outlined
                >View Project</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <!-- Contact Section -->
    <v-container id="contact" class="py-16">
      <h1
        class="text-center display-1 font-weight-bold mb-8"
        data-aos="fade-up"
      >
        ติดต่อ
      </h1>

      <!-- เบอร์โทร -->
      <div class="text-center mb-4">
        <v-icon small class="mr-2">mdi-phone</v-icon>
        <span>02-3010-532, 08-0640-3371</span>
      </div>

      <!-- อีเมล -->
      <div class="text-center mb-4">
        <v-icon small class="mr-2">mdi-email</v-icon>
        <span>Woda_Tech@hotmail.com, Wodatechengineering@gmail.com</span>
      </div>

      <!-- ที่อยู่ -->
      <div class="text-center mb-4">
        <v-icon small class="mr-2">mdi-map-marker</v-icon>
        <span>
          สำนักงาน จ.ศรีสะเกษ 112/4 โนนสำราญซอย 2 ตำบลหญ้าปล้อง
          อำเภอเมืองศรีสะเกษ จังหวัดศรีสะเกษ 33000
        </span>
      </div>
      <div class="text-center">
        <v-icon small class="mr-2">mdi-map-marker</v-icon>
        <span>
          สำนักงาน กรุงเทพ 101/81 สำเพ็ง 2 ถนนกัลปพฤกษ์ เขตบางบอน กรุงเทพ 10150
        </span>
      </div>
    </v-container>
  </v-app>
</template>


<script setup>
import { ref, onMounted } from "vue";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "~/components/Header.vue";

// Sample project data
const projects = ref([
  {
    title: "Project One",
    subtitle: "Web Application",
    description:
      "An innovative web application built with modern technologies.",
    image: "https://via.placeholder.com/400",
    link: "https://example.com",
  },
  {
    title: "Project Two",
    subtitle: "Mobile App",
    description: "A sleek mobile app designed for seamless user experience.",
    image: "https://via.placeholder.com/400",
    link: "https://example.com",
  },
  {
    title: "Project Three",
    subtitle: "E-commerce Site",
    description:
      "A high-performance e-commerce platform for online businesses.",
    image: "https://via.placeholder.com/400",
    link: "https://example.com",
  },
]);

// Reactive variable to track scroll position
const isScrolled = ref(false);

// Function to handle scroll event
const handleScroll = () => {
  if (window.scrollY > 80) {
    // Adjust threshold as needed
    isScrolled.value = true;
  } else {
    isScrolled.value = false;
  }
};

onMounted(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });

  window.addEventListener("scroll", handleScroll); // Add scroll event listener
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll); // Clean up event listener
});
</script>

<style scoped>
.hero-section {
  background-image: url("//cdn.vuetifyjs.com/images/parallax/material2.jpg");
  background-size: cover;
  background-position: center;
  height: 80vh;
  color: white;
  text-align: center;
  position: relative; /* ตั้งให้ hero-section มีตำแหน่งที่สัมพันธ์ */
}

/* Background Color for Projects Section */
.bg-light-blue {
  background-color: #f0f8ff;
}

/* Text Styling */
.font-weight-bold {
  font-weight: 700;
}

/* Menu Container Styles */
.menu-container {
  position: absolute; /* Position relative to the hero section */
  top: 20px; /* Adjust as necessary */
  right: 20px; /* Adjust as necessary */
  display: flex; /* Use flexbox for inline layout */
  flex-direction: row; /* Keep items in a row */
}

.menu-button {
  position: relative;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  transition: color 0.3s ease, transform 0.3s ease;
}

.menu-button:hover {
  color: blue;
  transform: scale(1.05); /* Slightly enlarges the text on hover */
}

.menu-button::after {
  content: "";
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: 2px;
  background-color: blue;
  transform: scaleX(0);
  transition: transform 0.3s ease;
}

.menu-button:hover::after {
  transform: scaleX(1); /* Full-width underline animation */
}

/* Sticky Header Styles */
.sticky-header {
  position: fixed; /* Make header fixed */
  top: 0; /* Stick to the top */
  left: 0; /* Align to the left */
  right: 0; /* Align to the right */
  background-color: white; /* Background color of header */
  z-index: 1000; /* Ensure it's on top */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Optional shadow for effect */
}
</style>

