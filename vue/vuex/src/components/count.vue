<template>
  <div class="count">
    <h3>{{$store.state.count}}</h3>
    <h2>{{count}}</h2>
    <h1>{{newCount}}</h1>
    <!-- <h1>{{msg}}</h1> -->
    <p>
      <button @click="addAction(5)">add</button>
      <button @click="$store.commit('reduce')">reduce</button>
    </p>
  </div>
</template>

<script>
import { mapState, mapMutations, mapGetters, mapActions } from 'vuex';

export default {
  // computed: {
  //   newCount () {
  //     return this.$store.state.count * 2
  //   }v
  // },
  data() {
    return {
      msg: ''
    }
  },
  // computed: mapState({
  //   newCount: state => state.count
  // }),
  computed: {
    ...mapState(['count']),
    ...mapGetters(['newCount'])
  },
  methods: {
    ...mapMutations(['reduce']),
    ...mapActions(['addAction'])
  }

  // mounted() {
  //   this.msg = mapState(['count'])
  // }
  // computed: mapState(['count'])
}
</script>

<style>
</style>