<template>
  <div id="app-wrapper">
    <p class="hover">HelloWorld??????</p>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import Dialog from "../../components/dialog.vue";
export default defineComponent({
  components: { Dialog },
});
</script>
<style scoped lang="scss">
#app-wrapper {
  font-family: "Reggae One", CenturyGothic, "AppleGothic", sans-serif;
  display: flex;
  width: 100%;
  height: 100%;
  background: #000;
  p{
    font-size: 14vmin;
    margin: auto;
    color: #fff;
    text-shadow: 0 0 10px #0ebeff, 0 0 20px #0ebeff, 0 0 50px #0ebeff, 0 0 100px #0ebeff, 0 0 200px #0ebeff;
  }
  .hover {
    text-shadow: unset;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      text-shadow: 0 0 10px #0ebeff, 0 0 20px #0ebeff, 0 0 50px #0ebeff,
        0 0 100px #0ebeff, 0 0 200px #0ebeff;
    }
  }
}
</style>