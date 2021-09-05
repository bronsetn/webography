<template>
  <div>
    <h2>Text with image background</h2>
    <p><a
        hreF="https://codepen.io/bronsetn/pen/oNwzPvX"
        rel="noopoener"
        target="_blank"
      >https://codepen.io/bronsetn/pen/oNwzPvX
        <fa-icon
          :icon="['fab', 'codepen']"
          size="1x"
        />
      </a></p>

    <div class="container">

      <h2 class="bg-text">CLipped text</h2>
    </div>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Lato:wght@900&display=swap');

* {
  --background-color: #040607;
}

.container {
  height: 100%;
  width: 100%;
  min-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background-color);
  background: url("https://picsum.photos/id/229/600/400") no-repeat;
  background-size: cover;
}

.bg-text {
  font-family: 'Lato', sans-serif;
  text-transform: uppercase;
  font-size: 5rem;
  padding: 10px;
  line-height: 1;
  -webkit-background-clip: text;
  background-clip: text;
  background-image: url("https://picsum.photos/id/229/600/400");
    color: rgb(84 105 117);
  position: relative;
  mix-blend-mode: hard-light;

}
.bg-text::after {
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    background: var(--background-color);
    mix-blend-mode: screen;
}
</style>