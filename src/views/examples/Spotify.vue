<template>
  <div>

    <h2>Card overlay text</h2>
    <p><a
        hreF="https://codepen.io/bronsetn/pen/LYbdKRV"
        rel="noopoener"
        target="_blank"
      >https://codepen.io/bronsetn/pen/LYbdKRV
        <fa-icon
          :icon="['fab', 'codepen']"
          size="1x"
        />
      </a></p>

    <div class="container">
      <div class="overlay">
        <p class="text">Text displayed, the Spotify way</p>
      </div>
    </div>

  </div>

</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Manrope:wght@600&display=swap');

* {
    --text-color: #fff;
}

.container {
    padding: 0;
    height: 100%;
    width: 100%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: url("https://picsum.photos/800/800") no-repeat;
}

.overlay {
    position: relative;
    height: 100%;
    width: 100%;
    margin: 0;
    background: linear-gradient(0deg, #00000080 25%, #ffffff00 100%);
}

.text {
    font-family: 'Manrope', sans-serif;
    color: var(--text-color);
    font-size: 2em;
    position: absolute;
    text-align: left;
    bottom: 1em;
    left: 1em;
    width: 50%;
}

@media only screen and (max-width: 768px) {
    .text {
        font-size: 1.5em;
    }
}

</style>