<template>
  <div class="category relative" @click="$emit('click')">
    <div class="bg-white text-primary rounded-full shadow-md cat-text  text-sm">
      <slot></slot>
    </div>
    <span class="icon-envelope cat-icon text-reg bg-primary text-white rounded-full absolute top-0 left-0 shadow-md"></span>
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
    margin: -4px;
    padding: 14px;
  }
  .cat-text{
    padding: 7px;
  }
}

</style>