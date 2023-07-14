// AddNumbers.vue
// AddNumbers.vue

<template>
  <div>
    <label for="number"></label>
    <input type="text" name="number" placeholder="Enter a number" v-model="number" />
    <button @click="addNumber">Add number</button>
  </div>
  <div>
    <input type="text" name="text" placeholder="Enter Text" v-model="text" />
    <button type="button" @click="pushData">發送至另一個元件</button>
  </div>
</template>

<script>
// import {EventBus} from '../EventBus.js' // 引入EventBus實體
import { store } from '../store.js'
import mitt from 'mitt'

const emitter = mitt()
export default {
  data() {
    return {
      number: 10,
      text: '這有一段話'
    }
  },
  methods: {
    addNumber() {
      this.$emitter.emit('addNumber', parseInt(this.number))
      store.addNumber(this.number)
    },
    pushData() {
      this.$emitter.emit('getdata', this.text);
    }
  }

}
</script>