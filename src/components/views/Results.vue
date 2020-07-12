<template>
  <div id="Results" class=" ">
    <bg class="bg-aqua"></bg>
    <template v-if="results">
      <div class="z-20 relative" style="bottom:30px;">
        <container class="mb-6"><h1 class="heading">Advice for "{{searchTerm}}"</h1></container>
        <container class="p-6 py-8 space-y-8 results-container " :class="pageNumber >= pageCount -1 ? '' : 'flex flex-col justify-center' " >
            <container v-for="p in paginatedData" :key="p.id" class="bg-blue text-white p-4 text-left leading-tight text-sm">{{p.advice}}</container>
        </container>
      </div>

      <navigation @prevPage="prevPage" @nextPage="nextPage" :prevDisabled="prevDisabled" :nextDisabled="nextDisabled"></navigation>
    </template>
    <template v-else>
      <div class="z-20 relative" style="bottom:30px;">
        <container class="mb-6"><h1 class="heading">Advice for "{{searchTerm}}"</h1></container>
        <container class="p-6 py-8 space-y-8 results-container" >
            <container class="bg-blue text-white p-4 text-left leading-tight text-sm"> Sorry, no results found for "{{searchTerm}}"</container>
        </container>
      </div>
    </template>

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
    created () {
      console.log(this.results);
      ;
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
      },
      prevDisabled(){
        return this.pageNumber==0
      },
      nextDisabled(){
        return this.pageNumber >= this.pageCount -1
      },
    },
  }
</script>

<style lang="scss">
.bg{
  clip-path: polygon(0 0, 100% 0, 100% 50%, 0 38%);
}

.results-container{
  min-height: 360px;
}

button:disabled{
  color: gray;
}
button:hover:disabled{
  cursor:not-allowed;
}

</style>