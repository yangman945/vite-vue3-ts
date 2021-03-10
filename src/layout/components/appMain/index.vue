<template>
<!-- 组件出口文件 -->
  <router-view v-slot="{ Component, route }">
        <component :is="Component"/>
  </router-view>
</template>
<script lang="ts">

import {defineComponent} from 'vue'
export default defineComponent({
  name:'appMain'                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   
})
</script>