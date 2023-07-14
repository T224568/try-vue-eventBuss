<template>
  <div></div>
</template>
<script>
export default {
  name: "receive",
  created() {
    // [註冊監聽事件]
    this.$bus.$on("specialEvent", event => {
      toastr.info(event.msg, event.title);
    });
  },
  beforeDestroy: function() {
    // [銷毀監聽事件]
    // 最好在组件銷毀前，清除 specialEvent 所有監聽
    // 如果要指定哪個監聽對應方法，就需要傳入第二個參數(對應$on設定的方法)
    this.$bus.$off("specialEvent");
  }
};
</script>