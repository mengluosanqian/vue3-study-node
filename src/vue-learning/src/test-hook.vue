<template>
  <p>x的坐标是：{{point.x}}</p>
  <p>y的坐标是：{{point.y}}</p>
</template>

<script>
import usePoint from '@/hooks/usePoint'
export default {
    name: 'testHook',
    setup(props) {
      let point = usePoint()
        return {
           point
        }
    }
}
</script>

<style>

</style>