<template>
  <div>

    <h2>Coffeehouse</h2>
    <p><a
        hreF="https://codepen.io/bronsetn/pen/oNYGdjO"
        rel="noopoener"
        target="_blank"
      >https://codepen.io/bronsetn/pen/oNYGdjO
        <fa-icon
          :icon="['fab', 'codepen']"
          size="1x"
        />
      </a></p>

    <div class="container">
      <p class="calligraphy">Welcome to</p>
      <div class="bold">
        <p>Hot</p>
        <p>Coffee</p>
        <p>Café</p>
      </div>
      <p class="calligraphy">Your local coffehouse</p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Coffeehouse',
}
</script>

<style scoped>

    /* Cookie */
@import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');

/* Ultra */
@import url('https://fonts.googleapis.com/css2?family=Ultra&display=swap');

* {
  --text-color: #281904;
  --bold-shadow: #C78126;
  --background-color: #FFF8F0;
}

.container {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--background-color);
  padding-bottom: 25px;
}

.calligraphy {
  font-family: 'Cookie', cursive;
  font-size: 3em;
  color: var(--text-color);

  /* Grid for lines on either side */
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 35px 0;
  grid-gap: 20px;
  min-width: 500px;
}

.calligraphy::before, .calligraphy::after {
  content: " ";
  display: block;
  border-bottom: 2px solid var(--text-color);
}

.bold p {
  font-family: 'Ultra', serif;
  font-weight: bold;
  letter-spacing: 0.2em;
  font-size: 5em;
  line-height: 1.2;
  color: var(--text-color);

  text-shadow: 
        1px 1px var(--bold-shadow),
        1px 2px var(--bold-shadow),
        1px 3px var(--bold-shadow),
        1px 4px var(--bold-shadow),
        1px 5px var(--bold-shadow),
        1px 6px var(--bold-shadow),
        1px 7px var(--bold-shadow),
        1px 8px var(--bold-shadow),
        1px 9px var(--bold-shadow),
        1px 10px var(--bold-shadow);
}

.bold p:nth-child(2) {
  font-size: 6em;
}

@media only screen and (max-width: 768px) {
  .calligraphy {
  font-size: 2em;
  grid-template-rows: 25px 0;
  }
  .bold p {
    font-size: 3em;
  }
  .bold p:nth-child(2) {
  font-size: 4em;
  }
}
</style>