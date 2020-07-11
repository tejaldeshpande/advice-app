<template>
  <div id="Home" class="h-full  bg-cover bg-center  bg-teal" style="background-image: url('content/images/triangles.svg');  ">

    <div class="flex-wrap ">
      <container class="py-10 px-4">
        <h1 class="heading">Looking for advice?</h1>
        <h2 class="subtitle">Choose an option below:</h2>
        <options @search="search" @get-advice="getAdvice" class="my-8"></options>
        <h2 class="subtitle mb-8">Or select a category:</h2>
        <div class="space-y-6 px-4">
          <category @click="search(cat)" v-for="cat in categories" :key="cat">{{cat}}</category>
        </div>
      </container>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

  export default {
    data() {
      return {
        categories: ['work', 'life', 'friends', 'happiness'],
        count: 0,
        results: []
      }
    },
    methods: {
      search(searchTerm) {
        this.$store.commit('setSearchTerm', searchTerm)
        axios
        .get(`https://api.adviceslip.com/advice/search/${searchTerm}`)
        .then(response => {
          this.$store.commit('setResults', response.data.slips)
        })
        .finally(() => this.$router.push('results'))
      },
      getAdvice(){
        for(var i = 0; i <= 1; i++){
          axios
          .get('https://api.adviceslip.com/advice')
          .then(response => (this.results.push(response.data.slip.advice)))
        }
        this.$store.commit('setAdvice', this.results)
        console.log(this.$store.state.adviceArray);
        setTimeout(() => {
          this.$router.push('advice');
        }, 1200);
      }
    }

  }
</script>

<style lang="scss">
#Home{

}
</style>