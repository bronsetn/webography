<template>
  <div class="header">
    <ul class="nav">
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
}

.nav {
   padding-top: 50px;
}

li {
  display: inline;
  padding: 1em;
}


</style>
