<template>
  <div id="app">
    <h1>Router <a href="https://devpress.csdn.net/vue/6316a3f726059229d1c83866.html">手動加Router</a></h1>
    <router-link :to="{ path: '/' }">Home</router-link> <br>
    <router-link :to="{ path: '/hello' }">Hello2</router-link> <br>
    <router-link :to="{ name: 'hello3' }">Event Bus mitt</router-link> <br>
    <router-link :to="{ name: 'about' }">About</router-link> <br>
    <router-link :to="{ name: 'Bparams' }">B-params</router-link> <br>
    <router-link :to="{ name: 'User', params: { id: 231 } }"> User231  </router-link>

    <!-- <router-link :to="{name: 'c2f'}">CtoF</router-link> -->
    <router-view />
    <!-- <h2>Function mode（傳 params）</h2>
    <p>按按鈕後打 API，用 function mode，把 API 資料傳到 B-params 頁面</p>
    <a href="#" @click.prevent="passDataToB">去 B-params 頁面</a> -->
    <!-- <router-view name="about" /> -->
    <hr>
    <DisplayNumbers />
    <hr>

    Clicked: {{ count }} times, count is {{ evenOrOdd }}.
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <h2>
      <a href="https://github.com/vuejs/vuex/tree/main/examples/composition">Vue Example Gitub</a>
      {{ this.$store.state.message }}
      {{ this.$store.state.numbers }}
      <a href="https://ithelp.ithome.com.tw/articles/10248514">Vuex IT 鐵人賽</a>
    </h2>
    <AddNumbers />
  </div>
</template>

<!-- <script>
import AddNumbers from './components/AddNumbers.vue'
import DisplayNumbers from './components/DisplayNumbers.vue'

export default {
  name: 'App',
  components: {
    AddNumbers,
    DisplayNumbers
  }
}
</script> -->
<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  methods: {
    passDataToB() {
      fetch("https://randomuser.me/api/")
        .then((res) => res.json())
        .then((res) => {
          this.$router.push({
            name: "Bparams",
            params: {
              ...res.results[0],
            },
          });
        })
        .catch((err) => console.log(err));
    },
  },
  setup() {
    const store = useStore()

    return {
      count: computed(() => store.state.count),
      evenOrOdd: computed(() => store.getters.evenOrOdd),
      increment: () => store.dispatch('increment'),
      decrement: () => store.dispatch('decrement'),
      incrementIfOdd: () => store.dispatch('incrementIfOdd'),
      incrementAsync: () => store.dispatch('incrementAsync')
    }
  }
}
</script>