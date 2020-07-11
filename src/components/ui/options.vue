<template>
  <div class="flex">
    <container v-if="!showSearch" @click.native="getAdvice" class="bg-burgundy m-2 py-6 text-white h-36">
      <span class="icon-envelope text-lg"></span>
      <div class="text-reg font-bold">give me advice!</div>
    </container>

    <container v-if="!showSearch" @click.native="showSearch = true" class="bg-burgundy grow m-2 py-6 text-white relative h-36">
        <span class="icon-search text-lg"></span>
      <div class="text-reg font-bold ">search a<br>topic!</div>
    </container>

    <container v-else class="bg-burgundy grow m-2 py-6 text-white relative h-36">
      <div class="flex space-x-2 justify-center items-center pt-4 pb-3 mr-3">
        <span class="icon-search text-lg"></span>
        <template v-if="showSearch">
          <input v-model="searchTerm" @keyup.enter="search" class=" bg-transparent border-3 p-1 border-white rounded-full text-white font-bold"/>
          <span @click="closeSearch()" class="icon-cross text-xxs absolute right-0 top-0 p-4"></span>
        </template>
      </div>
      <div class="text-reg font-bold" >search a topic!</div>
    </container>

  </div>
</template>

<script>
import axios from 'axios'

  export default {
    data() {
      return {
        showSearch: false,
        searchTerm: '',
        count: 0,
        results: []
      }
    },
    methods: {
      closeSearch() {
        this.showSearch = false;
      },
      getAdvice(){
        this.$emit('get-advice');
      },
      search(){
        this.$emit('search', this.searchTerm);

      }
    },
  }
</script>

<style lang="scss">
.grow{
  transition: width 2s ease-in;
}

</style>