<template>
  <div>
    <h2>Shadowy</h2>
    <p><a
        hreF="https://codepen.io/bronsetn/pen/JjbMPaG"
        rel="noopoener"
        target="_blank"
      >https://codepen.io/bronsetn/pen/JjbMPaG
        <fa-icon
          :icon="['fab', 'codepen']"
          size="1x"
        />
      </a></p>

    <div class="container">
      <p class="shadowy">
        DEEP SHADOWS
      </p>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Shadowy',
}
</script>

<style scoped>
/* Inspired by: https://codepen.io/agathaco/pen/KqVWEw?editors=1100 */

@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');

* {
--text-color: #F8F9FA;
--shadow-color: #495057;
--background-color: #FFEBF4;
}

.container {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background-color);
}

.shadowy {
  font-family: 'Archivo Black', sans-serif;
  text-transform: uppercase;
  letter-spacing: -0.05em;
  font-size: 5em;
  color: var(--text-color);
  text-shadow: -15px 10px 15px var(--shadow-color);
  transition: all 0.3s ease-out;
  padding: 20px;
}

.shadowy:hover {
    text-shadow: -5px 5px 5px var(--background-color);
    color: var(--shadow-color);

}

@media only screen and (max-width: 768px) {
  .shadowy {
      font-size: 3em;
  }
}

</style>