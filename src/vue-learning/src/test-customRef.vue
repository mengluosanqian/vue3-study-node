<template>
  <input type="text" v-model="keyWord" />
  <h3>{{ keyWord }}</h3>
  <div>
    <button @click="show = true">打开弹窗</button>
  </div>
  <Suspense>
    <template v-slot:default>
      <TestTeleport :show="show" @open="open" @close="close" />
    </template>
    <template v-slot:fallback>
        <h3>加载中</h3>
    </template>
  </Suspense>
  <div>
    <button @click="show = false">关闭弹窗1</button>
  </div>
</template>

<script>
import { ref, customRef } from "vue";
// import TestTeleport from "./test-teleport"; //静态引入
import { defineAsyncComponent } from "vue";
const TestTeleport = defineAsyncComponent(() => import("./test-teleport")); //异步引入
export default {
  name: "testCustomRef",
  components: {
    TestTeleport,
  },
  setup(props) {
    let show = ref(false);
    function open() {
      show = true;
    }
    function close() {
      console.log(11111111111);
      show = false;
    }
    //   使用vue内置的ref
    // let keyWord = ref("hello");
    // 使用自定义的ref
    function myRef(value) {
      let timer;
      //   自带防抖处理
      console.log("--myRef--", value);
      return customRef((track, trigger) => {
        return {
          get() {
            console.log("从自定义的myRef中读取数据", value);
            track(); // 通知vue追踪value的变化
            return value;
          },
          set(newValue) {
            console.log("通过自定义的myRef设置数据", newValue);
            clearTimeout(timer);
            timer = setTimeout(() => {
              value = newValue;
              trigger(); // 通知vue去重新解析模板
            }, 500);
          },
        };
      });
      // console.log(x);
      // return x
    }
    let keyWord = myRef("hello");
    return {
      keyWord,
      show,
      open,
      close,
    };
  },
};
</script>

<style>
</style>