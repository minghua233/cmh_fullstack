<template>
  <!-- <img
    alt="Vue logo"
    src="./assets/logo.png"
  >
  <h1>{{state.count}} * 2 = {{double}}</h1>
  <h2>{{num}}</h2>
  <button @click="add">累加</button>

  <ul>
    <Fragment :data="[5, 3, 4, 1, 8, 9, 2]" />
  </ul> -->
  <!-- <teleport-vue /> -->
  <!-- <Suspense>
    <template #default>
      <AsyncComponentVue :timeout="3000" />
    </template>
    <template #fallback>
      <h1><LoadingVue /></h1>
    </template>
  </Suspense> -->
  <TodoListVue />
</template>

<script>
// composition api
import { reactive, computed, ref, onMounted } from 'vue'
// import Fragment from './components/Fragment.vue'
// import TeleportVue from './components/Teleport.vue'
// import AsyncComponentVue from './components/AsyncComponent.vue'
// import LoadingVue from './components/Loading.vue'
import TodoListVue from './components/TodoList.vue'



export default {
  setup() { // 入口
    // const state = reactive({
    //   count: 1
    // })
    const { state, double } = useCount(1)
    let num = ref(2)

    function add() {
      state.count++
      num.value += 10
    }

    // const double = computed(() => state.count * 2)

    onMounted(() => {
      // console.log('onMounted');
    })

    return { state, add, double, num }
  },
  components: {
    // Fragment,
    // TeleportVue,
    // AsyncComponentVue,
    // LoadingVue,
    TodoListVue
  }
}

function useCount(count) {
  const state = reactive({
    count
  })
  const double = computed(() => state.count * 2)
  return {
    state, double
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
