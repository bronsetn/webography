<template>
  <div>

    <h2>Coffeehouse</h2>
    <p><a
        hreF="https://codepen.io/bronsetn/pen/oNYGdjO"
        rel="noopoener"
        target="_blank"
      >https://codepen.io/bronsetn/pen/oNYGdjO</a></p>

    <div class="container">
      <p class="calligraphy">Welcome to</p>
      <p class="bold">Hot</p>
      <p class="bold xl">Coffee</p>
      <p class="bold">Café</p>
      <p class="calligraphy">Your local coffehouse</p>
    </div>

  </div>
</template>

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
}

.calligraphy {
  font-family: 'Cookie', cursive;
  font-size: 3em;
  color: var(--text-color);

  /* Grid for lines on either side */
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 35px 0;
  grid-gap: 10px;
}

.calligraphy::before, .calligraphy::after {
  content: " ";
  display: block;
  border-bottom: 2px solid var(--text-color);
}

.bold {
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

.xl {
  font-size: 6em;
}
</style>