<template>
  <div class="demo">
    {{ title }}
  </div>
</template>

<script>
export default {
  transition: 'bounce',
  asyncData (context) {
    // console.log(context)
    return {
      title: 'asuncData 内置方法会在组件实例化之前调用，此时访问不到this'
    }
  },
  layout: 'frame' // 指定layouts文件
}
</script>

<style>

</style>
