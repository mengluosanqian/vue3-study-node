<template>
  <h1></h1>
  <button @click="test">测试向父组件传值</button>
</template>

<script>
import { reactive } from '@vue/reactivity';
export default {
    name: 'Test',
    props:['msg','msg2'],
    emits:['sayHi'],
    setup(props,context) {
        console.log(props,context);
        let person = reactive({
            name: '张三',
            age: 24
        })
        function test(params) {
            context.emit('sayHi',person.name)
        }
        return {
            person,
            test
        }
    }
}
</script>

<style>

</style>