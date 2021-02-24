<template>
  <div class="header">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <li>
        <router-link to="/about">About</router-link>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style scoped>
.header {
  top: 0px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  margin-bottom: 15px;
}

ul {
  margin: 0;
  margin-top: 25px;
  padding: 0;
  list-style-type: none;
  overflow: hidden;
}

li {
  display: inline;
  padding: 10px;
}

</style>
