<template>
  <div id="Advice">
    <bg class="bg-teal"></bg>
    <div class="z-20 advice-content relative">

      <container class="rounded-b-none border-b-8 border-blue relative p-4 shadow-none">
        <h1 class="heading">Here’s some advice!</h1>
        <h2 class="subtitle">Swipe to see more!</h2>
        {{results}}
        <container class="box-shadow absolute bg-blue h-10 shadow-none"></container>
      </container>

      <!-- <container class="mt-8 rounded-t-none border-t-8 border-blue relative p-4 py-16 text-blue text-lg font-normal">
        <p>{{info}}</p>
        <container class="box-shadow shadow-md absolute bg-blue h-10 top-auto" style="bottom:-6px;"></container>
      </container> -->

      <agile ref="carousel" @after-change="checkSlide">
            <container v-for="(result, i) in results" :key="i" class="slide mt-8 rounded-t-none border-t-8 border-b-6 border-blue relative p-4  text-blue text-md font-normal h-64 flex items-center justify-center shadow-none">
              {{result}}
            </container>
      </agile>

    </div>

    <navigation @prevPage="$refs.carousel.goToPrev()" @nextPage="$refs.carousel.goToNext()" :prevDisabled="prevDisabled" :nextDisabled="nextDisabled"></navigation>

  </div>
</template>

<script>
import axios from 'axios'
  export default {
    data() {
      return {
        results: this.$store.state.adviceArray,
        prevDisabled: true,
        nextDisabled: false
      }
    },
    methods: {
      checkSlide(){
        this.prevDisabled = this.$refs.carousel.getCurrentSlide() == 0 ? true : false
        this.nextDisabled = this.$refs.carousel.getCurrentSlide() == (this.results.length - 1) ? true : false
      }
    },

  }
</script>

<style lang="scss">
#Advice{
  display: block;

  .advice-content{
    transform: translate(0, -50%);
    top: 45%;
  }
  .agile{
    .agile__actions{
      display: none;
    }
  }
  .bg{
    clip-path: polygon(0% 0%, 100% 0%, 100% 50%, 50% 60%, 0% 50%);
    //z-index: -1;

  }
}

</style>