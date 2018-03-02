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
import cp from "./components/cp.vue";
export default {
  components: {
    "app-header": header,
	"app-footer": footer,
	"app-cp": cp,
  },
  name: 'App'
}
</script>

<style>

</style>
