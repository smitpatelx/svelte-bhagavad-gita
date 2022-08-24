<script lang='ts'>
  import type { PageData } from './$types';
  import SpxTopBar from '$components/generic/SpxTopBar.svelte';
  import { page } from '$app/stores';
  const { chapter } = $page.params;

  export let data: PageData;
</script>

<svelte:head>
  <title>GITA - CH: {chapter}</title>
</svelte:head>
<div class="w-full h-full block container mx-auto">
  <div class="bg-slate-800/60 w-full h-full p-4 gap-y-4 flex flex-col min-h-screen">
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

    <div class="flex flex-col gap-y-1 bg-slate-900 rounded-md py-6 px-2">
      <div class="w-full text-slate-200 text-xl
        rounded-md py-2 px-4 flex gap-x-4">
        <span class="font-bold text-amber-600">Name :</span>
        <span>{data.name}</span>
      </div>
      
      <div class="w-full text-slate-200 text-xl
        rounded-md py-2 px-4 flex gap-x-4">
        <span class="font-bold text-amber-600">Total Verse :</span>
        <span>{data.verses_count}</span>
      </div>
      
      <div class="w-full text-slate-200 text-xl
        rounded-md py-2 px-4 flex gap-x-4">
        <span class="font-bold text-amber-600">Transliteration :</span>
        <span class="whitespace-pre-wrap break-words">{data.transliteration}</span>
      </div>
      
      <div class="w-full text-slate-200 text-xl
        rounded-md py-2 px-4 flex gap-x-4">
        <span class="font-bold text-amber-600">Translation :</span>
        <span class="whitespace-pre-wrap break-words">{data.translation}</span>
      </div>
    </div>

    <hr class="border-amber-500/50 border-dashed"/>

    <h3 class="font-bold text-2xl text-slate-100">Meaning :</h3>
    <div class="w-full bg-slate-900 p-2 rounded-md">
      <h4 class="text-lg font-semibold text-amber-600">
        English
      </h4>

      <ul class="mt-2 flex flex-col gap-y-1 list-disc pl-6">
        <li class="w-full text-base font-normal text-slate-200
          hover:bg-slate-100/20 rounded-md p-0.5 whitespace-pre-wrap break-words">
          {data.meaning.en}
        </li>
      </ul>
    </div>
    <div class="w-full bg-slate-900 p-2 rounded-md">
      <h4 class="text-lg font-semibold text-amber-600">
        Hindi
      </h4>

      <ul class="mt-2 flex flex-col gap-y-1 list-disc pl-6">
        <li class="w-full text-base font-normal text-slate-200
          hover:bg-slate-100/20 rounded-md p-0.5 whitespace-pre-wrap break-words">
          {data.meaning.hi}
        </li>
      </ul>
    </div>

    <hr class="border-amber-500/50 border-dashed"/>

    <h3 class="font-bold text-2xl text-slate-100">Summary :</h3>
    <div class="w-full bg-slate-900 p-2 rounded-md">
      <h4 class="text-lg font-semibold text-amber-600">
        English
      </h4>

      <ul class="mt-2 flex flex-col gap-y-1 list-disc pl-6">
        <li class="w-full text-base font-normal text-slate-200
          hover:bg-slate-100/20 rounded-md p-0.5 whitespace-pre-wrap break-words">
          {data.summary.en}
        </li>
      </ul>
    </div>
    <div class="w-full bg-slate-900 p-2 rounded-md">
      <h4 class="text-lg font-semibold text-amber-600">
        Hindi
      </h4>

      <ul class="mt-2 flex flex-col gap-y-1 list-disc pl-6">
        <li class="w-full text-base font-normal text-slate-200
          hover:bg-slate-100/20 rounded-md p-0.5 whitespace-pre-wrap break-words">
          {data.summary.hi}
        </li>
      </ul>
    </div>

    <hr class="border-amber-500/50 border-dashed"/>

    <h3 class="font-bold text-2xl text-slate-100">Verse :</h3>
    <div class="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 gap-4">
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

  </div>
</div>