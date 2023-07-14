// DisplayNumbers.vue

<template>
  <div>
    <h2>{{ text }}</h2>
    <hr>  
    <!-- <h1>Mitt -- Event Bus </h1> -->
   Event Bus {{ numbers }}
    <!-- <h1>Store </h1> -->
   store {{ storeState }}
        <!-- <h1>Mitt -- Event Bus </h1> -->
  </div>
</template>

<script>
// import {EventBus} from '../EventBus.js'
import { store } from '../store.js'
import mitt from 'mitt'
const emitter = mitt()
export default {
  data() {
    return {
      numbers: [1, 2, 3, 5, 7],
      text: '原始資料',
      storeState: store.state.numbers
    }
  },
  methods: {
    handleAddNumber() {
      this.$emitter.on('addNumber', (payload) => {
        if (!this.numbers.includes(payload)) {
          this.numbers.push(payload)
        }
        // if (!store.state.numbers.includes(payload)) {
        //   store.state.numbers.push(payload)
        // }
      })
    }
  },
  created() {
    this.handleAddNumber() // 在建立時就開始監聽
    this.$emitter.on('getdata', (msg) => {
      this.text = msg;
    });
    this.$emitter.on('alertmessage', (msg) => {
      console.log()
      this.text = msg;
    });
    console.log(store)
  }
}
</script>