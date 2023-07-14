<template>
  <div>
  </div>
</template>

<script>
export default {
  name: "alert",
  methods: {
    showAlert(msg) {
      alert(msg);
    },
    stopAlertBus() {
      this.$bus.$off("alert:message");
    },
  },
  created() {
    this.$bus.$on("alert:message", msg => {
      this.showAlert(msg);
    });
    this.$bus.$on("stopAlertBus", () => {
      this.stopAlertBus();
    });
    this.$bus.$once("onceBus", () => {
      console.log("I only execute once");
    });
  },
  beforeDestroy: function() {
    this.$bus.$off("alert:message");
  }
};
</script>