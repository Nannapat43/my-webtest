<template>
  <v-app-bar app color="white " dark flat class="px-12">
    <h1 class="text-blue font-bold">WODOTECH</h1>
    <v-spacer></v-spacer>
    <div class="text-black mb-4 mr-7 menu-button" @click="navigateTo('/')">
      หน้าแรก
    </div>
    <div class="text-black mb-4 mr-7 menu-button" @click="navigateTo('/about')">
      บริการของเรา
    </div>
    <div
      class="text-black mb-4 mr-7 menu-button"
      @click="navigateTo('projects')"
    >
      เกี่ยวกับเรา
    </div>
    <div
      class="text-black mb-4 mr-7 menu-button"
      @click="navigateTo('contact')"
    >
      ติดต่อเรา
    </div>
  </v-app-bar>
</template>

<script>
export default {
  methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
};
</script>

<style scoped>
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
  content: '';
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
</style>
