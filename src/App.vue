<template>
<!-- vue3组件中的模板语法可以没有根标签 -->
  <!-- <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <div>
    <div>
      <p>{{name}}</p>
      <p>{{age}}</p>
      <p>{{job.type}}</p>
      <p>{{job.salary}}</p>
      <p>{{info.second.third.aa}}</p>
      <p v-for="(p,index) in color" :key="index">{{p}}</p>
    </div>
    <button @click="changeInfo">修改信息</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import {h, reactive, ref} from 'vue'
export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // },
  // 暂时测试一下setup函数
  setup() {
    let name = ref('张三')
    let age = ref(24)
    let color = reactive(['blue','red','yellow'])
    let job = ref({
      type: '前端',
      salary: '30k'
    })
    let info = reactive({
      address: 'bj',
      phone: '131313432',
      second:{
        third:{
          aa:'aaa'
        }
      }
    })
    function sayHello() {
      console.log(`hello,my age is ${age.value},my name is ${name.value}`);
    }
    function changeInfo() { 
      name.value = '李四'
      age.value = 35
      job.value.type = 'java'
      info.phone = '131222222' //使用reactive定义的不需要再.value
      info.second.third.aa = 'aaaaaaaaaa'
      color[0] = 'green' // vue3也可以直接通过角标修改数组中的数据，vue2必须借助七个改变原数组的方法
     }
    // 对象：对象中的方法、属性，在模板中均可直接使用
    return {
      name,
      age,
      job,
      info,
      color,
      sayHello,
      changeInfo
    }

    // 渲染函数
    // return () => h('h1','lw')
  }
}
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
