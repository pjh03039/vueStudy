<template>
  <div>{{ propsData }}</div>
</template>

<script>
export default {
  data() {
    return {
      emitData: "Header에서 온 값",
    }
  },
  props: ['propsData'],
  created () {
      this.$emit('emitEvent', this.emitData);
  }
}
</script>

<style>

</style>