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
    <div class="title">
      <h1>Webography</h1>
      <p><strong>CSS Typography - Examples & Inspiration</strong></p>
      <p>Project made with VueJS, available on <a
          href="https://github.com/bronsetn/webography"
          rel="noopener"
          target="_blank"
        >Github
        </a></p>
    </div>
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

.title {
  margin-bottom: 50px;
  margin-top: 25px;
}

title, h1 {
    font-size: 2.5em;
    padding-bottom: 5px;
}

title, p {
  padding: 5px;
}

</style>
