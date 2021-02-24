<template>
  <div>
    <h2>Parrallax</h2>
    <p><a
        hreF="https://codepen.io/bronsetn/pen/VwmMXyV"
        rel="noopoener"
        target="_blank"
      >https://codepen.io/bronsetn/pen/VwmMXyV</a></p>

    <div class="container">

      <p class="parrallax">
        Parrallax
        <br>
        Effect
      </p>

    </div>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');

* {
  margin: 0;
--glitch-color-red: rgb(225, 32, 10);
--glitch-color-blue: rgb(75, 188, 213);
}

.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
}

.parrallax {
font-family: 'Raleway', sans-serif;  
font-style: italic;
font-size: 3em;
color: #fff;
letter-spacing: 0.2em;

 text-shadow: 
      0.15rem 0.15rem 0.15vw var(--glitch-color-blue), 
      0.25rem 0.25rem 0.8vw var(--glitch-color-blue), 
      -0.15rem -0.15rem 0.15vw var(--glitch-color-red), 
      -0.25rem -0.25rem 0.8vw var(--glitch-color-red);
}
</style>