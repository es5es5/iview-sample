<template>
  <div id="mainLayout" class="clearfix">
    <div class="main_content">
      <transition name="fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
  </div>
</template>

<script>

export default {
  name: 'MainLayout'
}
</script>

<style lang="scss">
.main_content {
  width: 95%;
  max-width: 1440px;
  min-height: 30rem;
  margin: 0 auto 2rem;
}
</style>
