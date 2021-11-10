<template>
  <!-- vue3组件中的模板语法可以没有根标签 -->
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div>
    <div>
      <p>{{ person.name }}</p>
      <p>{{ person.age }}</p>
      <p>{{ person.sex }}</p>
      <p>{{ person.job.type }}</p>
      <p>{{ person.job.salary }}</p>
      <p>{{ person.info.second.third.aa }}</p>
      <p v-for="(p, index) in person.color" :key="index">{{ p }}</p>
    </div>
    <button @click="changeInfo">修改信息</button>
    <button @click="addSex">添加性别</button>
    <button @click="delAge">删除年龄</button>
  </div>
  <Test :msg="'hello'" :msg2="'world'" @sayHi="sayHi">
    <template v-slot:chacao> 

    <span>测试插槽</span>
    </template>
  </Test>
</template>

<script>
import Test from '@/vue-learning/src/test'
// import HelloWorld from './components/HelloWorld.vue'
import { h, reactive, ref } from "vue";
export default {
  name: "App",
  components: {
    Test
  },
  // 暂时测试一下setup函数
  beforeCreate() {
    console.log('----beforeCreate-----');
  },
  setup(prop, context) {
    console.log('------setup-------',this);
    console.log(prop, context);
    console.log(context.slots);
    console.log(context.attrs,'相对于vue2.x中的$attrs');
    let person = reactive({
      name: ref("张三"),
      age: ref(24),
      color: reactive(["blue", "red", "yellow"]),
      job: ref({
        type: "前端",
        salary: "30k",
      }),
      info: reactive({
        address: "bj",
        phone: "131313432",
        second: {
          third: {
            aa: "aaa",
          },
        },
      }),
    });
    function sayHi(val) {
      console.log(`hi,参数是${val}`);
    }
    function sayHello() {
      console.log(`hello,my age is ${person.age.value},my name is ${person.name.value}`);
    }
    function changeInfo() {
      person.name = "李四";
      person.age = 35;
      person.job.type = "java";
      person.info.phone = "131222222"; //使用reactive定义的不需要再.value
      person.info.second.third.aa = "aaaaaaaaaa";
      person.color[0] = "green"; // vue3也可以直接通过角标修改数组中的数据，vue2必须借助七个改变原数组的方法
    }
    function addSex() {
      person.sex = '男'
    }
    function delAge() {
      delete person.age
    }
    // 对象：对象中的方法、属性，在模板中均可直接使用
    return {
     person,
      sayHello,
      changeInfo,
      addSex,
      delAge,
      sayHi
    };

    // 渲染函数
    // return () => h('h1','lw')
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
