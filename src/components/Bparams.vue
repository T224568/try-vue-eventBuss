<template>
    <h1>這是 B 頁面</h1>
    <p>以下是從首頁傳來的資料：</p>
    <p>{{ user }}</p>
  </template>
<script>
export default {
    props: {
        user: {
            type: Object,
        },
    },
};
</script>
