<script>
  import "../styles/tailwind.css";
  import "../styles/global.scss";
</script>

<svelte:head>
  <link rel="icon" type="image/ico" href="/favicon.ico" />
</svelte:head>
<div class="w-full h-full max-w-full max-h-full relative
  flex flex-col">
  <div class="z-10 backdrop-blur-sm backdrop-brightness-50 min-h-screen min-w-full text-slate-100">
    <slot />
  </div>
  <div class="flex-1 absolute top-0 left-0 -z-10">
    <video
      class="bg-black h-screen w-screen top-0 left-0 bottom-0 right-0 object-cover fixed"
      controls={false}
      autoplay
      frameborder={0}
      loop
      muted
    >
      <source src="/bg-video.mp4" type="video/mp4">
      <track kind="captions"/>
    </video>
  </div>
</div>