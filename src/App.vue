<template>
  <div id="app">
    <div id="nav">

    </div>
    <router-view class="p-8 app-viewport flex justify-center items-center flex-col"/>
  </div>
</template>

<style lang="scss">
@import '~@/sass/variables.scss';

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
  color: $color-heading;
  font-size: $size-heading;
  font-family: $font-heading;
  font-weight: 300;

}
.subtitle{
  color: $color-heading;
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
