<template>
  <div>
    <div class="title">
      <h1>Webography</h1>
      <strong>CSS typography- Examples & Inspiration</strong>
      <p><a
          href="https://erlendweb.no"
          rel="noopener"
          target="_blank"
        >Made by Erlend Brønseth</a></p>
      <p><a
          href="https://github.com/bronsetn/webography"
          rel="noopener"
          target="_blank"
        >Github</a></p>
      <p>
      </p>
    </div>
    <div class="grid-container">
      <Shadowy></Shadowy>
      <Coffeehouse></Coffeehouse>
      <Parrallax></Parrallax>
    </div>
  </div>
</template>

<script>
import Shadowy from '../examples/Shadowy'
import Coffeehouse from '../examples/Coffeehouse'
import Parrallax from '../examples/Parrallax'

export default {
  name: 'Home',
  components: {
    Parrallax,
    Coffeehouse,
    Shadowy
  }
}
</script>

<style>
.title {
  margin: 0 auto;
  padding: 50px 0px 50px 0px;
}

/* Grid */
.grid-container {
  display: grid;
  grid-column-gap: 1em;
  grid-template-columns: 1fr 1fr;
  max-width: 80em;
  margin: 0 auto;
}

.grid-container div {
  margin-bottom: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
}

@media only screen and (max-width: 768px) {
    .grid-container {
        grid-template-columns: 1fr;
    }
}

</style>
