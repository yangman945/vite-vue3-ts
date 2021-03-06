<template>
    <a-menu-item :key="submenuInfo.name">
        <span>{{submenuInfo.meta.title}}</span>
      </a-menu-item>
</template>
<script lang="ts">
import { defineComponent} from "vue";
import {Menu} from 'ant-design-vue'
export default defineComponent({
    name:'menu-sub',
    components: {
    'a-sub-menu': Menu.SubMenu,
    'a-menu-item': Menu.Item
  },
  mounted () {
    console.log(this.submenuInfo) 
  },
    props:{
        submenuInfo:{
            type: Object,
            default: () => ({}),
        }
    }
})
</script>
<style lang="scss" scoped>
#app-wrapper{}
</style>