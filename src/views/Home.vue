<template>
  <div>
    <div class="title">
      <h1>Webography</h1>
      <a
        href="https://erlendweb.no"
        rel="noopener"
        target="_blank"
      >By Erlend Brønseth</a>
      <p>
        <strong>Stylized text with CSS - Examples & Inspiration</strong>
      </p>
    </div>
    <div class="grid-container">
      <Coffeehouse></Coffeehouse>
      <Parrallax></Parrallax>
    </div>
  </div>
</template>

<script>
import Coffeehouse from '../examples/coffeehouse.vue'
import Parrallax from '../examples/parrallax.vue'

export default {
  name: 'Home',
  components: {
    Parrallax,
    Coffeehouse
  }
}
</script>

<style scoped>
.title {
  margin: 0 auto;
  padding: 0px 0px 50px 0px;
}

/* Grid */
.grid-container {
  display: grid;
    grid-column-gap: 25px;
    grid-template-columns: 1fr 1fr;
    max-width: 80em;
    padding: 2em 1em;
    margin: 0 auto;
}

.grid-container div {
  margin-bottom: 10px;
}

@media only screen and (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}
</style>
