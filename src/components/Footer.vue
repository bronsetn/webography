<template>
  <div class="footer">
    <div class="seperator">
      <div class="content">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
          viewBox="0 0 100 100"
        >
          <path d="M81.62,51.08c-.41,0-.82,0-1.22.06a6.19,6.19,0,0,0-6.18-5.76H9.68a6.19,6.19,0,0,0-6.2,6.18V71.63A25.42,25.42,0,0,0,28.92,97H55A25.45,25.45,0,0,0,78.81,80.54a14.47,14.47,0,0,0,2.81.27,14.87,14.87,0,1,0,0-29.73ZM80.09,75.7a24.75,24.75,0,0,0,.33-4.07V56.21a9.76,9.76,0,0,1-.33,19.49ZM48.18,45.38c7.3-9.12,5.5-14.16,3.16-16.68-3-3.24-13.46-6.57-12.1-14.88C40.81,4.24,50.08,3,50.08,3l-2,2.28c-4.46,6.06,1.2,11,4,13.63,2.28,2.19,6.63,5.78,8.09,10.81,2,7.06-11.74,15.56-12,15.68m-18.88,0C35.51,37.63,34,33.33,32,31.2c-2.56-2.76-11.45-5.59-10.29-12.66,1.33-8.16,9.22-9.22,9.22-9.22l-1.71,1.94c-3.8,5.15,1,9.33,3.37,11.59,1.94,1.86,5.65,4.92,6.88,9.19C41.22,38.09,29.3,45.38,29.3,45.38" />
        </svg>
        <p>
          <a
            href="https://erlendweb.no"
            rel="noopener"
            target="_blank"
          >Made by Erlend Brønseth</a>
        </p>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
.footer {
  bottom: 0;
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
}

/* SVG line bordering top of footer */
.seperator {
  background-image: url(../assets/seperator.svg);
  background-size: cover;
  position: absolute;
  width: 100%;
  padding-bottom: 0;
  padding-top: 200px;
}
@media only screen and (max-width: 768px) {
  .seperator {
    padding-top: 100px;
  }
}

.content {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 25px;
  padding-top: 25px;
}


svg {
  fill: none;
  stroke: var(--primary-color);
  stroke-miterlimit: 10;
  stroke-width: 2px;
}
p {
  margin-top: 10px;
}

</style>