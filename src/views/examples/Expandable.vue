<template>
  <div>
    <h2>Expandable</h2>
    <p><a
        hreF="https://codepen.io/bronsetn/pen/gOLebpB"
        rel="noopoener"
        target="_blank"
      >https://codepen.io/bronsetn/pen/gOLebpB
        <fa-icon
          :icon="['fab', 'codepen']"
          size="1x"
        />
      </a></p>

    <div class="container">
      <p>Click text</p>
      <div
        @click="showText = !showText"
        :class="classes"
      >
        <span>E</span>
        <span class="ghost">x</span>
        <span class="ghost">p</span>
        <span class="ghost">a</span>
        <span class="ghost">n</span>
        <span class="ghost">d</span>
        <span class="ghost">a</span>
        <span class="ghost">b</span>
        <span class="ghost">l</span>
        <span class="ghost">e</span>
        <span class="spaced">T</span>
        <span class="ghost">e</span>
        <span class="ghost">x</span>
        <span class="ghost">t</span>

      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      showText: false
    };
  },

  computed: {
    classes() {
      return this.showText ? 'text' : 'text hidden';
    }
  }
}
</script>

<style scoped>
/* Example is a variant of this codepen https://codepen.io/esse/pen/qxmqPQ */

@import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');

* {
--background-color: #E63946;
--text-color: #FEE5E8;
}

p {
    color: var(--text-color);
}

.container {
    height: 100%;
    width: 100%;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--background-color);
}

.text {
    font-weight: 700;
    cursor: pointer;
    font-family: 'Oxygen', sans-serif;
    display: inline-block;
    border-bottom: 0;
}

.text span {
    display: inline-block;
    font-size: 4em;
    color: var(--text-color);
    opacity: 1;
    z-index: 1;
    transition: all 0.5s ease-in-out;
    max-width: 2em;
}

.text span.ghost {
    font-size: 3em;
}

/* Create space between words in text */
.text span.spaced {
    padding-left: 0.4em;
}

.text.hidden span.spaced {
    padding-left: 0.05em;
}

/* Hidden text elements */
.text.hidden span.ghost {
    opacity: 0;
    max-width: 0;
    z-index: -1;
}

@media only screen and (max-width: 768px) {
    .text span {
        font-size: 3em;
    }
    .text span.ghost {
        font-size: 2.5em;
    }
}

</style>