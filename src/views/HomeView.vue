<template>
  <div class="home">
    <!-- <ButtonMenu/> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
// import ButtonMenu from '@/components/ButtonMenu.vue'

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    // ButtonMenu
  }
}
</script>
