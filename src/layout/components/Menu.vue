<template>
  <div style="width: 100%">

    <a-menu
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      v-model:openKeys="openKeys"
      v-model:selectedKeys="selectedKeys"
      @click="clickMenuItem"
    >
      <template v-for="item in menus" :key="item.name">
          <Submenu :submenuInfo="item" />
      </template>
    </a-menu>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs, watch } from 'vue';
import Submenu from "./Submenu.vue"
import {useRoute, useRouter} from "vue-router";
import {routes} from "../../router/index";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
  MailOutlined,
  DesktopOutlined,
  InboxOutlined,
  AppstoreOutlined,
} from '@ant-design/icons-vue';
export default defineComponent({
    mounted(){
        console.log(useRoute,"useRoute")
        console.log(useRouter,"useRouter")
        console.log(routes,"路由菜单")
    },
  setup() {
      const currentRoute = useRoute()
      const router = useRouter()
    // 获取当前打开的子菜单
    const getOpenKeys = () => [currentRoute.matched[1]?.name]
    const state = reactive({
      collapsed: false,
      selectedKeys:  [currentRoute.name], //当前选中的菜单项 key 数组 : string[]
      openKeys: getOpenKeys(), //当前展开的subMenu菜单项key数组 : string[]
      preOpenKeys: ['sub1'],
    });
    const menus = routes[0].children //render router
    // 点击菜单
    const clickMenuItem = ({item, key, keyPath}) => {
      console.log(key, 'key')
      router.push({name: key})
    }
    
    watch(
      () => state.openKeys,
      (val, oldVal) => {
        state.preOpenKeys = oldVal;
      },
    );
    const toggleCollapsed = () => {
      state.collapsed = !state.collapsed;
      state.openKeys = state.collapsed ? [] : state.preOpenKeys;
    };

    return {
      ...toRefs(state),
      toggleCollapsed,
      menus,
      clickMenuItem
    };
  },
  components: {
    MenuFoldOutlined,
    MenuUnfoldOutlined,
    PieChartOutlined,
    MailOutlined,
    DesktopOutlined,
    InboxOutlined,
    AppstoreOutlined,
    Submenu
  },
});
</script>

