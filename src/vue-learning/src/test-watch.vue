<template>
  <h2>当前求和为：{{sum}}</h2>
  <h2>信息：{{msg}}</h2>
  <h2>姓名：{{person.name}}</h2>
  <h2>年龄：{{person.age}}</h2>
  <h2>薪酬：{{person.job.j1.salary}}</h2>
  <button @click="sum++">点我+1</button>
   <button @click="msg += '!'">修改信息</button>
   <button @click="person.age++">年龄+1</button>
   <button @click="person.name += '!'">修改姓名信息</button>
   <button @click="person.job.j1.salary++">薪酬+1</button>
   <h2>person1姓名：{{person1.name}}</h2>
  <h2>person1年龄：{{person1.age}}</h2>
  <button @click="person1.age++">person1年龄+1</button>
   <button @click="person1.name += '!'">修改person1姓名信息</button>
</template>

<script>
import {ref,watch,reactive,watchEffect} from 'vue'
export default {
    name: 'testWatch',
    // watch: {
    //     sum(newVal,oldVal) {
    //         console.log('sum值变换了',newVal,oldVal);
    //     }
    // },
    setup(props) {
        let sum = ref(0)
        let msg = ref('你好')
        let person = reactive({
            name: '张三',
            age: 18,
            job:{
                j1:{
                    salary: 20000
                }
            }
        })
        let person1 = ref({
            name: '张三',
            age: 18,
            job:{
                j1:{
                    salary: 20000
                }
            }
        })
        watchEffect(()=>{
            // 里面用到的值发生变化就会调用watchEffect的回调函数
            const x1 = sum.value
            const x2 = person.job.j1.salary
            console.log('watchEffect所指定的回调执行了');
        })
        // 用ref定义的基本类型数据refImpl中的value是具体的值，所以watch的时候不需要.value,.value会使监视无法实现
        // 用ref定义的对象，refImpl中的value是proxy,所以watch需要写value或者写deep:true
        watch(person1,(newVal,oldVal) => {
             console.log('person1值变换了',newVal,oldVal);
        },{deep:true})
        // 情况一：监视ref所定义的一个响应式数据
        // watch(sum,(newVal,oldVal) => {
        //      console.log('sum值变换了',newVal,oldVal);
        // })

        // 情况二：监视ref所定义的多个响应式数据
        // watch([sum,msg],(newVal,oldVal) => {
        //      console.log('sum或msg值变换了',newVal,oldVal);
        // },{immediate: true, deep: true})
        // watch(msg,(newVal,oldVal) => {
        //      console.log('msg值变换了',newVal,oldVal);
        // }) 
        // 情况三：监视reactive所定义的一个响应式数据,
                    // 此处无法正确的获取oldValue
                    // 强制开起来深度监视，deep配置无效
        // watch(person,(newVal,oldVal) => {
        //     console.log('person变换了',newVal,oldVal);
        // })
         // 情况四：监视reactive所定义的一个响应式数据中的某个属性,
        // watch(() => person.age,(newVal,oldVal) => {
        //     console.log('person的age变换了',newVal,oldVal);
        // },{deep:false})
         // 情况五：监视reactive所定义的一个响应式数据中的某些属性,
        //  watch([() => person.age,() => person.name],(newVal,oldVal) => {
        //     console.log('person的age或者name变换了',newVal,oldVal);
        // })
         // 特殊情况
        //  2021-11-11 测试不写deep:true 也可以
        //  watch(() => person.job,(newVal,oldVal) => {
        //     console.log('person的job变换了',newVal,oldVal);
        // },{deep:true})
        return {
            sum,
            msg,
            person,
            person1
        }
    }
}
</script>

<style>

</style>