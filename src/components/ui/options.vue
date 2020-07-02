<template>
  <div class="flex">
    <container @click.native="$router.push('advice')" class="bg-burgundy m-2 py-6 text-white">
      <span class="icon-envelope text-lg"></span>
      <div class="text-reg">give me advice!</div>
    </container>
    <container class="bg-burgundy m-2 py-6 text-white">
      <div>
        <span class="icon-search text-lg"></span>
        <!-- <input/> -->
      </div>
      <div class="text-reg ">search a<br>topic!</div>
    </container>
  </div>
</template>

<script>
  export default {

  }
</script>

<style lang="scss" scoped>

</style>