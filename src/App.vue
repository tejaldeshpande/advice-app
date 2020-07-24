<template>
  <div id="app">
    <nav-header></nav-header>

    <router-view class="p-8 app-viewport flex justify-center items-center flex-col "/>
  </div>
</template>

<script>
import navHeader from '@/components/nav/header'

  export default {
    components: {
      navHeader
    },

  }
</script>


<style lang="scss">
@import '~@/sass/variables.scss';

body,html{
  background: white;
  -webkit-touch-callout: none; /* iOS Safari */
  -webkit-user-select: none;
  /* Safari */
  -khtml-user-select: none;
  /* Konqueror HTML */
  -moz-user-select: none;
  /* Old versions of Firefox */
  -ms-user-select: none;
  /* Internet Explorer/Edge */
  user-select: none;
  /* Non-prefixed version, currently supported by Chrome, Opera and Firefox */
  -webkit-overflow-scrolling: auto;
  -webkit-tap-highlight-color: transparent;
}

#app {
  font-family: Raleway;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  font-weight: 600;
  height: 100vh;

  .app-viewport{
    height: 100vh;

    &.no-pad{
      padding: 0;
    }
  }
}

.heading{
  color: $color-primary;
  font-size: $size-heading;
  font-family: $font-heading;
  font-weight: 300;

}
.subtitle{
  color: $color-primary;
  font-size: $size-subtitle;
}
.box-shadow{
  top: -6px;
  width: 97% !important;
  left: 50%;
  transform: translateX(-50%);
  z-index: -1;
}
</style>
