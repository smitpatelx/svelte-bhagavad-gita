<script lang='ts'>
  import type { PageData } from './$types';
  import SpxTopBar from '$components/generic/SpxTopBar.svelte';
  import SpxPageTransition from '$src/components/generic/SpxPageTransition.svelte';
  import { page } from '$app/stores';
  import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';

  const { chapter, verse } = $page.params;

  export let data: PageData;

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
  <title>GITA - CH: {chapter} / VERSE {verse}</title>
</svelte:head>
<SpxPageTransition>
  <div class="bg-slate-800/60 w-full h-full p-4 gap-y-4 flex flex-col min-h-fill">
    <SpxTopBar>
      <div class="flex flex-wrap gap-x-6 bg-gradient-to-br from-red-500 via-amber-500 to-amber-600
      bg-clip-text text-transparent text-lg">
        <h2 class="font-bold">
          Chapter :
          <span class="font-normal text-white">{chapter}</span>
        </h2>
        <h2 class="font-bold">
          Verse :
          <span class="font-normal text-white">{verse}</span>
        </h2>
      </div>
    </SpxTopBar>

    <Motion
      {variants}
      animate="visible"
      initial="hidden"
      custom={1}
      let:motion
    >
      <h3 use:motion class="font-bold text-2xl text-slate-100">Slok :</h3>
    </Motion>
    <Motion
      {variants}
      animate="visible"
      initial="hidden"
      custom={2}
      let:motion
    >
      <div use:motion class="w-full bg-slate-900 text-slate-200 text-xl
        rounded-md py-2 px-4 flex flex-wrap items-center justify-between">
        {data.slok}
      </div>
    </Motion>

    <hr class="border-amber-500/50 border-dashed"/>

    <Motion
      {variants}
      animate="visible"
      initial="hidden"
      custom={3}
      let:motion
    >
      <h3 use:motion class="font-bold text-2xl text-slate-100">Transliteration :</h3>
    </Motion>
    <Motion
      {variants}
      animate="visible"
      initial="hidden"
      custom={4}
      let:motion
    >
      <div use:motion class="w-full bg-slate-900 text-slate-200 text-xl
        rounded-md py-2 px-4 flex flex-wrap items-center justify-between">
        {data.transliteration}
      </div>
    </Motion>

    <hr class="border-amber-500/50 border-dashed"/>

    <Motion
      {variants}
      animate="visible"
      initial="hidden"
      custom={5}
      let:motion
    >
      <h3 use:motion class="font-bold text-2xl text-slate-100">Translations :</h3>
    </Motion>
    <Motion
      {variants}
      animate="visible"
      initial="hidden"
      custom={6}
      let:motion
    >
    <div use:motion class="w-full bg-slate-900 text-slate-200 text-xl
      rounded-md p-2 flex flex-col gap-y-2">
      {#each data.translations as translation, index}
      <Motion
        {variants}
        animate="visible"
        initial="hidden"
        custom={8 + index}
        let:motion
      >
        <div use:motion class="w-full bg-slate-800 p-2 rounded-md">
          <h4 class="text-lg font-semibold text-amber-600">
            {translation.author}
          </h4>

          <ul class="mt-2 flex flex-col gap-y-1 list-disc pl-6">
            {#each translation.lines as line}  
              <li class="w-full text-base font-normal text-slate-200
                hover:bg-slate-100/20 rounded-md p-0.5 whitespace-pre-wrap break-all">
                {line}
              </li>
            {/each}
          </ul>
        </div>
      </Motion>
      {/each}
    </div>
  </Motion>
  </div>
</SpxPageTransition>
