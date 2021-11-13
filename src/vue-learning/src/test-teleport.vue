<template>
  <teleport to="body">
    <div class="mark" v-if="show">
        {{show}}
      <div class="toref" >
        <h1>这是testteleport</h1>
        <h2>姓名：{{ name }}</h2>
        <h2>年龄：{{ age }}</h2>
        <button @click="age++">年龄+1</button>
        <button @click="name += '!'">修改姓名信息</button>

        <div>
          <button @click="close">关闭弹窗</button>
        </div>
      </div>
    </div>
  </teleport>
</template>

<script>
import { ref, toRefs, reactive } from "vue";
export default {
  name: "testShallow",
  emits:['open','close'],
  props: {
    show: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    console.log(context);
    //   使用shallowReactive，只有第一层是响应式的
    let person = reactive({
      name: "张三",
      age: 18,
      job: {
        j1: {
          salary: 20000,
        },
      },
    });
    function close() {
      context.emit("close", false);
    }
    return {
      person,
      close,
      ...toRefs(person),
    };
  },
};
</script>

<style>
.mark {
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
}
.toref {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 500px;
  text-align: center;
  padding: 20px;
  background-color: blanchedalmond;
}
</style>