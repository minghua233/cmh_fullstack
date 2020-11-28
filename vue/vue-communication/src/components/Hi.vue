<template>
  <div class="hi">
    <p @click="sendHi">{{hi}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      hi: 'hi, welcome!',
      hiMsg: '我是hi组件的数据'
    }
  },
  methods: {
    sendHi () {
      this.$emit('sendHi', this.hiMsg)
    }
  }
}
</script>

<style>

</style>