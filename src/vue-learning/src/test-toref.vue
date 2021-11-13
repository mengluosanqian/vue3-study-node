<template>
  <div class="toref">
    <h1>这是testToref</h1>
    <!-- <h2>{{person}}</h2> -->
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
import { ref, reactive, toRef,toRefs } from "vue";
export default {
  name: "testToref",
  setup(props) {
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20000,
        },
      },
    });
    const x = toRefs(person)
    return {
        person,
        ...toRefs(person),
      // 这样写跳过了proxy，响应式消失了
      //   name:person.name,
      //   age:person.age,
      //   salary:person.job.j1.salary,

      // 这样写在后续修改中修改的不是原来的数据，而是新增的ref对象
    //   name: ref(person.name),
    //   age: ref(person.age),
    //   salary: ref(person.job.j1.salary),
    //   name: toRef(person, "name"),
    //   age: toRef(person, "age"),
    //   salary: toRef(person.job.j1, "salary"),
    };
  },
};
</script>

<style>
.toref {
  width: 100%;
  height: 300px;
  background-color: aquamarine;
}
</style>