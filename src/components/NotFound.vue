<template>
  <div class="not_found">
    <h1>404 Page Not Found.</h1>
    <p>요청하신 페이지를 찾을 수 없습니다.</p>
    <router-link tag="a" :to="{name: 'Home'}">홈으로</router-link>
  </div>
</template>

<script>
export default {
  name: 'NotFound'
}
</script>

<style lang="scss" scoped>
.not_found {
  padding: 10%;
  text-align: center;
}
</style>
