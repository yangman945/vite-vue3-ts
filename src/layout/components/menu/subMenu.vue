<template>
    <a-sub-menu v-if="menuInfo.children?.length" :key="menuInfo.name" v-bind="$attrs">
        <!-- v-slot:title 父级目录名称 -->
      <template v-slot:title>
        <span>
          <span>{{ menuInfo.meta.title }}</span>
        </span>
      </template>
      <!-- 嵌套路由start -->
      <template v-for="item in menuInfo.children" :key="item.name">
        <!-- 二级嵌套start -->
        <template v-if="!item.children">
          <a-menu-item :key="item.name">
              <i>22</i>
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
        </template>
        <!-- 二级嵌套end -->
        <!-- 多级嵌套start -->
        <template v-else>
          <SubMenu :menuInfo="item" />
        </template>
        <!-- 多级嵌套end -->
      </template>
      <!-- 嵌套路由end -->
    </a-sub-menu>
    <!-- 一级嵌套start -->
    <a-menu-item v-else :key="menuInfo.name">
        <i>11</i>
        <span>{{menuInfo.meta.title}}</span>
    </a-menu-item>
    <!-- 一级嵌套end -->
</template>
<script lang="ts">
import { defineComponent } from "vue";
import {Menu} from 'ant-design-vue'
export default defineComponent({
  name: "SubMenu",
  components: {
    'a-sub-menu': Menu.SubMenu,
    'a-menu-item': Menu.Item
  },
  props: {
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
});
</script>