<template>
  <div class="toref">
    <h1>这是testReadonly</h1>
    <h2>sum: {{sum}}</h2>
    <button @click="sum++">sum + 1</button>
    <h2>x.y: {{x.y}}</h2>
    <button @click="x.y++">x.y + 1</button>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <!-- <h2>toRef下薪酬：{{ salary }}</h2> -->
    <!-- 使用toRefs 只会解构第一层 -->
    <h2>toRefs下薪酬：{{ job.j1.salary }}</h2>
    <button @click="age++">年龄+1</button>
    <button @click="name += '!'">修改姓名信息</button>
    <button @click="job.j1.salary++">薪酬+1</button>
    <button @click="showPerson">输出最原始person</button>
  </div>
</template>

<script>
import { ref,toRefs, reactive ,toRaw} from "vue";
export default {
  name: "testReadonly",
  setup(props) {
      let sum = ref(0)
      let x = ref({
          y: 0 
      })
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20000,
        },
      },
    });
    function showPerson() {
        const p = toRaw(person)
        p.age++
        console.log(p);
    }
    return {
        person,
        sum,
        x,
        showPerson,
        ...toRefs(person),
    };
  },
};
</script>

<style>
.toref {
  width: 100%;
  height: 500px;
  background-color:burlywood;
}
</style>