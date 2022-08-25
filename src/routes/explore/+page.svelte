<script lang='ts'>
  import type { PageData } from './$types';
  import { browser } from '$app/env'; 
  import SpxTopBar from '$components/generic/SpxTopBar.svelte';
  import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
  import SpxPageTransition from '$src/components/generic/SpxPageTransition.svelte';

  export let data: PageData;

  const variants = {
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: (i + 1) * 0.05,
        ease: 'easeOut',
      },
      y: '0rem',
      rotateY: '0deg',
      transformOrigin: 'center',
      perspective: '450px',
    }),
    hidden: (i: number) => ({
      opacity: 0,
      y: '5rem',
      rotateY: '180deg',
      transformOrigin: 'center',
      perspective: '450px',
    }),
  };
</script>

<svelte:head>
  <title>GITA - All Chapters</title>
</svelte:head>
<SpxPageTransition>
  <div class="bg-slate-800/60 w-full h-full p-4 gap-y-4 flex flex-col min-h-fill">
    <SpxTopBar>
      <div class="flex flex-wrap gap-x-6 bg-gradient-to-br from-red-500 via-amber-500 to-amber-600
      bg-clip-text text-transparent text-lg">
        <h2 class="font-bold">
          Index
        </h2>
      </div>
    </SpxTopBar>

    <h3 class="font-bold text-2xl text-slate-100 text-center">
      All Chapters
    </h3>
    
    {#if browser}
    <Motion
      let:motion
      animate="visible"
      initial="hidden"
      {variants}
    >
      <div
        class="w-full p-2 grid grid-cols-1 md:grid-cols-2
          lg:grid-cols-3 xl:grid-cols-4 gap-2"
        use:motion
      >
      {#each data.chapters as chapter, index}
        <Motion
          {variants}
          animate="visible"
          initial="hidden"
          custom={index + 1}
          let:motion
        >
          <a
            class="bg-slate-900 py-8 px-4 rounded-md
              flex flex-col gap-y-2
              focus:outline-none focus:ring focus:ring-orange-500
              focus:bg-orange-900 focus:text-opacity-80
              hover:bg-orange-900 hover:shadow-lg hover:shadow-orange-700/20
              transition-all duration-300 ease-in-out group"
            href={`/explore/${chapter.chapter_number}/`}
            sveltekit:prefetch
            use:motion
          >
            <div class="w-full flex flex-wrap items-center justify-between">
              <h4 class="text-2xl font-semibold text-slate-100">
                {chapter.name}
              </h4>
              <span class="text-2xl font-normal text-orange-600 group-hover:text-orange-200 pr-2">
                {chapter.chapter_number}
              </span>
            </div>
            <ul class="list-disc pl-4">
              <li class="text-slate-400 group-hover:text-amber-500 text-lg font-normal
                w-full whitespace-pre-wrap break-all">
                {chapter.meaning.en}
              </li>
              <li class="text-slate-400 group-hover:text-amber-500 text-lg font-normal
                w-full whitespace-pre-wrap break-all">
                {chapter.meaning.hi}
              </li>
            </ul>
          </a>
        </Motion>
      {/each}
    </div>
  </Motion>
  {/if}
  </div>
</SpxPageTransition>