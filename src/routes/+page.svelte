<script lang="ts">
  import { BookIcon } from 'svelte-feather-icons';
  import SpxLink from '$components/generic/SpxLink.svelte';
  import SpxPageTransition from '$src/components/generic/SpxPageTransition.svelte';
  import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: (i + 1) * 0.1,
        ease: 'easeOut',
      },
      y: '0rem',
    }),
    hidden: (i: number) => ({
      opacity: 0,
      y: '5rem',
    }),
  };
</script>

<svelte:head>
  <title>Bhagavad Gita - The Ultimate Solution</title>
</svelte:head>
<SpxPageTransition>
  <div class='w-full flex flex-col-reverse md:flex-row h-w-fill justify-end'>
    <div class='w-full md:w-1/2 md:h-full flex flex-col justify-center items-center
      flex-1 px-8 md:px-0'>
      <div class="w-full text-center md:text-left">
        <Motion
          {variants}
          animate="visible"
          initial="hidden"
          custom={4}
          let:motion
        >
          <h1 use:motion class="text-orange-500 font-bold text-5xl md:text-7xl leading-snug">Bhagavad Gita</h1>
        </Motion>
        <Motion
          {variants}
          animate="visible"
          initial="hidden"
          custom={5}
          let:motion
        >
          <h2 use:motion class="text-slate-200 text-2xl md:text-4xl font-normal mt-4">The Ultimate Solution</h2>
        </Motion>
      </div>
      <Motion
        {variants}
        animate="visible"
        initial="hidden"
        custom={7}
        let:motion
      >
        <div use:motion class="w-full mt-8 flex flex-wrap items-center justify-center md:justify-start">
          <SpxLink
            type='primary'
            label='Start Reading'
            href='/explore/'
          >
            <BookIcon class='ml-4 w-5 h-5 inline-block'/>
          </SpxLink>
        </div>
      </Motion> 
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
</SpxPageTransition>
