<template>
<div id="app-wrapper">
    <div>

    </div>
</div>
</template>
<script lang="ts">
import { defineComponent} from "vue";
export default defineComponent({
    setup(){
        const sayFn = <T>(params:T) : T=>{
            return params
        }
        console.log(sayFn('123'),"执行")
    }
})
</script>
<style lang="scss" scoped>
#app-wrapper{}
</style>