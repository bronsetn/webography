<template>
  <div>

    <h2>Repeating text as background</h2>
    <p><a
        hreF="https://codepen.io/bronsetn/pen/qBqYdVL"
        rel="noopoener"
        target="_blank"
      >https://codepen.io/bronsetn/pen/qBqYdVL
        <fa-icon
          :icon="['fab', 'codepen']"
          size="1x"
        />
      </a></p>

    <div class="container">
      <svg
        class="background"
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
      >
        <defs>
          <pattern
            id="textPattern"
            width=".1"
            height="0.1"
          >
            <text
              class="bgText"
              x="10"
              y="20"
            >
              TEXT
            </text>
          </pattern>
        </defs>
        <rect
          fill="url(#textPattern)"
          width="100%"
          height="100%"
        />
      </svg>
      <div class="text-box">
        <p>REPEATING TEXT</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Racing+Sans+One&display=swap');

* {
--box-color: #d31414;
--text-color: #ffffff;
}

.container {
    height: 100%;
    width: 100%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
}

.container .background {
    position: absolute;
    display: flex;
    width: 100%;
    height: 100%;
}

.bgText {
    font-family: 'Racing Sans One', cursive;
    fill: var(--box-color);
    font-size: 1.5em;
    font-style: italic;
}

.container .text-box {
    position: absolute;
    background-color: var(--box-color);
    transform: skew(0, -1deg);
}

.container .text-box p {
    font-family: 'Racing Sans One', cursive;
    color: var(--text-color);
    transform: skew(0, 1deg);
    font-size: 5em;
    font-weight: 800;
    padding: 10px;
}

@media only screen and (max-width: 768px) {

    .container .text-box p {
        font-size: 2em;
    }

    .bgText {
        font-size: 0.8em;
        overflow: visible;
    }

}

</style>