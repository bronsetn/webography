<template>
  <div>
    <p class="parrallax">
      Parrallax
      <br>
      Effect
    </p>
  </div>
</template>

<script>
export default {
  name: 'Parrallax'
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');

* {
--glitch-color-red: rgb(225, 32, 10);
--glitch-color-blue: rgb(75, 188, 213);
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
  
  transform: translate(50%,-50%);
  top: 50%;
  position: absolute;
}
</style>