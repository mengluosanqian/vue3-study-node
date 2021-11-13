<template>
<router-view></router-view>
  <!-- vue3组件中的模板语法可以没有根标签 -->
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <button style="margin-top:30px" @click="isShow = !isShow">显示、隐藏</button>
  <div v-if="isShow">
    <div>
      <p>{{ person.name }}</p>
      <p>{{ person.age }}</p>
      <p>{{ person.sex }}</p>
      <p>{{ person.job.type }}</p>
      <p>{{ person.job.salary }}</p>
      <p>{{ person.info.second.third.aa }}</p>
      <p v-for="(p, index) in person.color" :key="index">{{ p }}</p>
      <p>全名：{{ person.fullName }}</p>
      <input v-model="person.fullName" />
    </div>
    <button @click="changeInfo">修改信息</button>
    <button @click="addSex">添加性别</button>
    <button @click="delAge">删除年龄</button>
  </div>
  <div v-if="isShow">
    <Test :msg="'hello'" :msg2="'world'" @sayHi="sayHi">
    <template v-slot:chacao>
      <span>测试插槽</span>
    </template>
  </Test>

  <Suspense>
    <template v-slot:default>
      <TestWatch> </TestWatch>
    </template>
    <template v-slot:fallback>
        <h3>加载中</h3>
    </template>
  </Suspense>
  
  </div>
  
</template>

<script>
import Test from "@/vue-learning/src/test";
// import TestWatch from '@/vue-learning/src/test-watch'
// import HelloWorld from './components/HelloWorld.vue'
import { h, reactive, computed, ref, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onUnmounted,onBeforeUnmount } from "vue";
import TestWatch from "./vue-learning/src/test-watch.vue";
export default {
  name: "App",
  components: {
    Test,
    TestWatch,
  },
  // 暂时测试一下setup函数
  // 通过配置项的形式使用生命周期钩子
  // beforeCreate() {
  //   console.log("----beforeCreate-----");
  // },
  // created() {
  //   console.log("----created-----");
  // },
  // beforeMount() {
  //   console.log("----beforeMount-----");
  // },
  // mounted() {
  //   console.log("----mounted-----");
  // },
  // beforeUpdate() {
  //   console.log("----beforeUpdate-----");
  // },
  // updated() {
  //   console.log("----updated-----");
  // },
  // beforeUnmount() {
  //   console.log("----beforeUnmount-----");
  // },
  // unmounted() {
  //   console.log("----unmounted-----");
  // },
  // beforeDestroy() { //改名为beforeUnmount
  //   console.log("----beforeDestroy-----");
  // },
  // destroyed() { //改名为unmount
  //   console.log("----destroyed-----");
  // },

  // 组合api形式的生命周期钩子
  // beforeCreate ==>  setup()
  // created ==> setup()
  // beforeMount ==> onBeforeMount
  // mounted ==> onMounted
  // beforeUpdate ==> onBeforeUpdate
  // updated ==> onUpdated
  // beforeUnmount ==> onBeforeUnmount
  // unmounted ==> onUnmounted

  computed: {
    fullName() {
      return this.person.firsrName + this.person.lastName
    }
  },


  setup(prop, context) {
    console.log("----beforeCreate-----")
    console.log("----created-----")
  onBeforeMount(() => {
    console.log("----beforeMount-----");
  })
  onMounted(() => {
    console.log("----mounted-----");
  })
  onBeforeUpdate(() => {
    console.log("----beforeUpdate-----");
  })
  onUpdated(() => {
    console.log("----updated-----");
  })
  onBeforeUnmount(() => {
    console.log("----beforeUnmount-----");
  }),
  onUnmounted(() => {
    console.log("----unmounted-----");
  })


    console.log("------setup-------", this);
    console.log(prop, context);
    console.log(context.slots);
    console.log(context.attrs, "相对于vue2.x中的$attrs");
    let isShow = ref(false)
    let person = reactive({
      firsrName: "张",
      lastName: "三",
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
    // 计算属性 -- 简写（没有考虑计算属性被修改的情况）
    // person.fullName = computed(() => {
    //   return person.firsrName + '-' + person.lastName
    // })
    // 计算属性 -- 完整写法（考虑读写）
    person.fullName = computed({
      get() {
        return person.firsrName + "-" + person.lastName;
      },
      set(value) {
        const nameArr = value.split("-");
        person.firsrName = nameArr[0];
        person.lastName = nameArr[1];
      },
    });
    function sayHi(val) {
      console.log(`hi,参数是${val}`);
    }
    function sayHello() {
      console.log(
        `hello,my age is ${person.age.value},my name is ${person.name.value}`
      );
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
      person.sex = "男";
    }
    function delAge() {
      delete person.age;
    }
    // 对象：对象中的方法、属性，在模板中均可直接使用
    return {
      isShow,
      person,
      sayHello,
      changeInfo,
      addSex,
      delAge,
      sayHi,
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
