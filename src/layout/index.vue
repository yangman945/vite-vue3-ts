
<template>
  <a-layout id="layout-wrapper">
      <!-- 左侧导航栏 -->
    <a-layout-sider>
      <layoutLeft />
    </a-layout-sider>
    <!-- 右侧内容 -->
    <a-layout>
      <!-- 右侧顶部内容 -->
      <a-layout-header></a-layout-header>
      <!-- 右侧主体内容 -->
      <a-layout-content>
          <AppMain />
      </a-layout-content>
      <!-- 右侧底部内容 -->
      <a-layout-footer></a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script lang="ts">
import AppMain from './components/appMain/index.vue'
import {defineComponent} from 'vue'
import layoutLeft from './layoutLeft.vue'
export default defineComponent({
    components:{layoutLeft,AppMain},
})
</script>
<style lang="scss">
#layout-wrapper{
    height: 100vh;
}
</style>
