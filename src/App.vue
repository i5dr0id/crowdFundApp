<template>
  <div id="app">

	

    <app-header></app-header>
    <!-- <img src="./assets/logo.png"> -->
	<!-- <app-cp> </app-cp> -->
    <router-view/>
    <app-footer> </app-footer>
  </div>
</template>

<script>
import header from "./components/header.vue";
import footer from "./components/footer.vue";
export default {
  components: {
    "app-header": header,
	"app-footer": footer
  },
  name: 'App'
}
</script>

<style>

</style>
