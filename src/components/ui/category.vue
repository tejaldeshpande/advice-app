<template>
  <div class="category relative" @click="$emit('click')">
    <div class="bg-white text-burgundy rounded-full shadow-md p-2 font-bold">
      <slot></slot>
    </div>
    <span class="icon-envelope cat-icon text-reg bg-burgundy text-white p-4 rounded-full absolute top-0 left-0 shadow-md"></span>
  </div>
</template>

<script>
  export default {
    props: ['categories']
  }
</script>

<style lang="scss" scoped>
.category{
  .cat-icon{
    margin: -5px;
  }
}

</style>