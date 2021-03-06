<template>
  <div id="dialog-components">
    <div>
      <p @click="isDialog = true">点击我打开弹窗</p>
      <p class="dialog" v-if="isDialog">
        <teleport to="body">
          这是一个弹窗
          <button @click="isDialog = false">关闭</button>
        </teleport>
      </p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  data() {
    return {
      isDialog: false
    };
  },
});
</script>
<style lang="scss" scoped>
#dialog-components {
}
.dialog {
  width: 200px;
  height: 200px;
  background-color: red;
}
</style>