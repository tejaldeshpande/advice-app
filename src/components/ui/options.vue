<template>
  <div class="flex">
    <container v-if="!showSearch" @click.native="getAdvice" class="bg-primary m-2 py-5 text-white">
      <span class="icon-envelope text-md"></span>
      <div class="text-sm font-bold">give me advice!</div>
    </container>

    <container v-if="!showSearch" @click.native="showSearch = true" class="bg-primary grow m-2 py-5 text-white relative">
        <span class="icon-search text-md"></span>
      <div class="text-sm font-bold ">search a<br>topic!</div>
    </container>

    <container v-else class="bg-primary grow m-2 py-5 text-white relative">
      <div class="flex space-x-2 justify-center items-center pt-4 pb-2 mr-3">
        <span class="icon-search text-md"></span>
        <template v-if="showSearch">
          <input v-model="searchTerm" @keyup.enter="search" class=" bg-transparent border-3 p-1 border-white rounded-full text-white font-bold"/>
          <span @click="closeSearch()" class="icon-cross text-xxs absolute right-0 top-0 p-4"></span>
        </template>
      </div>
      <div class="text-sm font-bold" >search a topic!</div>
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