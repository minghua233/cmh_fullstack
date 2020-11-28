<template>
  <div class="hello">
    {{message}}
    <hr>
    <button @click="send">发送</button>
  </div>
</template>

<script>
export default {
  props: ["message"],
  data() {
    return {
      msg: "我是子组件里面的数据"
    };
  },
  methods: {
    send() {
      this.$emit('send-data', this.msg)
    }
  }
};
</script>

<style>
.hello {
  color: brown;
  font-size: 20px;
  /* width: 100px;
  height: 50px;
  border: 2px dotted aquamarine;
  margin: 0 auto; */
}
</style>