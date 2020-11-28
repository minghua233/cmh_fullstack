<template>
  <div class="b">
    bbbb
  </div>
</template>

<script>
import Bus from '@/bus/index'
export default {
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    getData() {
      Bus.$on('sendA', (val) => {
        this.msg = val
      })
    }
  }
};
</script>

<style>
</style>