<template>
  <div id="Advice" class="relative">
    <span class="bg absolute w-full h-full top-0 bg-teal"></span>

    <container class="rounded-b-none border-b-8 border-blue relative p-4">
      <h1 class="heading">Here’s some advice!</h1>
      <h2 class="subtitle">Swipe to see more!</h2>
      <container class="box-shadow shadow-md absolute bg-blue h-10"></container>
    </container>

    <!-- <container class="mt-8 rounded-t-none border-t-8 border-blue relative p-4 py-16 text-blue text-lg font-normal">
      <p>{{info}}</p>
      <container class="box-shadow shadow-md absolute bg-blue h-10 top-auto" style="bottom:-6px;"></container>
    </container> -->

    <agile>
          <container v-for="(result, i) in results" :key="i" class="slide mt-8 rounded-t-none border-t-8 border-blue relative p-4 py-16 text-blue text-lg font-normal">
            {{result}}
            <!-- <container class="box-shadow shadow-md absolute bg-blue h-10 top-auto" style="bottom:-6px;"></container> -->
          </container>
    </agile>

  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        info: undefined,
        results: this.$store.state.adviceArray
      }
    },
    mounted () {
      axios
      .get('https://api.adviceslip.com/advice')
      .then(response => (this.info = response.data.slip.advice));
    },

  }
</script>

<style lang="scss" scoped>
#Advice{
  display: block;
}
.bg{
  clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 50% 60%, 0% 50%);
  z-index: -1;

}
</style>