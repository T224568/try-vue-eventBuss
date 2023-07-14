<template>
    <h1>這是 A 頁面</h1>
    <p>以下是從首頁傳來的資料：</p>
    <p>{{ id }}</p>
  </template>
  <script>
  export default {
  props: ["id"]
};
  </script>