<script>
  import "../styles/tailwind.css";
  import "../styles/global.scss";
</script>

<svelte:head>
  <link rel="icon" type="image/ico" href="/favicon.ico" />
</svelte:head>
<div class="w-full max-w-full min-h-fill h-full relative flex flex-col bg-gradient-app">
  <div class="z-10 h-full min-h-fill min-w-full text-slate-100">
    <slot />
  </div>
</div>

<style lang="scss">
  .bg-gradient-app {
    background: #2587a8;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #9e500c, #2587a8);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #9e500c, #2587a8); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
  }
</style>