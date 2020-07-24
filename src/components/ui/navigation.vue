<template>
  <div class="navigation relative bottom-0 space-x-8 shadow-md border-2 border-blue rounded-full py-2 px-8 text-xs">
      <button @click="$emit('prevPage')" :disabled="prevDisabled" class="text-primary  font-bold">
        <span class="icon-circle-left block text-md"></span>
        <!-- <img class="w-10 m-auto" src="content/images/back-btn.svg"> -->
        back
      </button>
      <button @click="$emit('nextPage')" :disabled="nextDisabled" class="text-blue  font-bold">
        <span class="icon-circle-right block  text-md"></span>
        <!-- <img class="w-10 m-auto" src="content/images/next-btn.svg"> -->
        next
      </button>
  </div>
</template>

<script>
  export default {
    props: ['prevDisabled', 'nextDisabled']

  }
</script>

<style lang="scss" scoped>
.navigation{
  // transform: translate(-50%, 0);
  // left: 50%;
}
</style>