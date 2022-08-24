<script>
  import { BookIcon } from 'svelte-feather-icons';
  import SpxLink from '$components/generic/SpxLink.svelte';
</script>

<div class='w-full container mx-auto min-h-fill'>
  <div class='w-full flex flex-col-reverse md:flex-row h-w-fill justify-end'>
    <div class='w-full md:w-1/2 md:h-full flex flex-col justify-center items-center
      flex-1 px-8 md:px-0'>
      <div class="w-full text-center md:text-left">
        <h1 class="text-orange-500 font-bold text-5xl md:text-7xl leading-snug">Bhagavad Gita</h1>
        <h2 class="text-slate-200 text-2xl md:text-4xl font-normal mt-4">The Ultimate Solution</h2>
      </div>
      <div class="w-full mt-8 flex flex-wrap items-center justify-center md:justify-start">
        <SpxLink
          type='primary'
          label='Start Reading'
          href='/explore/'
        >
          <BookIcon class='ml-4 w-5 h-5 inline-block'/>
        </SpxLink>
      </div>
    </div>
    <div class='w-full md:w-1/2 md:h-full flex flex-wrap items-center justify-center
      flex-1 md:justify-end'>
      <img
        src="/book.png"
        alt="Book"
        width="70%"
        height="70%"
        class="brightness-75"
      >
    </div>
  </div>
</div>
