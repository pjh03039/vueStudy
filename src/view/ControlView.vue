<template>
  <div>
    <input type="checkbox" :value="value" :checked="value" @click="toggle" />
  </div>
</template>

<script>
export default {
  props: ['value'],
  methods: {
    toggle() {
      this.$emit('input', !this.value);
    }
  },
}
</script>

<style></style>