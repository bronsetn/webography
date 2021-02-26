<template>
  <div class="about">
    <div class="content">
      <h2>A page for interesting typography, design and tricks possible on the web.</h2>
      <p>Many of the designs showcased are inspired or made by some of the many of the other resources out there. The point of this page is to gather some of the designs I find interesting in one place,
        I especially look for styling that can be implemented with relative ease.</p>
      <p>I decided on making this page as a smaller personall project because I find typography with CSS to be kinda neat.</p>
    </div>

    <div class="content">
      <h2>Resources</h2>
      <ol>
        <li><a
            href="https://freefrontend.com/css-text-effects"
            rel="noopoener"
            target="_blank"
          >
            https://freefrontend.com/css-text-effects</a>
           *Collection of free HTML and CSS text effect code examples.
        </li>

        <li><a
            href="https://type-scale.com"
            rel="noopoener"
            target="_blank"
          >
            https://type-scale.com</a> *Tool for testing out text sizes with different google fonts</li>

        <li><a
            href="https://colorable.jxnblk.com"
            rel="noopoener"
            target="_blank"
          >
            https://colorable.jxnblk.com</a> *For testing text color contrast</li>
      </ol>
    </div>
  </div>
</template>

<script>

export default {
  name: 'About',

}
</script>

<style scoped>
.content {
  height: 100%;
  max-width: 50em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.content, h2 {
  padding-bottom: 10px;
}

.content, p {
  padding: 10px;
}

ol {
  list-style-type: upper-roman;
  list-style-position: inside;
}
ol, li {
  padding: 2px;
}

</style>
