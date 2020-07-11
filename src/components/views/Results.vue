<template>
  <div id="Results" class="bg-white">
    <container class="mb-6"><h1 class="heading">Advice for "{{searchTerm}}"</h1></container>
    <container class="p-6 py-10 space-y-8 results-container " :class="pageNumber >= pageCount -1 ? '' : 'flex flex-col justify-center' " >
        <container v-for="p in paginatedData" :key="p.id" class="bg-blue text-white p-4 text-left leading-tight">{{p.advice}}</container>
    </container>

    <div class="fixed bottom-0 space-x-10 mb-4 shadow-md border-2 border-blue rounded-full py-2 px-12 text-sm">
        <button @click="prevPage" :disabled="pageNumber==0" class="text-burgundy  font-bold">
          <span class="icon-circle-left block text-xl"></span>
          <!-- <img class="w-10 m-auto" src="content/images/back-btn.svg"> -->
          back
        </button>
        <button @click="nextPage" :disabled="pageNumber >= pageCount -1" class="text-blue  font-bold">
          <span class="icon-circle-right block  text-xl"></span>
          <!-- <img class="w-10 m-auto" src="content/images/next-btn.svg"> -->
          next
        </button>
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        results: this.$store.state.searchResults,
        pageNumber: 0,
        size: 3,
        searchTerm: this.$store.state.searchTerm
      }
    },
    methods:{
      nextPage(){
          this.pageNumber++;
      },
      prevPage(){
        this.pageNumber--;
      }
    },
    computed: {
      pageCount(){
        let l = this.results.length,
            s = this.size;
        return Math.ceil(l/s);
      },
      paginatedData(){
        const start = this.pageNumber * this.size,
        end = start + this.size;
        return this.results.slice(start, end);
      }
    },
  }
</script>

<style lang="scss">
.results-container{
  min-height: 400px;
}

button:disabled{
  color: gray;
}
button:hover:disabled{
  cursor:not-allowed;
}

</style>