<template>
<div id="app-wrapper">
    <Menu/>
</div>
</template>
<script lang="ts">
import { defineComponent} from "vue";
import Menu from './components/Menu.vue'
export default defineComponent({
    components:{Menu}
})
</script>
<style lang="scss" scoped>
#app-wrapper{}
</style>