<script lang='ts'>
  import type { PageData } from './$types';
  import SpxTopBar from '$components/generic/SpxTopBar.svelte';
  import SpxPageTransition from '$src/components/generic/SpxPageTransition.svelte';
  import { page } from '$app/stores';
  import Motion from 'svelte-motion/src/motion/MotionSSR.svelte';
  
  const { chapter } = $page.params;

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
  <title>GITA - CH: {chapter}</title>
</svelte:head>
<SpxPageTransition>
  <div class="bg-slate-800/60 w-full h-full p-4 gap-y-4 flex flex-col min-h-fill">
    <SpxTopBar>
      <div
        class="flex flex-wrap gap-x-6 bg-gradient-to-br from-red-500 via-amber-500 to-amber-600
          bg-clip-text text-transparent text-lg"
      >
        <h2 class="font-bold">
          Chapter :
          <span class="font-normal text-white">{chapter}</span>
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
      <div
        class="flex flex-col gap-y-1 bg-slate-900 rounded-md py-6 px-2
          text-lg md:text-xl"
        use:motion
        >
        <div class="w-full text-slate-200 rounded-md py-2 px-4 
          flex flex-col md:flex-row md:gap-x-4 gap-y-2 md:gap-y-0">
          <span class="font-bold text-amber-600">Name :</span>
          <span>{data.name}</span>
        </div>
        
        <div class="w-full text-slate-200 rounded-md py-2 px-4 
          flex flex-col md:flex-row md:gap-x-4 gap-y-2 md:gap-y-0">
          <span class="font-bold text-amber-600">Total Verse :</span>
          <span>{data.verses_count}</span>
        </div>
        
        <div class="w-full text-slate-200 rounded-md py-2 px-4 
          flex flex-col md:flex-row md:gap-x-4 gap-y-2 md:gap-y-0">
          <span class="font-bold text-amber-600">Transliteration :</span>
          <span class="whitespace-pre-wrap break-all">{data.transliteration}</span>
        </div>
        
        <div class="w-full text-slate-200 rounded-md py-2 px-4 
          flex flex-col md:flex-row md:gap-x-4 gap-y-2 md:gap-y-0">
          <span class="font-bold text-amber-600">Translation :</span>
          <span class="whitespace-pre-wrap break-all">{data.translation}</span>
        </div>
      </div>
    </Motion>

    <hr class="border-amber-500/50 border-dashed"/>

    <Motion
      {variants}
      animate="visible"
      initial="hidden"
      custom={2}
      let:motion
    >
      <h3 use:motion class="font-bold text-2xl text-slate-100">Meaning :</h3>
    </Motion> 
    <Motion
      {variants}
      animate="visible"
      initial="hidden"
      custom={3}
      let:motion
    >
      <div use:motion class="w-full bg-slate-900 p-2 rounded-md">
        <h4 class="text-lg font-semibold text-amber-600">
          English
        </h4>

        <ul class="mt-2 flex flex-col gap-y-1 list-disc pl-6">
          <li class="w-full text-base font-normal text-slate-200
            hover:bg-slate-100/20 rounded-md p-0.5 whitespace-pre-wrap break-all">
            {data.meaning.en}
          </li>
        </ul>
      </div>
    </Motion> 
    <Motion
      {variants}
      animate="visible"
      initial="hidden"
      custom={4}
      let:motion
    >
      <div use:motion class="w-full bg-slate-900 p-2 rounded-md">
        <h4 class="text-lg font-semibold text-amber-600">
          Hindi
        </h4>

        <ul class="mt-2 flex flex-col gap-y-1 list-disc pl-6">
          <li class="w-full text-base font-normal text-slate-200
            hover:bg-slate-100/20 rounded-md p-0.5 whitespace-pre-wrap break-all">
            {data.meaning.hi}
          </li>
        </ul>
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
      <h3 use:motion class="font-bold text-2xl text-slate-100">Summary :</h3>
    </Motion>
    <Motion
      {variants}
      animate="visible"
      initial="hidden"
      custom={6}
      let:motion
    >
      <div use:motion class="w-full bg-slate-900 p-2 rounded-md">
        <h4 class="text-lg font-semibold text-amber-600">
          English
        </h4>

        <ul class="mt-2 flex flex-col gap-y-1 list-disc pl-6">
          <li class="w-full text-base font-normal text-slate-200
            hover:bg-slate-100/20 rounded-md p-0.5 whitespace-pre-wrap break-all">
            {data.summary.en}
          </li>
        </ul>
      </div>
    </Motion>
    <Motion
      {variants}
      animate="visible"
      initial="hidden"
      custom={7}
      let:motion
    >
      <div use:motion class="w-full bg-slate-900 p-2 rounded-md">
        <h4 class="text-lg font-semibold text-amber-600">
          Hindi
        </h4>

        <ul class="mt-2 flex flex-col gap-y-1 list-disc pl-6">
          <li class="w-full text-base font-normal text-slate-200
            hover:bg-slate-100/20 rounded-md p-0.5 whitespace-pre-wrap break-all">
            {data.summary.hi}
          </li>
        </ul>
      </div>
    </Motion>

    <hr class="border-amber-500/50 border-dashed"/>

    <Motion
      {variants}
      animate="visible"
      initial="hidden"
      custom={8}
      let:motion
    >
      <h3 use:motion class="font-bold text-2xl text-slate-100">Verse :</h3>
    </Motion>
    <Motion
      {variants}
      animate="visible"
      initial="hidden"
      custom={9}
      let:motion
    >
      <div use:motion class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
      {#each Array(Number(data.verses_count)) as n, i}
        <a
          href={`/explore/${chapter}/${i+1}/`}
          class="bg-slate-900 py-8 px-4 rounded-md flex flex-col
            focus:outline-none focus:ring focus:ring-orange-500
            focus:bg-orange-900 focus:text-opacity-80
            hover:bg-orange-900 hover:shadow-lg hover:shadow-orange-700/20
            transition-all duration-300 ease-in-out group">
          <h3 class="w-full text-center text-4xl font-bold text-orange-500">{i+1}</h3>
        </a>
      {/each}
      </div>
    </Motion>
  </div>
</SpxPageTransition>