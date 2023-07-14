<template>
  <div class="box">
    <button @click="doShowAlert(message)">doShowAlerts</button>
    <button @click="stopAlertBus()">stopAlertBus</button>
    <button @click="onceBus()">onceBus</button>
  </div>
</template>

<script>
import mitt from 'mitt'
const emitter = mitt()
export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      message: "我是寫在helloworld.vue的訊息"
    };
  },
  methods: {
    doShowAlert(msg) {
      this.$emitter.emit("alert:message", msg);
      this.$emitter.emit("alertmessage", 'doShowAlert');
    },
    stopAlertBus() {
      this.$emitter.emit("alertmessage", "StopAlertBus");
      
      this.$emitter.emit("stopAlertBus");
    },
    onceBus() {
      this.$emitter.emit("alertmessage", `onceBus--${this.message}`);
      
      this.$emitter.emit("onceBus");
    }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  padding: 35px 0;
}
button {
  margin-right: 30px;
}
</style>