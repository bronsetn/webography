<template>
  <div>

    <h2>Pseudo trail</h2>
    <p><a
        hreF="https://codepen.io/bronsetn/pen/eYBrjZP"
        rel="noopoener"
        target="_blank"
      >https://codepen.io/bronsetn/pen/eYBrjZP
        <fa-icon
          :icon="['fab', 'codepen']"
          size="1x"
        />
      </a></p>

    <div class="container">
      <p>Hover text</p>
      <p
        class="trail"
        content="TEXT"
      >TEXT</p>
    </div>

  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Archivo+Black&display=swap');

* {
    --text: #fff;
    --background: #F72585;
    --transparent: rgba(0, 0, 0, 0);
}

p {
    color: var(--text);
}

.container {
    height: 100%;
    width: 100%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--background);
}

.trail {
    font-family: 'Archivo Black', sans-serif;
    font-size: 6em;
    font-weight: 700;
	  letter-spacing: 0.25em;
    position: relative;
    z-index: 1;
    color: var(--text);
}

.trail::before, .trail::after {
    content: attr(content);
    -webkit-text-stroke: 0px var(--text);
    -webkit-text-fill-color: var(--transparent);
    display: block;
    position: absolute;
}

.trail::before {
    bottom: 0;
    transform: translate(0em, 0em);
}

.trail::after {
    top: 0;
    transform: translate(0em, 0em);
}

.trail:hover:after, .trail:focus:after {
    animation: glitchTop ease 0.3s forwards;
}

.trail:hover:before, .trail:focus:before {
    animation: glitchBottom ease 0.3s forwards;
}

@keyframes glitchTop {
  100% {
    -webkit-text-stroke: 1px var(--text);
    transform: translate(0.5em, 0.5em);
  }
}

@keyframes glitchBottom {
  100% {
    -webkit-text-stroke: 1px var(--text);
    transform: translate(-0.5em, -0.5em);
  }
}

</style> 