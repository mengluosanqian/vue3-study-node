<template>
  <div class="toref">
    <h1>这是testShallow</h1>
    <h2>sum: {{sum}}</h2>
    <button @click="sum++">sum + 1</button>
    <h2>x.y: {{x.y}}</h2>
    <button @click="x.y++">x.y + 1</button>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>toRef下薪酬：{{ salary }}</h2>
    <!-- 使用toRefs 只会解构第一层 -->
    <h2>toRefs下薪酬：{{ job.j1.salary }}</h2>
    <button @click="age++">年龄+1</button>
    <button @click="name += '!'">修改姓名信息</button>
    <button @click="job.j1.salary++">薪酬+1</button>
  </div>
</template>

<script>
import { ref, reactive, toRef,toRefs,shallowReactive,shallowRef } from "vue";
export default {
  name: "testShallow",
  setup(props) {
      let sum = shallowRef(0)
    //   使用shallowRef ，如果传入的是对象，则不是响应式
    // 只处理基本类型的响应式
      let x = shallowRef({
          y: 0 
      })
    //   使用shallowReactive，只有第一层是响应式的
    let person = shallowReactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20000,
        },
      },
    });
    return {
        person,
        sum,
        x,
        ...toRefs(person),
    };
  },
};
</script>

<style>
.toref {
  width: 100%;
  height: 500px;
  background-color:blanchedalmond;
}
</style>