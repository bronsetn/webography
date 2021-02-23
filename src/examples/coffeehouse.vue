<template>
  <div class="container">
    <p class="calligraphy">Welcome to</p>
    <div class="bold">
      <p>Hot</p>
      <p>Coffee</p>
      <p>Café</p>
    </div>
    <p class="calligraphy">Your local coffehouse</p>
  </div>
</template>

<script>
export default {

}
</script>


<style scoped>
    /* Cookie */
@import url('https://fonts.googleapis.com/css2?family=Cookie&display=swap');

/* Ultra */
@import url('https://fonts.googleapis.com/css2?family=Ultra&display=swap');

* {
  margin: 0;
  text-align: center;
  --text-color: black;
  --bold-shadow: #8BA0E4;
  background-color: #fff;
}

.container {
  outline: 1px solid var(--text-color);
  padding: 10px;
  margin: 4px;
}

.calligraphy {
  margin: 10px;
  font-family: 'Cookie', cursive;
  font-size: 3em;
  color: var(--text-color);

  /* Grid for lines on either side */
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  grid-template-rows: 25px 0;
  grid-gap: 20px;
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
.bold p {
    font-size: 4em;
}

.bold p:nth-child(2) {
  font-size: 5em;
}
</style>